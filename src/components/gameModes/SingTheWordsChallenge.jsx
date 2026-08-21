import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { maskHangulTokens, calculateHangulAccuracy } from '../../utils/gameModes';
import { Mic, Sparkles, CheckCircle2, RotateCcw, FastForward, Volume2 } from 'lucide-react';
import { sound } from '../../utils/audio';

export default function SingTheWordsChallenge({ line, onAnswer }) {
  const { tokens, hangulTarget } = useMemo(() => maskHangulTokens(line.ko), [line.ko]);
  const [transcript, setTranscript] = useState('');
  const [accuracy, setAccuracy] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [micError, setMicError] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const recognitionRef = useRef(null);
  const settledRef = useRef(false);

  const settleAnswer = useCallback((isCorrect) => {
    if (settledRef.current) return;
    settledRef.current = true;
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (_e) {}
      recognitionRef.current = null;
    }
    setRevealed(true);
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 850);
  }, [onAnswer]);

  const startListening = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setMicError('Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    try {
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (_e) {}
      }

      const recognition = new SpeechRecognition();
      recognition.lang = 'ko-KR';
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsListening(true);
        setMicError(null);
      };

      recognition.onresult = (event) => {
        let currentTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(currentTranscript);

        const currentAcc = calculateHangulAccuracy(hangulTarget, currentTranscript);
        setAccuracy(currentAcc);

        // 70% ~ 80% is the passing threshold
        if (currentAcc >= 70) {
          settleAnswer(true);
        }
      };

      recognition.onerror = (event) => {
        console.warn('Speech recognition notice:', event.error);
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          setMicError('Microphone access was denied. Please allow microphone permissions.');
        } else if (event.error !== 'no-speech') {
          setMicError(`Notice: ${event.error}`);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
      recognitionRef.current = recognition;
    } catch (e) {
      console.error('Failed to initialize speech recognition:', e);
      setMicError('Could not start microphone. Check browser permissions.');
    }
  }, [hangulTarget, settleAnswer]);

  // Start voice recognition on mount
  useEffect(() => {
    startListening();
    return () => {
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (_e) {}
        recognitionRef.current = null;
      }
    };
  }, [startListening]);

  return (
    <div className="sing-words-challenge">
      <div className="sing-challenge-header">
        <p className="challenge-prompt">
          <Sparkles size={16} className="sparkle-pulse" /> Sing or pronounce the missing Korean words:
        </p>
        <span className="passing-target-badge">Goal: ≥ 70% Match</span>
      </div>

      {/* Masked Sentence Display */}
      <div className="masked-sentence-container">
        {tokens.map((tok) => {
          if (tok.isKorean) {
            return (
              <span
                key={tok.id}
                className={`korean-mask-chip ${revealed || accuracy >= 70 ? 'revealed-correct' : 'masked'}`}
              >
                {revealed || accuracy >= 70 ? (
                  <>
                    <CheckCircle2 size={14} className="chip-check-icon" />
                    <span>{tok.text}</span>
                  </>
                ) : (
                  <span className="blank-placeholder">
                    <Mic size={14} className="blank-mic-icon" />
                    <span className="blank-dashes">_____</span>
                  </span>
                )}
              </span>
            );
          }
          return (
            <span key={tok.id} className="non-korean-word">
              {tok.text}
            </span>
          );
        })}
      </div>

      {/* Live Voice Recording & Transcript Box */}
      <div className={`sing-recording-box ${accuracy >= 70 ? 'passed' : ''}`}>
        <div className="sing-status-row">
          <div className="mic-indicator-group">
            <span className={`mic-dot ${isListening ? 'live' : 'idle'}`}></span>
            <span className="mic-status-text">
              {accuracy >= 70
                ? '🎉 Great Pronunciation!'
                : isListening
                ? 'Listening to your voice...'
                : 'Microphone ready'}
            </span>
          </div>

          <div className="accuracy-live-pill">
            <span className="acc-label">Accuracy:</span>
            <span className={`acc-val ${accuracy >= 70 ? 'high' : accuracy >= 40 ? 'med' : 'low'}`}>
              {accuracy}%
            </span>
          </div>
        </div>

        {/* Live Transcript Display */}
        <div className={`sing-transcript-display ${!transcript ? 'placeholder' : ''}`}>
          {transcript ? (
            <span>"{transcript}"</span>
          ) : (
            <span>Sing / speak the Korean words into your microphone now...</span>
          )}
        </div>

        {/* Target vs Detected Hint */}
        <div className="sing-target-hint">
          <span className="hint-label">Target Korean:</span>
          <span className="hint-target">{revealed || accuracy >= 70 ? hangulTarget : '(Sing the missing words above)'}</span>
          <button
            type="button"
            className="listen-target-btn"
            onClick={() => sound.speakKorean(hangulTarget)}
            title="Hear Korean pronunciation"
          >
            <Volume2 size={13} /> Listen
          </button>
        </div>

        {micError && <div className="sing-mic-error">⚠️ {micError}</div>}
      </div>

      {/* Challenge Actions */}
      <div className="sing-actions-row">
        <button
          type="button"
          className="sing-sub-btn restart-mic-btn"
          onClick={() => {
            setTranscript('');
            setAccuracy(0);
            startListening();
          }}
        >
          <RotateCcw size={14} /> Restart Mic
        </button>

        <button
          type="button"
          className="sing-sub-btn skip-btn"
          onClick={() => settleAnswer(false)}
        >
          <FastForward size={14} /> Skip Line
        </button>
      </div>
    </div>
  );
}
