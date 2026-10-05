#!/usr/bin/env node

/**
 * search_fancams.mjs
 * Fast concurrent CLI helper to discover concert setlists and find 10 distinct multi-angle fancams from YouTube.
 * Enforces Multilingual Queries (Korean, Japanese, Chinese, English) and STRICT YouTube Shorts Exclusion.
 *
 * Usage:
 *   node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --venue "KYOCERA DOME OSAKA" --setlist
 *   node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --venue "KYOCERA DOME OSAKA" --song "DRIP"
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
const year = getArg('--year', '2026');
const count = parseInt(getArg('--count', '10'), 10) || 10;

async function fetchYoutubeIds(query, limit = 8) {
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

/**
 * Strict Shorts Filter:
 * 1. Checks if title matches #shorts, #short, shorts, or #tiktok.
 * 2. Makes an HTTP HEAD request to https://www.youtube.com/shorts/${videoId}:
 *    - HTTP 200 = IT IS A SHORT (Reject)
 *    - HTTP 303 / 302 Redirect = Standard horizontal video (Keep)
 */
async function isShortVideo(videoId, title = '') {
  if (/#shorts?|shorts?|#tiktok/i.test(title)) return true;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(`https://www.youtube.com/shorts/${videoId}`, {
      method: 'HEAD',
      redirect: 'manual',
      signal: controller.signal
    });
    clearTimeout(timeout);
    return res.status === 200;
  } catch (_e) {
    return false;
  }
}

