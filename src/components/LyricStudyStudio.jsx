import React, { useState, useMemo, useCallback } from 'react';
import {
  Sparkles,
  Volume2,
  BookOpen,
  Music,
  Languages,
  CheckCircle2,
  Layers,
  HelpCircle,
  Eye,
  EyeOff,
  ChevronRight,
  MessageSquare,
  Flame,
  Award,
  Play,
  ArrowLeft,
  Tv
} from 'lucide-react';
import { WE_GO_UP_STUDY_DATA } from '../data/lyricsStudyData/weGoUpStudy';
import './LyricStudyStudio.css';

export default function LyricStudyStudio({
  songData = WE_GO_UP_STUDY_DATA,
  onPlaySentenceInGame,
  onBackToPractice,
  isEmbeddedInPractice = false,
  activeVideoTime = null
}) {
  const [langFilter, setLangFilter] = useState('all'); // 'all' | 'ko' | 'en'
  const [selectedSentenceId, setSelectedSentenceId] = useState(songData.sentences[0].id);
  const [selectedPillId, setSelectedPillId] = useState(null);
  const [activeDrawerTab, setActiveDrawerTab] = useState('grammar'); // 'grammar' | 'pronunciation' | 'politeness'
  const [showRomanization, setShowRomanization] = useState(true);

  // Filter sentences by language ('all', 'ko', 'en')
  const filteredSentences = useMemo(() => {
    if (langFilter === 'all') return songData.sentences;
    return songData.sentences.filter(s => s.language === langFilter);
  }, [songData, langFilter]);

  // Active sentence lookup
  const currentSentence = useMemo(() => {
    const found = filteredSentences.find(s => s.id === selectedSentenceId);
    if (found) return found;
    return filteredSentences[0] || songData.sentences[0];
  }, [selectedSentenceId, filteredSentences, songData]);

  const isEnglishSentence = currentSentence?.language === 'en';

  // Counts for filter badges
  const koCount = useMemo(() => songData.sentences.filter(s => s.language === 'ko').length, [songData]);
  const enCount = useMemo(() => songData.sentences.filter(s => s.language === 'en').length, [songData]);

  // Active pill lookup
  const currentPill = useMemo(() => {
    if (!selectedPillId || !currentSentence) return null;
    return currentSentence.pillChips.find(p => p.id === selectedPillId) || null;
  }, [selectedPillId, currentSentence]);

  // Audio Pronunciation TTS via Web Speech API (supports both ko-KR and en-US)
  const playAudio = useCallback((text, langCode = 'ko-KR') => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[-]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = langCode;
    utterance.rate = 0.85; // slightly slower for optimal learner comprehension
    window.speechSynthesis.speak(utterance);
  }, []);

  const handleSelectSentence = (id) => {
    setSelectedSentenceId(id);
    setSelectedPillId(null); // reset pill selection when sentence changes
  };

  const handlePillClick = (pill) => {
    if (selectedPillId === pill.id) {
      setSelectedPillId(null);
    } else {
      setSelectedPillId(pill.id);
      playAudio(pill.text, isEnglishSentence ? 'en-US' : 'ko-KR');
    }
  };

  const handleSeekAndPlay = (timeSec) => {
    if (onPlaySentenceInGame && typeof timeSec === 'number') {
      onPlaySentenceInGame(timeSec);
    }
  };

  return (
    <div className={`lyric-study-container ${isEmbeddedInPractice ? 'embedded-in-practice' : ''}`}>
      {/* Top Banner Header */}
      <div className="study-header">
        <div className="study-header-left">
          {onBackToPractice && (
            <button
              type="button"
              className="study-back-btn"
              onClick={onBackToPractice}
              title="返回 MV 練唱與字幕對齊"
            >
              <ArrowLeft size={16} />
              <span>返回 MV 練唱</span>
            </button>
          )}

          <div className="study-icon-badge">
            <BookOpen size={26} />
          </div>

          <div className="study-title-group">
            <h2>
              K-Lyric Studio 歌詞深度研習
              <span className="study-song-tag">{songData.artist} – {songData.title}</span>
            </h2>
            <p className="study-subtitle">
              雙語深度拆解！點擊單字膠囊解析詞幹、成語與俚語，解鎖發音連音與日常實戰對話！
            </p>
          </div>
        </div>

        <div className="study-header-actions">
          {/* Language Focus Filter */}
          <div className="study-lang-filter-group" role="group" aria-label="研習語言切換">
            <button
              type="button"
              className={`filter-btn ${langFilter === 'all' ? 'active' : ''}`}
              onClick={() => {
                setLangFilter('all');
                setSelectedPillId(null);
              }}
            >
              🌟 全部雙語 ({songData.sentences.length})
            </button>
            <button
              type="button"
              className={`filter-btn ko-tab ${langFilter === 'ko' ? 'active' : ''}`}
              onClick={() => {
                setLangFilter('ko');
                setSelectedPillId(null);
                const firstKo = songData.sentences.find(s => s.language === 'ko');
                if (firstKo) setSelectedSentenceId(firstKo.id);
              }}
            >
              🇰🇷 韓語精讀 ({koCount})
            </button>
            <button
              type="button"
              className={`filter-btn en-tab ${langFilter === 'en' ? 'active' : ''}`}
              onClick={() => {
                setLangFilter('en');
                setSelectedPillId(null);
                const firstEn = songData.sentences.find(s => s.language === 'en');
                if (firstEn) setSelectedSentenceId(firstEn.id);
              }}
            >
              🇺🇸 英語精讀 ({enCount})
            </button>
          </div>

          <button
            type="button"
            className={`study-action-btn ${showRomanization ? 'active' : ''}`}
            onClick={() => setShowRomanization(!showRomanization)}
            title="開啟或隱藏拼音/音標標籤"
          >
            {showRomanization ? <Eye size={16} /> : <EyeOff size={16} />}
            <span>{isEnglishSentence ? '音標/拼音' : '羅馬拼音'} {showRomanization ? '開啟' : '隱藏'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Left Sentence List, Right Deep Dive Studio */}
      <div className="study-main-grid">
        {/* Left Sidebar: Sentence Navigation */}
        <aside className="study-sidebar">
          <div className="study-sidebar-title">
            <span>精選句目導覽</span>
            <span className="study-count-badge">{filteredSentences.length} 句精讀</span>
          </div>

          <div className="sentence-list">
            {filteredSentences.map((sentence, index) => {
              const isActive = sentence.id === currentSentence.id;
              const isEn = sentence.language === 'en';
              return (
                <button
                  key={sentence.id}
                  type="button"
                  className={`sentence-nav-item ${isActive ? 'active' : ''} ${isEn ? 'nav-item-en' : 'nav-item-ko'}`}
                  onClick={() => handleSelectSentence(sentence.id)}
                >
                  <div className="sentence-nav-top">
                    <span className="sentence-nav-index">
                      <span className={`lang-chip ${isEn ? 'chip-en' : 'chip-ko'}`}>
                        {isEn ? '🇺🇸 EN' : '🇰🇷 KO'}
                      </span>
                      Line {index + 1}
                    </span>
                    <span className="sentence-nav-time">{sentence.time}</span>
                  </div>
                  <div className="sentence-nav-ko">{sentence.text || sentence.korean}</div>
                  <div className="sentence-nav-trans">{sentence.naturalTranslation}</div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Stage: Interactive Showcase & 3-Tab Drawer */}
        <main className="study-content-panel">
          {/* ================================================================
              FEATURE 1: INTERACTIVE PILL CHIPS HERO CARD
             ================================================================ */}
          <section className="hero-sentence-card">
            <div className="hero-card-meta">
              <div className="hero-meta-badges">
                <span className={`lang-badge-tag ${isEnglishSentence ? 'badge-en' : 'badge-ko'}`}>
                  {isEnglishSentence ? '🇺🇸 英語歌詞研習' : '🇰🇷 韓語歌詞研習'}
                </span>
                <span className="hero-index-pill">
                  {filteredSentences.findIndex(s => s.id === currentSentence.id) + 1} / {filteredSentences.length}
                </span>
                <span className="hero-time-badge">
                  <Music size={13} /> {currentSentence.time}
                </span>
              </div>

              <div className="hero-action-btns">
                {onPlaySentenceInGame && typeof currentSentence.timeSec === 'number' && (
                  <button
                    type="button"
                    className="hero-play-video-btn"
                    onClick={() => handleSeekAndPlay(currentSentence.timeSec)}
                    title="在 YouTube 影片中跳轉至此時間點播放原音"
                  >
                    <Play size={14} fill="currentColor" />
                    <span>原曲片段 ({currentSentence.time})</span>
                  </button>
                )}

                <button
                  type="button"
                  className="hero-audio-btn"
                  onClick={() => playAudio(currentSentence.text || currentSentence.korean, isEnglishSentence ? 'en-US' : 'ko-KR')}
                  title={`播放全句${isEnglishSentence ? '英語' : '韓語'}朗讀發音`}
                >
                  <Volume2 size={16} />
                  <span>語音朗讀 (0.85x)</span>
                </button>
              </div>
            </div>

            {/* Interactive Pill Chips Row */}
            <div className="pill-container" role="group" aria-label="歌詞單字膠囊分塊">
              {currentSentence.pillChips.map((pill) => {
                const isSelected = selectedPillId === pill.id;
                return (
                  <button
                    key={pill.id}
                    type="button"
                    className={`lyric-pill-chip ${isSelected ? 'selected' : ''} ${isEnglishSentence ? 'pill-en' : 'pill-ko'}`}
                    onClick={() => handlePillClick(pill)}
                    title={`點擊查看 [${pill.text}] 詳細詞義與解構`}
                  >
                    <span className="pill-text">{pill.text}</span>
                    {showRomanization && pill.rom && (
                      <span className="pill-rom">{pill.rom}</span>
                    )}
                    <span className="pill-type-dot" />
                  </button>
                );
              })}
            </div>

            {/* Sentence-level Romanization & Translation */}
            <div className="hero-translations">
              {showRomanization && currentSentence.romanization && (
                <div className="sentence-rom-row">
                  <span className="sentence-rom-tag">
                    {isEnglishSentence ? 'Flow / IPA' : 'Romanization'}
                  </span>
                  <span>{currentSentence.romanization}</span>
                </div>
              )}
              <div className="sentence-trans-row">
                💡 {currentSentence.naturalTranslation}
              </div>
            </div>

            {/* Selected Pill Micro-Inspector Popover Banner */}
            {currentPill && (
              <div className={`pill-inspector-card ${isEnglishSentence ? 'inspector-en' : 'inspector-ko'}`}>
                <div className="inspector-top">
                  <div className="inspector-word-group">
                    <span className="inspector-word">{currentPill.text}</span>
                    {showRomanization && currentPill.rom && (
                      <span className="inspector-rom">{currentPill.rom}</span>
                    )}
                    <span className="inspector-badge">{currentPill.typeLabel}</span>
                  </div>
                  <div className="inspector-lemma-group">
                    原形 / 詞根：<strong>{currentPill.lemma}</strong>
                  </div>
                </div>

                <div className="inspector-meaning">
                  🎯 核心釋義：{currentPill.meaning}
                </div>

                <div className="inspector-desc">
                  {currentPill.explanation}
                </div>
              </div>
            )}
          </section>

          {/* ================================================================
              FEATURE 2: THE 3-TAB LEARNING DRAWER
             ================================================================ */}
          <section className="learning-drawer-card">
            {/* Drawer Tabs Header */}
            <div className="drawer-tabs-nav">
              <button
                type="button"
                className={`drawer-tab-btn ${activeDrawerTab === 'grammar' ? 'active' : ''}`}
                onClick={() => setActiveDrawerTab('grammar')}
              >
                <Layers size={18} />
                <span>結構與文法拆解</span>
              </button>

              <button
                type="button"
                className={`drawer-tab-btn ${activeDrawerTab === 'pronunciation' ? 'active' : ''}`}
                onClick={() => setActiveDrawerTab('pronunciation')}
              >
                <Sparkles size={18} />
                <span>{isEnglishSentence ? '發音、連音與嘻哈 Flow' : '發音與音變密技'}</span>
              </button>

              <button
                type="button"
                className={`drawer-tab-btn ${activeDrawerTab === 'politeness' ? 'active' : ''}`}
                onClick={() => setActiveDrawerTab('politeness')}
              >
                <Languages size={18} />
                <span>{isEnglishSentence ? '語域風格與日常實戰' : '敬語對比與日常實戰'}</span>
              </button>
            </div>

            {/* Tab 1: Grammar & Anatomy */}
            {activeDrawerTab === 'grammar' && (
              <div className="drawer-tab-content grammar-tab-view">
                <div className="grammar-summary-box">
                  <HelpCircle size={20} color="#c4b5fd" />
                  <div>
                    <strong>句子語法結構：</strong>
                    <span>{currentSentence.drawer.grammar.structureSummary}</span>
                  </div>
                </div>

                <div className="tokens-table-container">
                  <table className="tokens-table">
                    <thead>
                      <tr>
                        <th>詞素 / 單字</th>
                        <th>句法角色</th>
                        <th>語義與接續說明</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentSentence.drawer.grammar.tokens.map((tok, idx) => (
                        <tr key={idx}>
                          <td className="token-term">{tok.term}</td>
                          <td>
                            <span className="token-role-badge">{tok.role}</span>
                          </td>
                          <td>{tok.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 2: Pronunciation & Sound Shifts / Flow */}
            {activeDrawerTab === 'pronunciation' && (
              <div className="drawer-tab-content pronunciation-tab-view">
                <div className="actual-sound-banner">
                  <div className="sound-banner-left">
                    <Sparkles size={22} color="#38bdf8" />
                    <div>
                      <div className="sound-banner-label">
                        {isEnglishSentence ? '道地連音 / 演唱聽感發音' : '實際口語 / 演唱聽感發音'}
                      </div>
                      <div className="sound-banner-value">{currentSentence.drawer.pronunciation.actualSound}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="hero-audio-btn"
                    onClick={() => playAudio(
                      currentSentence.drawer.pronunciation.actualSound.replace(/[\[\]]/g, ''),
                      isEnglishSentence ? 'en-US' : 'ko-KR'
                    )}
                  >
                    <Volume2 size={16} />
                    <span>聽實際讀音</span>
                  </button>
                </div>

                <div className="singing-tips-box">
                  <Flame size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>{isEnglishSentence ? 'K-Pop 饒舌節奏與咬字建議：' : 'K-Pop 演唱咬字建議：'}</strong>
                    <div>{currentSentence.drawer.pronunciation.singingTips}</div>
                  </div>
                </div>

                <div className="sound-rules-grid">
                  {currentSentence.drawer.pronunciation.rules.map((rule, idx) => (
                    <div key={idx} className="sound-rule-card">
                      <div className="sound-rule-header">
                        <span className="sound-rule-title">{rule.title}</span>
                        <span className="sound-rule-badge">{rule.badge}</span>
                      </div>
                      <div className="sound-rule-detail">{rule.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Politeness / Formality & Real-life Dialogue */}
            {activeDrawerTab === 'politeness' && (
              <div className="drawer-tab-content politeness-tab-view">
                <div className="levels-stack">
                  {currentSentence.drawer.politeness.levels.map((lvl, idx) => (
                    <div key={idx} className="polite-level-card">
                      <div className="polite-level-header">
                        <span className="polite-level-name">{lvl.name}</span>
                        <span className="polite-badge">{lvl.badge}</span>
                      </div>
                      <div className="polite-form-text">{lvl.form}</div>
                      <div className="polite-scene-note">
                        <MessageSquare size={14} /> 適用情境：{lvl.scene}
                      </div>
                    </div>
                  ))}
                </div>

                {currentSentence.drawer.politeness.realLifeExample && (
                  <div className="dialogue-box">
                    <div className="dialogue-title">
                      <Award size={18} />
                      <span>日常生活對話情境實戰（{currentSentence.drawer.politeness.realLifeExample.scenario}）</span>
                    </div>

                    <div className="dialogue-turns">
                      {currentSentence.drawer.politeness.realLifeExample.dialogue.map((turn, idx) => (
                        <div key={idx} className="dialogue-bubble">
                          <span className="speaker-tag">{turn.speaker}</span>
                          <div className="dialogue-texts">
                            <span className="dialogue-ko">{turn.text}</span>
                            <span className="dialogue-trans">{turn.trans}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
