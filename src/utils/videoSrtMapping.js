// Video to SRT Subtitle Mapping Table Utility

export const VIDEO_SRT_MAPPINGS = [
  {
    id: 'babymonster_drip',
    title: 'DRIP',
    artist: 'BABYMONSTER (베이비몬스터)',
    srtFilename: 'BABYMONSTER-DRIP.srt',
    srtPath: '/lyrics/BABYMONSTER-DRIP.srt',
    youtubeIds: ['cxhqqpVk65Q'],
    primaryUrl: 'https://www.youtube.com/watch?v=cxhqqpVk65Q',
    alternateUrls: [],
    description: 'BABYMONSTER - DRIP synchronized SRT subtitle lyrics'
  },
  {
    id: 'super_shy',
    title: 'Super Shy',
    artist: 'NewJeans (뉴진스)',
    srtFilename: 'super_shy.srt',
    srtPath: '/lyrics/super_shy.srt',
    youtubeIds: ['cxhqqpVk65Q', 'ArmDp-zijuc'],
    primaryUrl: 'https://www.youtube.com/watch?v=cxhqqpVk65Q',
    alternateUrls: ['https://www.youtube.com/watch?v=ArmDp-zijuc'],
    description: 'NewJeans - Super Shy timed SRT lyrics with Hangul, Romanization & English'
  },
  {
    id: 'dynamite',
    title: 'Dynamite',
    artist: 'BTS (방탄소년단)',
    srtFilename: 'dynamite.srt',
    srtPath: '/lyrics/dynamite.srt',
    youtubeIds: ['gdZLi9oWNZg'],
    primaryUrl: 'https://www.youtube.com/watch?v=gdZLi9oWNZg',
    alternateUrls: [],
    description: 'BTS - Dynamite prepared SRT subtitles'
  },
  {
    id: 'magnetic',
    title: 'Magnetic',
    artist: 'ILLIT (아일릿)',
    srtFilename: 'magnetic.srt',
    srtPath: '/lyrics/magnetic.srt',
    youtubeIds: ['Vk5-c_v4gMU'],
    primaryUrl: 'https://www.youtube.com/watch?v=Vk5-c_v4gMU',
    alternateUrls: [],
    description: 'ILLIT - Magnetic prepared SRT subtitles'
  },
  {
    id: 'hype_boy',
    title: 'Hype Boy',
    artist: 'NewJeans (뉴진스)',
    srtFilename: 'hype_boy.srt',
    srtPath: '/lyrics/hype_boy.srt',
    youtubeIds: ['aOKqWlsV0H0'],
    primaryUrl: 'https://www.youtube.com/watch?v=aOKqWlsV0H0',
    alternateUrls: [],
    description: 'NewJeans - Hype Boy prepared SRT subtitles'
  },
  {
    id: 'flower',
    title: 'Flower (꽃)',
    artist: 'JISOO (지수)',
    srtFilename: 'flower.srt',
    srtPath: '/lyrics/flower.srt',
    youtubeIds: ['Y8JFxS1HlDo'],
    primaryUrl: 'https://www.youtube.com/watch?v=Y8JFxS1HlDo',
    alternateUrls: [],
    description: 'JISOO - Flower prepared SRT subtitles'
  }
];

/**
 * Extract YouTube Video ID from full URL or return ID string.
 */
export function extractYouTubeId(urlOrId) {
  if (!urlOrId) return null;
  const match = urlOrId.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : urlOrId.trim();
}

/**
 * Finds a matching SRT mapping entry by YouTube Video ID or URL.
 */
export function findMappingByVideoId(videoIdOrUrl) {
  const videoId = extractYouTubeId(videoIdOrUrl);
  if (!videoId) return null;
  return VIDEO_SRT_MAPPINGS.find(item => item.youtubeIds.includes(videoId));
}
