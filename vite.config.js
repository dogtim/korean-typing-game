import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => { data += chunk })
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {})
      } catch (err) {
        reject(err)
      }
    })
    req.on('error', reject)
  })
}

function sendJson(res, status, payload) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(payload))
}

/**
 * Dev-only local admin API. Wraps the existing tools/audioAligner.js (yt-dlp
 * caption sync) and tools/autoRegister.js (registry file writes) so the
 * in-app Admin page can drive them. `apply: 'serve'` means this middleware
 * only exists under `vite dev` — it is never included in `vite build`.
 */
function adminSyncApiPlugin() {
  return {
    name: 'admin-sync-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.method !== 'POST' || !req.url.startsWith('/api/admin/')) {
          return next()
        }

        try {
          const body = await readJsonBody(req)

          if (req.url === '/api/admin/sync-youtube') {
            const { videoId, lyricsText, outputFilename } = body
            if (!videoId || !outputFilename) {
              return sendJson(res, 400, { error: 'videoId and outputFilename are required.' })
            }
            const { syncVideoLyrics } = await import('./tools/audioAligner.js')
            const result = await syncVideoLyrics({ videoId, lyricsText: lyricsText || '', outputFilename })
            return sendJson(res, 200, result)
          }

          if (req.url === '/api/admin/register') {
            const { id, title, artist, srtFilename, youtubeIds, srtContent } = body
            if (!title || !artist || !srtFilename || !srtContent || !youtubeIds?.length) {
              return sendJson(res, 400, { error: 'title, artist, srtFilename, youtubeIds, and srtContent are required.' })
            }

            const cleanFilename = srtFilename.endsWith('.srt') ? srtFilename : `${srtFilename}.srt`
            const publicDir = path.join(rootDir, 'public', 'lyrics')
            fs.mkdirSync(publicDir, { recursive: true })
            fs.writeFileSync(path.join(publicDir, cleanFilename), srtContent, 'utf-8')

            const songId = id || `${artist}_${title}`.toLowerCase().replace(/[^a-z0-9_]+/g, '_')
            const { registerSong } = await import('./tools/autoRegister.js')
            const result = registerSong({ id: songId, title, artist, srtFilename: cleanFilename, youtubeIds })
            return sendJson(res, 200, result)
          }

          if (req.url === '/api/admin/extract-frames') {
            const { video, start, count, duration, format, resolution, quality } = body
            if (!video) {
              return sendJson(res, 400, { error: 'video (URL, Video ID, or Song Name) is required.' })
            }
            const { extractVideoFrames } = await import('./tools/frameExtractor.js')
            const result = await extractVideoFrames({
              video,
              start: start ?? 0,
              count: count ?? 1,
              duration: duration ?? 0.25,
              format: format || 'jpg',
              resolution: resolution || '1080p',
              quality: quality || 2,
              outputDir: path.join(rootDir, 'output', 'frames')
            })

            // Attach base64 data URLs for instant rendering in the browser
            const framesWithData = result.frames.map(f => {
              let dataUrl = null
              try {
                const buffer = fs.readFileSync(f.outputPath)
                const mime = f.filename.endsWith('.png') ? 'image/png' : f.filename.endsWith('.webp') ? 'image/webp' : 'image/jpeg'
                dataUrl = `data:${mime};base64,${buffer.toString('base64')}`
              } catch (_e) {}
              return {
                ...f,
                dataUrl
              }
            })

            return sendJson(res, 200, {
              ...result,
              frames: framesWithData
            })
          }

          return sendJson(res, 404, { error: `Unknown admin endpoint: ${req.url}` })
        } catch (err) {
          sendJson(res, 500, { error: err.message || String(err) })
        }
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), adminSyncApiPlugin()],
})
