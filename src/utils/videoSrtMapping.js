// Video to SRT Subtitle Mapping Table Utility

export const VIDEO_SRT_MAPPINGS = [
  {
    id: 'babymonster_choom',
    title: 'CHOOM (춤)',
    artist: 'BABYMONSTER (베이비몬스터)',
    srtFilename: 'BABYMONSTER-CHOOM.srt',
    srtPath: '/lyrics/BABYMONSTER-CHOOM.srt',
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
  },
  {
    id: 'babymonster_sheesh',
    title: 'SHEESH',
    artist: 'BABYMONSTER (베이비몬스터)',
    srtFilename: 'BABYMONSTER-SHEESH.srt',
    srtPath: '/lyrics/BABYMONSTER-SHEESH.srt',
    youtubeIds: ['2wA_b6YHjqQ', '0k5G6F0pWoc'],
    primaryUrl: 'https://www.youtube.com/watch?v=2wA_b6YHjqQ',
    alternateUrls: [
      'https://www.youtube.com/watch?v=0k5G6F0pWoc'
    ],
    description: 'BABYMONSTER - SHEESH synchronized SRT subtitle lyrics'
  },
  {
    id: 'illit_its_me',
    title: "It's Me",
    artist: 'ILLIT (아일릿)',
    srtFilename: 'ILLIT-ITS-ME.srt',
    srtPath: '/lyrics/ILLIT-ITS-ME.srt',
    youtubeIds: ['bMhDJ0S0OBA'],
    primaryUrl: 'https://www.youtube.com/watch?v=bMhDJ0S0OBA',
    alternateUrls: [],
    description: "ILLIT - It's Me synchronized SRT subtitle lyrics"
  },
  {
    id: 'babymonster_sugar_honey_ice_tea',
    title: "SUGAR HONEY ICE TEA",
    artist: 'BabyMonster',
    srtFilename: 'BABYMONSTER-SUGAR-HONEY-ICE-TEA.srt',
    srtPath: '/lyrics/BABYMONSTER-SUGAR-HONEY-ICE-TEA.srt',
    youtubeIds: ['naoGk-Zjc1s'],
    primaryUrl: 'https://www.youtube.com/watch?v=naoGk-Zjc1s',
    alternateUrls: [],
    description: "BabyMonster - SUGAR HONEY ICE TEA synchronized SRT subtitle lyrics"
  },
  {
    id: 'babymonster_psycho',
    title: 'PSYCHO',
    artist: 'BABYMONSTER (베이비몬스터)',
    srtFilename: 'BABYMONSTER-PSYCHO.srt',
    srtPath: '/lyrics/BABYMONSTER-PSYCHO.srt',
    youtubeIds: ['yd_uG3TtREs'],
    primaryUrl: 'https://www.youtube.com/watch?v=yd_uG3TtREs',
    alternateUrls: [],
    description: 'BABYMONSTER - PSYCHO synchronized SRT subtitle lyrics'
  },
  {
    id: 'illit_magnetic',
    title: "Magnetic",
    artist: 'ILLIT (아일릿)',
    srtFilename: 'ILLIT-MAGNETIC.srt',
    srtPath: '/lyrics/ILLIT-MAGNETIC.srt',
    youtubeIds: ['Vk5-c_v4gMU'],
    primaryUrl: 'https://www.youtube.com/watch?v=Vk5-c_v4gMU',
    alternateUrls: [],
    description: "ILLIT (아일릿) - Magnetic synchronized SRT subtitle lyrics"
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
