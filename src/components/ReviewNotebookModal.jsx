import React from 'react';
import { X, BookOpen, Repeat, Trash2, Volume2, Sparkles, Clock, CheckCircle, Music } from 'lucide-react';
import { sound } from '../utils/audio';

export default function ReviewNotebookModal({
  isOpen,
  onClose,
  missedSentences = [],
  onLoopSentence,
  onRemoveMissed,
  onClearAll
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glassmorphism review-modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <BookOpen size={24} className="accent-icon" />
            <div>
              <h3>Incorrect Answers Review Notebook</h3>
              <span className="modal-subtitle">
                {missedSentences.length} missed {missedSentences.length === 1 ? 'sentence' : 'sentences'} saved for deep learning review
              </span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="review-modal-body">
          {missedSentences.length === 0 ? (
            <div className="review-empty-state">
              <Sparkles size={48} className="empty-sparkle" />
              <h4>No Mistakes Recorded Yet!</h4>
              <p>When you answer incorrectly in Game Mode, missed sentences and their exact SRT timestamps will be saved here so you can loop and master them.</p>
            </div>
          ) : (
            <>
              <div className="review-actions-top">
                <span className="review-count-badge">
                  <Clock size={14} /> Total Items: {missedSentences.length}
                </span>
                {onClearAll && (
                  <button
                    className="review-clear-btn"
                    onClick={() => {
                      if (window.confirm('Are you sure you want to clear all saved review sentences?')) {
                        onClearAll();
                      }
                    }}
                    title="Clear all saved sentences"
                  >
                    <Trash2 size={14} /> Clear All
                  </button>
                )}
              </div>

              <div className="review-items-list">
                {missedSentences.map((item) => (
                  <div key={item.id} className="review-sentence-card glassmorphism">
                    <div className="review-card-top">
                      <span className="review-song-badge">
                        <Music size={12} /> {item.songTitle || 'K-Pop Song'}
                      </span>
                      {item.mode && (
                        <span className="review-mode-tag">
                          {item.mode === 'sing' ? '🎤 Sing' : item.mode === 'wordorder' ? '🧩 Word Order' : '🎯 Choice'}
                        </span>
                      )}
                      <span className="review-timestamp-chip">
                        <Clock size={12} /> {item.timestampStr || `${item.start}s - ${item.end}s`}
                      </span>
                    </div>

                    <div className="review-card-content">
                      <div className="review-korean-text">{item.ko}</div>
                      {item.en && <div className="review-english-text">"{item.en}"</div>}
                    </div>

                    <div className="review-card-actions">
                      <button
                        className="review-action-btn loop-btn"
                        onClick={() => {
                          onLoopSentence(item);
                          onClose();
                        }}
                        title="Open Practice Mode and loop this exact timestamp segment"
                      >
                        <Repeat size={15} />
                        <span>Loop Sentence in Practice</span>
                      </button>

                      <button
                        className="review-action-btn listen-btn"
                        onClick={() => sound.speakKorean(item.ko)}
                        title="Hear Korean text pronunciation"
                      >
                        <Volume2 size={15} />
                        <span>Listen</span>
                      </button>

                      {onRemoveMissed && (
                        <button
                          className="review-action-btn remove-btn"
                          onClick={() => onRemoveMissed(item.id)}
                          title="Mark as mastered and remove from review notebook"
                        >
                          <CheckCircle size={15} />
                          <span>Mastered</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="modal-actions">
          <button className="card-nav-btn reset-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