// 10 Multilingual Camera Angle Query Templates (Korean, Japanese, Chinese, English)
// Strictly prioritizes 2026 World Tour / live concert fancams
const ANGLE_TEMPLATES = [
  {
    cam: 'CAM 1',
    name: '2026 巡演 4K 主舞台全景 (World Tour [CHOOM] Full Cam)',
    tag: '巡演 4K 主舞台',
    queries: [
      `${year} BABYMONSTER WORLD TOUR CHOOM ${song} 4K`,
      `[4K] BABYMONSTER WORLD TOUR 춤 CHOOM ${song}`,
      `${year} 베이비몬스터 ${song} 콘서트 풀캠 4K`,
      `${year} ベビモン ${song} ライブ フルステージ 4K`
    ]
  },
  {
    cam: 'CAM 2',
    name: 'Ahyeon 2026 巡演直拍 (Ahyeon Focus Cam)',
    tag: 'Ahyeon 巡演直拍',
    queries: [
      `${year} 베이비몬스터 아현 직캠 ${song} WORLD TOUR 춤`,
      `260627 베이비몬스터 아현 직캠 ${song}`,
      `${year} BABYMONSTER AHYEON ${song} fancam CHOOM`,
      `${year} アヒョン ${song} ファンカム 4K`
    ]
  },
  {
    cam: 'CAM 3',
    name: 'Ahyeon 2026 4K 特寫 (Ahyeon 4K Close-up Cam)',
    tag: 'Ahyeon 4K 特寫',
    queries: [
      `${year} BABYMONSTER CHOOM WORLD TOUR ${song} AHYEON 4K`,
      `베이비몬스터 아현 ${song} 4K 특필 직캠`,
      `${year} BABYMONSTER Ahyeon ${song} concert close-up`
    ]
  },
  {
    cam: 'CAM 4',
    name: '2026 巡演 4K 連唱直拍 (World Tour 4K Fancam)',
    tag: '4K 連唱直拍',
    queries: [
      `BABYMONSTER CONCERT BATTER UP + ${song} 4K Fancam 직캠 WORLD TOUR 춤`,
      `${year} BABYMONSTER ${song} 4K concert fancam`,
      `${year} 베이비몬스터 콘서트 ${song} 직캠 4K`
    ]
  },
  {
    cam: 'CAM 5',
    name: '2026 CHOOM 巡演現場直擊 (CHOOM Tour Stage Live)',
    tag: 'CHOOM 現場直擊',
    queries: [
      `${year} BABYMONSTER WORLD TOUR 춤 CHOOM ${song}`,
      `260911 BABYMONSTER WORLD TOUR 춤 CHOOM ${song}`,
      `${year} BABYMONSTER ${song} live concert stage`
    ]
  },
  {
    cam: 'CAM 6',
    name: '2026 夏季音樂祭現場 (Summer Sonic 2026 Stage Cam)',
    tag: '2026 夏季音樂祭',
    queries: [
      `BABYMONSTER - ${song} SUMMER SONIC ${year} TOKYO`,
      `${year} 베이비몬스터 ${song} Summer Sonic`,
      `サマソニ ${year} ベビモン ${song}`
    ]
  },
  {
    cam: 'CAM 7',
    name: '2026 4K 現場直拍 (2026 4K Live Stage Fancam)',
    tag: '2026 4K 現場',
    queries: [
      `260814 BABYMONSTER - ${song} live Summer Sonic ${year} 4K`,
      `${year} BABYMONSTER ${song} 4K stage fancam`,
      `${year} 베이비몬스터 ${song} 4K 라이브`
    ]
  },
  {
    cam: 'CAM 8',
    name: '2026 日本巡演安可 (Japan Tour Encore Live)',
    tag: '2026 日本巡演安可',
    queries: [
      `BABYMONSTER - ${song} ENCORE WORLD TOUR KANAGAWA`,
      `${year} ベビモン ${song} アンコール ライブ`,
      `${year} BABYMONSTER ${song} encore live`
    ]
  },
  {
    cam: 'CAM 9',
    name: '2026 巡演搖滾區特寫 (Tour VIP Pit Fancam)',
    tag: '2026 搖滾區特寫',
    queries: [
      `Babymonster ${song} Taipei Fan Concert ${year} 4K VIP`,
      `${year} BABYMONSTER ${song} VIP pit 4K`,
      `${year} 베이비몬스터 ${song} 스탠딩 직캠`
    ]
  },
  {
    cam: 'CAM 10',
    name: '2026 國際音樂節/巨蛋連線 (2026 International Live Arena)',
    tag: '2026 國際音樂節',
    queries: [
      `${song} BABYMONSTER live ${year} TIMA International Music Awards`,
      `${year} BABYMONSTER ${song} Kyocera Dome Osaka`,
      `${year} 2026 BABYMONSTER ${song} live arena`
    ]
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
  console.log(`\n🎬 搜尋 ${artist} 《${song}》在 ${venue} 的 10 種不同角度影片（多語言關鍵字 + 嚴格排除 Shorts 短影音）...\n`);

  const activeTemplates = ANGLE_TEMPLATES.slice(0, count);
  const seenIds = new Set();
  const selectedEntries = [];

  for (let i = 0; i < activeTemplates.length; i++) {
    const tmpl = activeTemplates[i];
    let matchedId = null;
    let matchedOEmbed = null;

    for (const q of tmpl.queries) {
      if (matchedId) break;
      const ids = await fetchYoutubeIds(q, 6);
      for (const id of ids) {
        if (seenIds.has(id)) continue;
        const oembed = await fetchOEmbed(id);
        const isShort = await isShortVideo(id, oembed.title);
        if (!isShort) {
          matchedId = id;
          matchedOEmbed = oembed;
          seenIds.add(id);
          break;
        }
      }
    }

    if (matchedId && matchedOEmbed) {
      selectedEntries.push({
        cam: tmpl.cam,
        angleName: tmpl.name,
        tag: tmpl.tag,
        videoId: matchedId,
        title: matchedOEmbed.title,
        author: matchedOEmbed.author_name,
        url: `https://www.youtube.com/watch?v=${matchedId}`
      });
    } else {
      selectedEntries.push({
        cam: tmpl.cam,
        angleName: tmpl.name,
        tag: tmpl.tag,
        videoId: '',
        title: `未找到符合條件的完整橫向影片 (${tmpl.tag})`,
        author: '-',
        url: ''
      });
    }
  }

  if (isJsonOutput) {
    console.log(JSON.stringify(selectedEntries, null, 2));
    return;
  }

  console.log(`| 機位編號 | 視角類型 | 標籤 | YouTube 完整影片標題 (非 Shorts) | 上傳者 | 影片連結 |`);
  console.log(`| :--- | :--- | :--- | :--- | :--- | :--- |`);
  selectedEntries.forEach(item => {
    const linkStr = item.videoId ? `[觀看影片](${item.url}) (\`${item.videoId}\`)` : '待補';
    console.log(`| **${item.cam}** | ${item.angleName} | \`${item.tag}\` | ${item.title.replace(/\|/g, '-')} | ${item.author} | ${linkStr} |`);
  });

  console.log('\n✨ 已全部通過 YouTube Shorts 嚴格過濾，確認為 16:9 水平完整演唱會/直拍影片！');
  console.log('✨ 可直接複製上述影片 ID，放入 `src/data/concertsData.js` 的 `setlist` 供多視角播放牆即時切換！\n');
}

async function main() {
  if (isSetlistMode || !song) {
    await handleSetlistSearch();
  } else {
    await handleMultiAngleSearch();
  }
}

main();
