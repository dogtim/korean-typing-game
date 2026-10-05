#!/usr/bin/env node

/**
 * search_fancams.mjs
 * Fast concurrent CLI helper to discover concert setlists and find 10 distinct multi-angle fancams from YouTube.
 *
 * Usage:
 *   node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --venue "KYOCERA DOME OSAKA" --setlist
 *   node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --venue "KYOCERA DOME OSAKA" --song "SHEESH"
 *   node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --artist "BABYMONSTER" --venue "KYOCERA DOME OSAKA" --song "DRIP" --count 10
 */

const args = process.argv.slice(2);

function getArg(flag, defaultValue = '') {
  const idx = args.indexOf(flag);
  if (idx !== -1 && idx + 1 < args.length) {
    return args[idx + 1];
  }
  return defaultValue;
}

const isSetlistMode = args.includes('--setlist');
const isJsonOutput = args.includes('--json');
const artist = getArg('--artist', 'BABYMONSTER');
const venue = getArg('--venue', 'KYOCERA DOME OSAKA');
const song = getArg('--song', '');
const count = parseInt(getArg('--count', '10'), 10) || 10;

async function fetchYoutubeIds(query, limit = 5) {
  try {
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });
    clearTimeout(timeout);
    if (!res.ok) return [];
    const text = await res.text();
    const matches = [...text.matchAll(/\/watch\?v=([a-zA-Z0-9_-]{11})/g)];
    const unique = [...new Set(matches.map(m => m[1]))];
    return unique.slice(0, limit);
  } catch (_e) {
    return [];
  }
}

async function fetchOEmbed(videoId) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    const res = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`, {
      signal: controller.signal
    });
    clearTimeout(timeout);
    if (!res.ok) return { videoId, title: `YouTube Video (${videoId})`, author_name: 'YouTube Uploader' };
    const data = await res.json();
    return {
      videoId,
      title: data.title || `YouTube Video (${videoId})`,
      author_name: data.author_name || 'YouTube Uploader',
      thumbnail_url: data.thumbnail_url || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    };
  } catch (_e) {
    return { videoId, title: `YouTube Video (${videoId})`, author_name: 'YouTube Uploader' };
  }
}

// 10 Camera Angle Query Templates for K-Pop Concerts
const ANGLE_TEMPLATES = [
  {
    cam: 'CAM 1',
    name: '主舞台全景 (Center Stage / Full Cam)',
    tag: '全景主視角',
    querySuffix: 'full stage center cam 4K'
  },
  {
    cam: 'CAM 2',
    name: 'Ahyeon 焦點直拍 (Ahyeon Focus Cam)',
    tag: 'Ahyeon 直拍',
    querySuffix: 'Ahyeon fancam 4K'
  },
  {
    cam: 'CAM 3',
    name: 'Asa 饒舌與舞蹈特寫 (Asa Focus Cam)',
    tag: 'Asa 特寫',
    querySuffix: 'Asa fancam 4K'
  },
  {
    cam: 'CAM 4',
    name: 'Ruka 舞台焦點直拍 (Ruka Focus Cam)',
    tag: 'Ruka 直拍',
    querySuffix: 'Ruka fancam 4K'
  },
  {
    cam: 'CAM 5',
    name: 'Pharita 高音主唱視角 (Pharita Focus Cam)',
    tag: 'Pharita 直拍',
    querySuffix: 'Pharita fancam 4K'
  },
  {
    cam: 'CAM 6',
    name: 'Chiquita 舞蹈動作焦點 (Chiquita Focus Cam)',
    tag: 'Chiquita 直拍',
    querySuffix: 'Chiquita fancam 4K'
  },
  {
    cam: 'CAM 7',
    name: 'Rami 靈魂歌聲直拍 (Rami Focus Cam)',
    tag: 'Rami 直拍',
    querySuffix: 'Rami fancam 4K'
  },
  {
    cam: 'CAM 8',
    name: 'Rora 情感特寫焦點 (Rora Focus Cam)',
    tag: 'Rora 直拍',
    querySuffix: 'Rora fancam 4K'
  },
  {
    cam: 'CAM 9',
    name: '搖滾特區前排直擊 (VIP Pit / Front Row Floor)',
    tag: '搖滾區近景',
    querySuffix: 'VIP pit front row floor fancam'
  },
  {
    cam: 'CAM 10',
    name: '看台手燈海與震撼全景 (Upper Stand / Lightstick Wave)',
    tag: '全場燈海',
    querySuffix: 'lightstick wave dome view stand'
  }
];

async function handleSetlistSearch() {
  console.log(`\n🔍 Searching setlist for ${artist} at ${venue}...\n`);
  const query = `${artist} ${venue} setlist songs`;
  const ids = await fetchYoutubeIds(query, 6);

  const results = await Promise.all(ids.map(id => fetchOEmbed(id)));

  console.log(`### 🎵 ${artist} @ ${venue} 演唱會歌曲檢索與參考資料\n`);
  results.forEach((r, idx) => {
    console.log(`${idx + 1}. [${r.title}](https://www.youtube.com/watch?v=${r.videoId}) - 上傳者: ${r.author_name}`);
  });

  console.log('\n💡 提示：您可以從歌單中選取特定歌曲，並執行：');
  console.log(`node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --artist "${artist}" --venue "${venue}" --song "<歌曲名稱>"\n`);
}

