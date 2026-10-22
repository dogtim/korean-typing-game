---
name: calibrate-concert-multicam-offsets
description: >-
  Use this skill when the user wants to calibrate or synchronize multi-camera
  concert timestamps across long-form YouTube fancams and full-set recordings.
  Applies the Anchor Delta Method (基準錨點差值校準法): once the start offset of the
  first song (or anchor song) is verified across the active cameras, it automatically
  extracts the concert setlist/chapters from the reference anchor video and applies
  the relative time shift (Delta) to all remaining songs in the setlist.
---

# Calibrate Concert Multi-Cam Offsets SOP (演唱會多機位時間戳基準差值校準技能)

This skill provides a standardized, automated methodology for synchronizing multi-camera YouTube fancams for any concert in **Hangul PopPop's Concert Video Wall**.

Instead of manually calibrating all songs across all cameras (e.g., 11 songs × 5 cameras = 55 manual calculations), this skill leverages the **Anchor Delta Principle (基準錨點差值原理)**: once the first song's time offsets are locked across cameras, all remaining songs throughout the entire concert are automatically computed in seconds.

---

## 📐 The Anchor Delta Principle (核心數學原理)

In continuous, uncut concert fancams (長片一鏡到底無剪輯):
1. **The relative time difference ($\Delta_c$) between Camera $c$ and the Reference Anchor Camera is constant**:
   $$\Delta_c = \text{Offset}_{\text{Song 1}}(c) - \text{Offset}_{\text{Song 1}}(\text{Anchor})$$
2. **For any subsequent song $k$ in the concert setlist**:
   $$\text{Offset}_k(c) = \text{Offset}_k(\text{Anchor}) + \Delta_c$$

### Real-World Example (Summer Sonic 2026):
* **Anchor Video (`WuelifqxMLs`)**: Track 1 《WE GO UP》 starts at `10s`.
* **CAM 2 (`xJuXrgbx-8I`)**: Starts at `10s` $\rightarrow \Delta = 0\text{s}$
* **CAM 3 (`wSj_O5v5aMo`)**: Starts at `39s` $\rightarrow \Delta = +29\text{s}$
* **CAM 4 (`_zV0QTAHd5I`)**: Starts at `77s` $\rightarrow \Delta = +67\text{s}$
* **CAM 5 (`9Y-95rgsDDY`)**: Starts at `4s` $\rightarrow \Delta = -6\text{s}$

When jumping to Track 4 《DRIP》 (Anchor offset = `679s`):
* `WuelifqxMLs`: $679 + 0 = 679\text{s}$ (11:19)
* `xJuXrgbx-8I`: $679 + 0 = 679\text{s}$ (11:19)
* `wSj_O5v5aMo`: $679 + 29 = 708\text{s}$ (11:48)
* `_zV0QTAHd5I`: $679 + 67 = 746\text{s}$ (12:26)
* `9Y-95rgsDDY`: $679 - 155 = 524\text{s}$ (08:44, accounting for MC cut)

---

## ⚡ Automated CLI Tool

A ready-to-run helper script is bundled in this skill:

```bash
# Calculate all songs from Anchor + Camera offsets:
node .agents/skills/calibrate-concert-multicam-offsets/scripts/calibrate_offsets.mjs \
  --anchor "<AnchorVideoId>:<AnchorSong1Offset>" \
  --cams "<Cam2Id>:<Cam2Offset>,<Cam3Id>:<Cam3Offset>,<Cam4Id>:<Cam4Offset>"

# Example (BABYMONSTER Summer Sonic 2026):
node .agents/skills/calibrate-concert-multicam-offsets/scripts/calibrate_offsets.mjs \
  --anchor "WuelifqxMLs:10" \
  --cams "xJuXrgbx-8I:10,wSj_O5v5aMo:39,_zV0QTAHd5I:77,9Y-95rgsDDY:4"
```

The script will:
1. Fetch native YouTube chapters or description tracklists from the Anchor video.
2. Calculate the exact $\Delta$ for every camera.
3. Automatically apply $\Delta$ to all tracks.
4. Output a clean, copy-paste ready `songs: { ... }` object for `src/data/concertsData.js`.

---

## 📋 Standard Operating Procedure (SOP)

### Step 1: Pick the Reference Anchor Video
Select one video that has **the most complete tracklist or author chapter markers**:
* E.g. in Summer Sonic, `WuelifqxMLs` has all 15 tracks labeled with timestamps in chapters.
* Note down its starting offset for the first song (e.g. `10s`).

### Step 2: Determine Song 1 Offsets for Active Cameras
For each other camera angle:
1. Open the video in ConcertWall or YouTube.
2. Find the exact frame where the first song begins (e.g. members lift microphones, first laser flash, first dance movement).
3. Record the second mark:
   * Cam 1: $T_1$
   * Cam 2: $T_2$
   * Cam 3: $T_3$

### Step 3: Run Anchor Delta Propagation
Run the CLI script or calculate:
$$\text{Offset}_k(\text{Cam}) = \text{Offset}_k(\text{Anchor}) + (\text{Offset}_1(\text{Cam}) - \text{Offset}_1(\text{Anchor}))$$

### Step 4: Handle Edited / Cut Fancams (Special Case)
If a video's total runtime is substantially shorter than the anchor (e.g., 32 minutes vs 44 minutes):
* The uploader cut out MC/talking segments between songs.
* Check the duration of the cut MC segments in the Anchor chapter list:
  * E.g. `MC1` was 131s $\rightarrow$ for all songs after MC1, subtract 131s + transition (e.g. -155s).
  * E.g. `MC3` was 177s $\rightarrow$ for all songs after MC3, subtract an additional 177s.

### Step 5: Update `src/data/concertsData.js`
Format the output into the Song-Centric schema:

```javascript
songs: {
  drip: {
    title: 'DRIP',
    availableVideos: [
      { videoId: 'WuelifqxMLs', offset: 679 },
      { videoId: 'xJuXrgbx-8I', offset: 679 },
      { videoId: '9Y-95rgsDDY', offset: 524 },
      { videoId: 'wSj_O5v5aMo', offset: 708 },
      { videoId: '_zV0QTAHd5I', offset: 746 }
    ]
  },
  // ...other songs
}
```

---

## 🔍 Validation Checklist
- [ ] First song (Song 1) verified with visually synchronous onsets.
- [ ] Delta computed relative to Anchor for each camera.
- [ ] No negative offset numbers (`Math.max(0, offset)`).
- [ ] Tested in ConcertWall: clicking any song chip under "QUICK SEEK" jumps all active cameras simultaneously.
