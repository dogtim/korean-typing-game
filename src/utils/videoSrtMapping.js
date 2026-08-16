// Video to SRT Subtitle Mapping Table Utility

export const VIDEO_SRT_MAPPINGS = [
  {
    id: 'babymonster_choom',
    title: 'CHOOM (춤)',
    artist: 'BABYMONSTER (베이비몬스터)',
    srtFilename: 'choom.srt',
    srtPath: '/lyrics/choom.srt',
    youtubeIds: ['x3eqqoZPV_E'],
    primaryUrl: 'https://www.youtube.com/watch?v=x3eqqoZPV_E',
    alternateUrls: [],
    description: 'BABYMONSTER - CHOOM (춤) synchronized SRT subtitle lyrics'
  },
  {
    id: 'babymonster_drip',
    title: 'DRIP',
    artist: 'BABYMONSTER (베이비몬스터)',
    srtFilename: 'BABYMONSTER-DRIP.srt',
    srtPath: '/lyrics/BABYMONSTER-DRIP.srt',
    youtubeIds: ['Zp-Jhuhq0bQ'],
    primaryUrl: 'https://www.youtube.com/watch?v=Zp-Jhuhq0bQ',
    alternateUrls: [],
    description: 'BABYMONSTER - DRIP synchronized SRT subtitle lyrics'
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