async function handleMultiAngleSearch() {
  console.log(`\n🎬 搜尋 ${artist} 《${song}》在 ${venue} 的 10 種不同角度影片...\n`);

  const activeTemplates = ANGLE_TEMPLATES.slice(0, count);

  // Parallel fetch of video candidates for each angle
  const candidatesPerAngle = await Promise.all(
    activeTemplates.map(tmpl => {
      const query = `${artist} ${venue} ${song} ${tmpl.querySuffix}`;
      return fetchYoutubeIds(query, 5);
    })
  );

  const seenIds = new Set();
  const selectedEntries = [];

  for (let i = 0; i < activeTemplates.length; i++) {
    const tmpl = activeTemplates[i];
    const candidates = candidatesPerAngle[i];

    let chosenId = candidates.find(id => !seenIds.has(id));
    if (!chosenId && candidates.length > 0) {
      chosenId = candidates[0];
    }

    if (chosenId) {
      seenIds.add(chosenId);
    }

    selectedEntries.push({
      cam: tmpl.cam,
      angleName: tmpl.name,
      tag: tmpl.tag,
      videoId: chosenId || ''
    });
  }

  // Fetch oEmbed details in parallel
  const details = await Promise.all(
    selectedEntries.map(async entry => {
      if (!entry.videoId) {
        return {
          ...entry,
          title: `未找到對應角度影片 (${entry.tag})`,
          author: '-',
          url: ''
        };
      }
      const info = await fetchOEmbed(entry.videoId);
      return {
        ...entry,
        title: info.title,
        author: info.author_name,
        url: `https://www.youtube.com/watch?v=${entry.videoId}`
      };
    })
  );

  if (isJsonOutput) {
    console.log(JSON.stringify(details, null, 2));
    return;
  }

  console.log(`| 機位編號 | 視角類型 | 標籤 | YouTube 標題 | 上傳者 | 影片連結 |`);
  console.log(`| :--- | :--- | :--- | :--- | :--- | :--- |`);
  details.forEach(item => {
    const linkStr = item.videoId ? `[觀看影片](${item.url}) (\`${item.videoId}\`)` : '待補';
    console.log(`| **${item.cam}** | ${item.angleName} | \`${item.tag}\` | ${item.title.replace(/\|/g, '-')} | ${item.author} | ${linkStr} |`);
  });

  console.log('\n✨ 可直接複製上述影片 ID，放入 `src/data/concertsData.js` 的 `availableAngles` 或 `defaultSlots` 供多視角播放牆即時切換！\n');
}

async function main() {
  if (isSetlistMode || !song) {
    await handleSetlistSearch();
  } else {
    await handleMultiAngleSearch();
  }
}

main();
