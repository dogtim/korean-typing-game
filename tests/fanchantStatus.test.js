import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getFanchantStatusAtTime, DEFAULT_LEAD_TIME_SEC } from '../src/data/fanchants/index.js';

const cues = [
  { id: 'a', start: 10, end: 12, leadTimeSec: 1 },
  { id: 'b', start: 20, end: 22 },
  { id: 'c', start: 30, end: 31, leadTimeSec: 0 },
];

test('empty or invalid cues return an empty status', () => {
  for (const input of [[], null, undefined]) {
    const s = getFanchantStatusAtTime(input, 5);
    assert.equal(s.activeCue, null);
    assert.equal(s.upcomingCue, null);
    assert.equal(s.nextIdx, -1);
  }
});

test('before the lead window the next cue is known but has no countdown', () => {
  const s = getFanchantStatusAtTime(cues, 5);
  assert.equal(s.activeCue, null);
  assert.equal(s.upcomingCue.id, 'a');
  assert.equal(s.countdownSec, null);
  assert.equal(s.countdownPercent, 0);
});

test('inside a cue lead window starts the countdown', () => {
  const s = getFanchantStatusAtTime(cues, 9.5);
  assert.equal(s.upcomingCue.id, 'a');
  assert.equal(s.countdownSec, 0.5);
  assert.equal(s.countdownPercent, 0.5);
  assert.equal(s.nextIdx, 0);
});

test('cue without leadTimeSec uses the default', () => {
  const s = getFanchantStatusAtTime(cues, 20 - DEFAULT_LEAD_TIME_SEC / 2);
  assert.equal(s.upcomingCue.id, 'b');
  assert.equal(s.countdownPercent, 0.5);
});

test('start and end boundaries are inclusive for the active cue', () => {
  assert.equal(getFanchantStatusAtTime(cues, 10).activeCue.id, 'a');
  assert.equal(getFanchantStatusAtTime(cues, 12).activeCue.id, 'a');
  assert.equal(getFanchantStatusAtTime(cues, 12.01).activeCue, null);
});

test('leadTimeSec of 0 is respected (no countdown window)', () => {
  const s = getFanchantStatusAtTime(cues, 29.9);
  assert.equal(s.upcomingCue.id, 'c');
  assert.equal(s.countdownSec, null);
});

test('after the last cue nothing is upcoming', () => {
  const s = getFanchantStatusAtTime(cues, 100);
  assert.equal(s.activeCue, null);
  assert.equal(s.upcomingCue, null);
});
