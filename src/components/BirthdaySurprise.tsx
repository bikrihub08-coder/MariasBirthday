import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  StickerHeart, StickerSparkle, StickerFlower
} from './stickers/StickerPack'
import Celebration from './Celebration'

interface Props { onContinue: () => void }

type Step = 'intro' | 'gift' | 'giftOpen' | 'cake' | 'envelope' | 'envelopeOpen' | 'celebrate'

export default function BirthdaySurprise({ onContinue }: Props) {
  const [step, setStep] = useState<Step>('intro')
  const [showConfetti, setShowConfetti] = useState(false)

  const advance = (to: Step, delay = 0) => {
    setTimeout(() => setStep(to), delay)
  }

  const handleGiftClick = () => {
    if (step !== 'gift') return
    setStep('giftOpen')
    advance('cake', 2200)
  }

  const handleEnvelopeClick = () => {
    if (step !== 'envelope') return
    setStep('envelopeOpen')
    advance('celebrate', 2000)
    setTimeout(() => setShowConfetti(true), 1800)
  }

  return (
    <div className="relative min-h-dvh bg-surprise overflow-hidden flex flex-col items-center justify-center py-20 px-5">
      {/* Blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-5%] left-[-5%] w-[55vw] h-[55vw] rounded-full bg-blush-100/40 blur-3xl" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-rose-soft/30 blur-3xl" />
      </div>

      {showConfetti && <Celebration />}

      <div className="relative z-10 text-center max-w-lg mx-auto w-full">
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-blush-200/60 mb-8"
        >
          <span className="text-rose-brand font-sans text-sm font-medium tracking-wider uppercase">Chapter 04</span>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* INTRO */}
          {step === 'intro' && (
            <motion.div key="intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.6 }}>
              <h2 className="section-title mb-4">Birthday Surprise 🎁</h2>
              <p className="section-subtitle mb-10">Ready for your little surprise? ✨</p>
              <button className="btn-cta" onClick={() => advance('gift', 0)} aria-label="Open your birthday gift">
                Open Your Gift 🎁
              </button>
            </motion.div>
          )}

          {/* GIFT */}
          {(step === 'gift' || step === 'giftOpen') && (
            <motion.div key="gift" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}>
              <div className="mb-6">
                {step === 'gift' ? (
                  <>
                    <p className="font-serif text-xl text-rose-brand/80 italic mb-8">Tap to open, Maria... 🎁</p>
                    <motion.div
                      className="gift-interactive inline-block"
                      onClick={handleGiftClick}
                      whileHover={{ scale: 1.06, rotate: -2 }}
                      whileTap={{ scale: 0.94 }}
                      aria-label="Tap to open gift"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && handleGiftClick()}
                    >
                      <GiftBoxSVG />
                    </motion.div>
                    <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="mt-6 font-sans text-sm text-rose-brand/50">
                      tap the gift ✨
                    </motion.p>
                  </>
                ) : (
                  <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}>
                    <GiftOpenSVG />
                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.7 }}
                      className="font-serif text-3xl font-semibold text-rose-brand mt-6"
                    >
                      For My Janpakhii ❤️
                    </motion.p>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }} className="flex justify-center gap-3 mt-4">
                      {[0, 1, 2].map(i => (
                        <motion.div key={i} animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }} className="sticker">
                          <StickerHeart size={32} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* CAKE */}
          {step === 'cake' && (
            <motion.div key="cake" initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-2xl text-rose-brand/80 italic mb-6"
              >
                Make a Wish, Maria! ✨
              </motion.p>
              <BirthdayCakeSVG />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="font-sans text-sm text-rose-brand/50 mt-4 mb-8"
              >
                Blow out the candles... 🕯️
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
                <button className="btn-cta" onClick={() => advance('envelope')} aria-label="Continue to envelope">
                  Continue 💌
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* ENVELOPE */}
          {(step === 'envelope' || step === 'envelopeOpen') && (
            <motion.div key="envelope" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}>
              {step === 'envelope' ? (
                <>
                  <p className="font-serif text-xl text-rose-brand/80 italic mb-6">One more thing for you... 💌</p>
                  <motion.div
                    className="gift-interactive inline-block"
                    onClick={handleEnvelopeClick}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    aria-label="Tap to open envelope"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleEnvelopeClick()}
                  >
                    <EnvelopeSVG />
                  </motion.div>
                  <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="mt-4 font-sans text-sm text-rose-brand/50">
                    tap to open 💌
                  </motion.p>
                </>
              ) : (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                  <EnvelopeOpenSVG />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blush-200/50 text-left"
                  >
                    <p className="font-serif text-xl sm:text-2xl text-[#3D1A24] italic leading-relaxed">
                      "Maria, জন্মদিনের এই বিশেষ দিনে তোমাকে জানাতে চাই — তুমি অনেক কিছু মানে রাখো। আজকের এই দিনটা শুধু তোমার। সব সুখ, সব আনন্দ — শুধু তোমার জন্য। 🌸"
                    </p>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex justify-center gap-4 mt-6">
                    {[StickerHeart, StickerSparkle, StickerFlower].map((S, i) => (
                      <motion.div key={i} className="sticker" animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.5 }}>
                        <S size={36} />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* CELEBRATE */}
          {step === 'celebrate' && (
            <motion.div key="celebrate" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-6"
              >
                🎉
              </motion.div>
              <h2 className="section-title mb-4 text-rose-brand">Happy Birthday! 🎂</h2>
              <p className="font-serif text-xl italic text-rose-brand/70 mb-4">
                আশা করি তোমার এই দিনটা অনেক সুন্দর হোক, Maria।
              </p>
              <div className="flex justify-center gap-4 mb-10">
                {[StickerHeart, StickerSparkle, StickerFlower, StickerHeart].map((S, i) => (
                  <motion.div key={i} className="sticker" animate={{ y: [0, -12, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.4 }}>
                    <S size={34} />
                  </motion.div>
                ))}
              </div>
              <button className="btn-cta" onClick={onContinue} aria-label="One last thing">
                One Last Thing ❤️
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ─── SVG Components ─── */
function GiftBoxSVG() {
  return (
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Gift box">
      {/* Shadow */}
      <ellipse cx="80" cy="148" rx="44" ry="8" fill="#F9A8D4" opacity="0.3" />
      {/* Box body */}
      <rect x="28" y="78" width="104" height="68" rx="8" fill="#F9A8D4" />
      <rect x="28" y="78" width="104" height="68" rx="8" stroke="#E879A0" strokeWidth="2" />
      {/* Lid */}
      <rect x="20" y="62" width="120" height="22" rx="8" fill="#F472B6" />
      <rect x="20" y="62" width="120" height="22" rx="8" stroke="#E879A0" strokeWidth="2" />
      {/* Ribbon vertical */}
      <rect x="72" y="62" width="16" height="84" rx="6" fill="#E03668" />
      {/* Ribbon horizontal */}
      <rect x="20" y="68" width="120" height="10" rx="4" fill="#E03668" />
      {/* Bow left loop */}
      <ellipse cx="66" cy="56" rx="18" ry="10" fill="#F45B83" transform="rotate(-20 66 56)" />
      {/* Bow right loop */}
      <ellipse cx="94" cy="56" rx="18" ry="10" fill="#F45B83" transform="rotate(20 94 56)" />
      {/* Bow center */}
      <circle cx="80" cy="58" r="8" fill="#E03668" />
      <circle cx="80" cy="58" r="4" fill="#F45B83" />
      {/* Stars on box */}
      <path d="M48 100 L50 95 L52 100 L57 102 L52 104 L50 109 L48 104 L43 102 Z" fill="white" opacity="0.5" />
      <path d="M100 112 L102 108 L104 112 L108 114 L104 116 L102 120 L100 116 L96 114 Z" fill="white" opacity="0.4" />
    </svg>
  )
}

function GiftOpenSVG() {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Opened gift box">
      {/* Shadow */}
      <ellipse cx="90" cy="168" rx="50" ry="9" fill="#F9A8D4" opacity="0.25" />
      {/* Box */}
      <rect x="32" y="95" width="116" height="68" rx="8" fill="#F9A8D4" />
      {/* Ribbon on box */}
      <rect x="82" y="95" width="16" height="68" rx="6" fill="#E03668" opacity="0.6" />
      <rect x="32" y="114" width="116" height="10" rx="4" fill="#E03668" opacity="0.5" />
      {/* Lid flying off */}
      <g transform="rotate(-15 90 60)">
        <rect x="22" y="68" width="120" height="22" rx="8" fill="#F472B6" />
        {/* Bow */}
        <ellipse cx="68" cy="62" rx="16" ry="9" fill="#F45B83" transform="rotate(-20 68 62)" />
        <ellipse cx="92" cy="62" rx="16" ry="9" fill="#F45B83" transform="rotate(20 92 62)" />
        <circle cx="80" cy="64" r="7" fill="#E03668" />
      </g>
      {/* Hearts popping out */}
      <text x="60" y="86" fontSize="22" textAnchor="middle">❤️</text>
      <text x="105" y="78" fontSize="16" textAnchor="middle">💗</text>
      <text x="80" y="70" fontSize="12" textAnchor="middle">✨</text>
    </svg>
  )
}

function BirthdayCakeSVG() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Birthday cake">
      {/* Shadow */}
      <ellipse cx="100" cy="186" rx="58" ry="10" fill="#F9A8D4" opacity="0.25" />
      {/* Bottom tier */}
      <rect x="22" y="128" width="156" height="52" rx="12" fill="#FBCFE8" />
      <rect x="22" y="128" width="156" height="52" rx="12" stroke="#F9A8D4" strokeWidth="2" />
      {/* Middle tier */}
      <rect x="42" y="90" width="116" height="44" rx="10" fill="#F9A8D4" />
      <rect x="42" y="90" width="116" height="44" rx="10" stroke="#F472B6" strokeWidth="1.5" />
      {/* Top tier */}
      <rect x="62" y="60" width="76" height="36" rx="8" fill="#F472B6" />
      <rect x="62" y="60" width="76" height="36" rx="8" stroke="#E879A0" strokeWidth="1.5" />
      {/* Frosting waves bottom */}
      <path d="M22 128 Q34 120 46 128 Q58 120 70 128 Q82 120 94 128 Q106 120 118 128 Q130 120 142 128 Q154 120 166 128 Q178 120 178 128" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Frosting waves middle */}
      <path d="M42 90 Q52 83 62 90 Q72 83 82 90 Q92 83 102 90 Q112 83 122 90 Q132 83 142 90 Q152 83 158 90" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Sprinkles */}
      <rect x="60" y="138" width="12" height="4" rx="2" fill="#E03668" transform="rotate(30 60 138)" />
      <rect x="90" y="150" width="10" height="4" rx="2" fill="#F472B6" transform="rotate(-20 90 150)" />
      <rect x="125" y="140" width="12" height="4" rx="2" fill="#E879A0" transform="rotate(50 125 140)" />
      <rect x="70" y="100" width="8" height="3" rx="1.5" fill="white" opacity="0.7" transform="rotate(15 70 100)" />
      <rect x="110" y="108" width="8" height="3" rx="1.5" fill="white" opacity="0.7" transform="rotate(-25 110 108)" />
      {/* Candles */}
      <rect x="80" y="42" width="10" height="22" rx="4" fill="#F45B83" />
      <rect x="100" y="38" width="10" height="26" rx="4" fill="#E03668" />
      <rect x="120" y="44" width="10" height="20" rx="4" fill="#F472B6" />
      {/* Flames — animated via CSS class */}
      <g className="animate-[candle_1.5s_ease-in-out_infinite]">
        <ellipse cx="85" cy="40" rx="5" ry="8" fill="#FBBF24" />
        <ellipse cx="85" cy="41" rx="3" ry="5" fill="#FDE68A" />
      </g>
      <g className="animate-[candle_1.8s_ease-in-out_infinite_0.2s]">
        <ellipse cx="105" cy="36" rx="5" ry="8" fill="#F97316" />
        <ellipse cx="105" cy="37" rx="3" ry="5" fill="#FBBF24" />
      </g>
      <g className="animate-[candle_1.3s_ease-in-out_infinite_0.4s]">
        <ellipse cx="125" cy="42" rx="5" ry="7" fill="#FBBF24" />
        <ellipse cx="125" cy="43" rx="3" ry="4" fill="#FDE68A" />
      </g>
      {/* Stars */}
      <text x="38" y="115" fontSize="16">⭐</text>
      <text x="148" y="115" fontSize="16">⭐</text>
      <text x="160" y="88" fontSize="14">✨</text>
      <text x="24" y="88" fontSize="14">✨</text>
    </svg>
  )
}

function EnvelopeSVG() {
  return (
    <svg width="160" height="130" viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Envelope">
      <rect x="10" y="28" width="140" height="90" rx="10" fill="#F9A8D4" />
      <rect x="10" y="28" width="140" height="90" rx="10" stroke="#E879A0" strokeWidth="2" />
      <path d="M10 38 L80 78 L150 38" stroke="#E879A0" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M10 118 L52 80" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M150 118 L108 80" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 38 L10 28 Q10 28 18 28 L80 62 L142 28 Q150 28 150 28 L150 38 L80 78 Z" fill="#FBCFE8" />
      {/* Heart seal */}
      <path d="M80 25 C78 21, 72 21, 72 26 C72 31, 80 36, 80 36 C80 36, 88 31, 88 26 C88 21, 82 21, 80 25 Z" fill="#E03668" />
    </svg>
  )
}

function EnvelopeOpenSVG() {
  return (
    <svg width="180" height="150" viewBox="0 0 180 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Opened envelope">
      <rect x="15" y="52" width="150" height="90" rx="10" fill="#F9A8D4" />
      <path d="M15 62 L90 106 L165 62" stroke="#E879A0" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Lid open */}
      <g transform="rotate(-35 90 52)">
        <path d="M15 52 L165 52 L90 10 Z" fill="#FBCFE8" stroke="#F472B6" strokeWidth="1.5" />
      </g>
      {/* Letter poking out */}
      <rect x="52" y="20" width="76" height="60" rx="6" fill="white" stroke="#F9A8D4" strokeWidth="1.5" />
      <line x1="64" y1="36" x2="116" y2="36" stroke="#F9A8D4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="64" y1="46" x2="108" y2="46" stroke="#F9A8D4" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="64" y1="56" x2="112" y2="56" stroke="#F9A8D4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M90 64 C88 60, 82 60, 82 65 C82 70, 90 75, 90 75 C90 75, 98 70, 98 65 C98 60, 92 60, 90 64 Z" fill="#E03668" opacity="0.7" />
    </svg>
  )
}
