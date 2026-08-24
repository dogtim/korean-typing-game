#!/usr/bin/env node

/**
 * Hangul Type Quest - K-Pop Subtitle Pre-Processing CLI Tool
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { shiftSRT, alignAnchor, validateSRT } from './srtEngine.js';
import { convertLrcToSrtString } from './lrcConverter.js';
import { registerSong } from './autoRegister.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Simple argument parser
function parseArgs(args) {
  const options = {};
  const positional = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const next = args[i + 1];
      if (next && !next.startsWith('--')) {
        options[key] = next;
        i++;
      } else {
        options[key] = true;
      }
    } else if (arg.startsWith('-')) {
      const key = arg.slice(1);
      const next = args[i + 1];
      if (next && !next.startsWith('--')) {
        options[key] = next;
        i++;
      } else {
        options[key] = true;
      }
    } else {
      positional.push(arg);
    }
  }

  return { command: positional[0], options, positional };
}

function printHelp() {
  console.log(`
🎧 Hangul Type Quest - Subtitle & Lyrics Pre-processing Tool

Usage:
  npm run tool -- <command> [options]
  node tools/cli.js <command> [options]

Commands:
  shift      Shift all timestamps in an SRT file by +/- seconds
             Options:
               --file <path>         Path to SRT file (e.g. public/lyrics/SONG.srt)
               --offset <seconds>    Time in seconds to shift (e.g. +4.5 or -2.0)
               --output <path>       (Optional) Output path. If omitted, overwrites in place

  sync       Align SRT to a YouTube video's first vocal timestamp
             Options:
               --srt <path>          Path to SRT file
               --video-start <time>  Timestamp when vocals start in video (e.g. 00:04.5)
               --srt-start <time>    Timestamp of first vocal in SRT (e.g. 00:00.5)

  convert    Convert raw LRC file to formatted millisecond SRT
             Options:
               --input <path>        Path to input .lrc file
               --output <path>       Path to output .srt file
               --offset <seconds>    (Optional) Additional timestamp shift

  register   Register song & SRT into video mapping and preset lists
             Options:
               --video <id>          YouTube Video ID (e.g. bMhDJ0S0OBA)
               --srt <filename>      SRT Filename (e.g. ILLIT-ITS-ME.srt)
               --title <title>       Song Title (e.g. "It's Me")
               --artist <artist>     Artist Name (e.g. "ILLIT (아일릿)")
               --id <unique_id>      (Optional) Custom song ID

  align      Download & extract audio/captions directly from YouTube video and align to lyrics
             Options:
               --video <id>          YouTube Video ID or URL
               --output <filename>   Target SRT filename (e.g. ILLIT-ITS-ME.srt)
               --lyrics <text>       (Optional) Raw lyrics string to align against

  validate   Check SRT structure, sequence, and Hangul/English character ratios
             Options:
               --file <path>         Path to SRT file

Examples:
  node tools/cli.js align --video bMhDJ0S0OBA --output ILLIT-ITS-ME.srt
  node tools/cli.js shift --file public/lyrics/ILLIT-ITS-ME.srt --offset +4.0
  node tools/cli.js sync --srt public/lyrics/SONG.srt --video-start 00:05.2 --srt-start 00:01.2
  node tools/cli.js convert --input raw.lrc --output public/lyrics/SONG.srt
  node tools/cli.js register --video bMhDJ0S0OBA --srt ILLIT-ITS-ME.srt --title "It's Me" --artist "ILLIT (아일릿)"
  node tools/cli.js validate --file public/lyrics/ILLIT-ITS-ME.srt
`);
}

function resolveFilePath(relOrAbs) {
  if (path.isAbsolute(relOrAbs)) return relOrAbs;
  return path.resolve(rootDir, relOrAbs);
}

function saveSrtFile(targetPath, content) {
  const dir = path.dirname(targetPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(targetPath, content, 'utf-8');
}

async function main() {
  const { command, options } = parseArgs(process.argv.slice(2));

  if (!command || options.help || options.h) {
    printHelp();
    return;
  }

  try {
    switch (command) {
      case 'shift': {
        const filePath = resolveFilePath(options.file || options.f);
        const offset = parseFloat(options.offset || options.o);

        if (!filePath || isNaN(offset)) {
          console.error('❌ Error: --file <path> and --offset <seconds> are required.');
          process.exit(1);
        }

        if (!fs.existsSync(filePath)) {
          console.error(`❌ Error: File not found: ${filePath}`);
          process.exit(1);
        }

        const raw = fs.readFileSync(filePath, 'utf-8');
        const shifted = shiftSRT(raw, offset);
        const outPath = options.output ? resolveFilePath(options.output) : filePath;

        saveSrtFile(outPath, shifted);
        console.log(`✅ Successfully shifted ${path.basename(filePath)} by ${offset >= 0 ? `+${offset}` : offset}s!`);
        console.log(`💾 Saved to: ${outPath}`);
        break;
      }

      case 'sync': {
        const srtPath = resolveFilePath(options.srt || options.file);
        const videoStart = options['video-start'] || options.video;
        const srtStart = options['srt-start'] || options.start || '00:00,000';

        if (!srtPath || !videoStart) {
          console.error('❌ Error: --srt <path> and --video-start <time> are required.');
          process.exit(1);
        }

        if (!fs.existsSync(srtPath)) {
          console.error(`❌ Error: File not found: ${srtPath}`);
          process.exit(1);
        }

        const raw = fs.readFileSync(srtPath, 'utf-8');
        const { offset, content } = alignAnchor(raw, srtStart, videoStart);
        const outPath = options.output ? resolveFilePath(options.output) : srtPath;

        saveSrtFile(outPath, content);
        console.log(`✅ Aligned anchor (${srtStart} ➔ ${videoStart}, offset: ${offset >= 0 ? `+${offset}` : offset}s)`);
        console.log(`💾 Saved to: ${outPath}`);
        break;
      }

      case 'convert': {
        const inputPath = resolveFilePath(options.input || options.i);
        const outputPath = resolveFilePath(options.output || options.o);
        const offset = options.offset ? parseFloat(options.offset) : 0;

        if (!inputPath || !outputPath) {
          console.error('❌ Error: --input <lrc-path> and --output <srt-path> are required.');
          process.exit(1);
        }

        if (!fs.existsSync(inputPath)) {
          console.error(`❌ Error: File not found: ${inputPath}`);
          process.exit(1);
        }

        const rawLrc = fs.readFileSync(inputPath, 'utf-8');
        let srtContent = convertLrcToSrtString(rawLrc);

        if (offset !== 0) {
          srtContent = shiftSRT(srtContent, offset);
        }

        saveSrtFile(outputPath, srtContent);
        console.log(`✅ Successfully converted ${path.basename(inputPath)} to SRT!`);
        console.log(`💾 Saved to: ${outputPath}`);
        break;
      }

      case 'register': {
        const videoId = options.video || options.v;
        const srtFilename = options.srt || options.file;
        const title = options.title || options.t;
        const artist = options.artist || options.a;
        const songId = options.id || `${artist}_${title}`.toLowerCase().replace(/[^a-z0-9_]/g, '_');

        if (!videoId || !srtFilename || !title || !artist) {
          console.error('❌ Error: --video <id>, --srt <filename>, --title <title>, and --artist <artist> are required.');
          process.exit(1);
        }

        const result = registerSong({
          id: songId,
          title,
          artist,
          srtFilename,
          youtubeIds: [videoId]
        });

        console.log(`✅ Registered "${artist} - ${title}" across ${result.updatedRegistries} registries!`);
        console.log(`   • Video ID: ${videoId}`);
        console.log(`   • SRT Path: ${result.srtPath}`);
        break;
      }

      case 'validate': {
        const filePath = resolveFilePath(options.file || options.f);
        if (!filePath || !fs.existsSync(filePath)) {
          console.error(`❌ Error: File not found: ${filePath}`);
          process.exit(1);
        }

        const raw = fs.readFileSync(filePath, 'utf-8');
        const report = validateSRT(raw);

        console.log(`\n📋 SRT Validation Report for: ${path.basename(filePath)}`);
        console.log(`   • Status: ${report.valid ? '✅ VALID' : '❌ INVALID'}`);
        console.log(`   • Total Subtitle Lines: ${report.totalLines}`);
        console.log(`   • Hangul Density: ${report.hangulRatio}`);
        console.log(`   • English Density: ${report.englishRatio}`);
        console.log(`   • Total Track Duration: ${report.duration}`);

        if (report.warnings.length > 0) {
          console.log('\n⚠️ Warnings:');
          report.warnings.forEach(w => console.log(`   - ${w}`));
        }

        if (report.errors.length > 0) {
          console.log('\n❌ Errors:');
          report.errors.forEach(e => console.log(`   - ${e}`));
        }
        break;
      }

      case 'align': {
        const videoId = options.video || options.v;
        const outputFilename = options.output || options.o || options.file || options.f;
        let lyricsText = options.lyrics || options.text || '';

        if (options.file && fs.existsSync(resolveFilePath(options.file))) {
          lyricsText = fs.readFileSync(resolveFilePath(options.file), 'utf-8');
        }

        if (!videoId || !outputFilename) {
          console.error('❌ Error: --video <id> and --output <filename.srt> are required.');
          process.exit(1);
        }

        const cleanFilename = outputFilename.endsWith('.srt') ? outputFilename : `${outputFilename}.srt`;
        const { syncVideoLyrics } = await import('./audioAligner.js');
        await syncVideoLyrics({
          videoId,
          lyricsText,
          outputFilename: cleanFilename
        });
        break;
      }

      default:
        console.error(`❌ Unknown command: "${command}". Run "node tools/cli.js --help" for options.`);
        process.exit(1);
    }
  } catch (err) {
    console.error('❌ Command execution error:', err.message);
    process.exit(1);
  }
}

main();
