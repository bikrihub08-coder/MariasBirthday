import React from 'react'
import { motion } from 'framer-motion'
import DateTimeCard from './DateTimeCard'
import {
  StickerBalloon, StickerSparkle, StickerHeart, StickerFlower,
  StickerCake, StickerHappyReaction
} from './stickers/StickerPack'

interface Props { onContinue: () => void }

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.15 } } },
  child: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
  },
}

export default function BirthdayWelcome({ onContinue }: Props) {
  return (
    <div className="relative min-h-dvh flex flex-col items-center justify-center bg-welcome overflow-hidden px-5 py-20">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] rounded-full bg-rose-soft/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[45vw] h-[45vw] rounded-full bg-blush-100/50 blur-3xl" />
      </div>

      {/* Stickers */}
      <motion.div
        className="sticker absolute top-[6%] left-[4%] sm:left-[8%]"
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
          <StickerBalloon size={68} />
        </motion.div>
      </motion.div>

      <motion.div
        className="sticker absolute top-[8%] right-[4%] sm:right-[8%]"
        initial={{ opacity: 0, scale: 0, rotate: 20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <motion.div animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
          <StickerSparkle size={54} />
        </motion.div>
      </motion.div>

      <motion.div
        className="sticker absolute top-[40%] left-[2%] sm:left-[5%]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div animate={{ y: [0, -12, 0], scale: [1, 1.08, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
          <StickerHeart size={60} />
        </motion.div>
      </motion.div>

      <motion.div
        className="sticker absolute top-[40%] right-[2%] sm:right-[5%]"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <motion.div animate={{ y: [0, -9, 0], rotate: [-4, 4, -4] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
          <StickerHappyReaction size={64} />
        </motion.div>
      </motion.div>

      <motion.div
        className="sticker absolute bottom-[10%] left-[6%] sm:left-[10%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <motion.div animate={{ y: [0, -6, 0], rotate: [0, -4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <StickerFlower size={50} />
        </motion.div>
      </motion.div>

      <motion.div
        className="sticker absolute bottom-[10%] right-[6%] sm:right-[10%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}>
          <StickerCake size={56} />
        </motion.div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center max-w-xl mx-auto"
        variants={stagger.container}
        initial="initial"
        animate="animate"
      >
        {/* Birthday illustration */}
        <motion.div
          variants={stagger.child}
          className="mb-8 flex justify-center"
        >
          <BirthdayIllustration />
        </motion.div>

        <motion.div variants={stagger.child}>
          <h1 className="section-title mb-4">
            Happy Birthday, Maria! 🎂❤️
          </h1>
        </motion.div>

        <motion.div variants={stagger.child}>
          <p className="font-serif text-xl sm:text-2xl text-rose-brand/80 italic mb-2">
            আমার জানপাখির জন্য আজকের দিনটা
          </p>
          <p className="font-serif text-xl sm:text-2xl text-rose-brand/70 italic mb-8">
            একটু বেশি special. 🌸
          </p>
        </motion.div>

        <motion.div variants={stagger.child} className="mb-10 flex justify-center">
          <DateTimeCard />
        </motion.div>

        <motion.div variants={stagger.child}>
          <button className="btn-cta" onClick={onContinue} aria-label="Read the birthday letter">
            Read My Letter 💌
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

function BirthdayIllustration() {
  return (
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Birthday illustration">
      {/* Body */}
      <ellipse cx="80" cy="120" rx="38" ry="22" fill="#FFD6E0" opacity="0.5" />
      {/* Dress */}
      <path d="M55 105 Q60 130 80 135 Q100 130 105 105 L100 90 Q90 98 80 98 Q70 98 60 90 Z" fill="#F9A8D4" />
      <path d="M62 88 Q71 96 80 96 Q89 96 98 88 L95 75 Q88 82 80 82 Q72 82 65 75 Z" fill="#F472B6" />
      {/* Hair */}
      <ellipse cx="80" cy="50" rx="26" ry="28" fill="#4A2030" />
      <path d="M54 50 Q50 62 52 75 Q56 68 60 72 Q58 60 62 52 Z" fill="#4A2030" />
      <path d="M106 50 Q110 62 108 75 Q104 68 100 72 Q102 60 98 52 Z" fill="#4A2030" />
      {/* Face */}
      <ellipse cx="80" cy="52" rx="22" ry="24" fill="#FFE4C4" />
      {/* Eyes */}
      <ellipse cx="72" cy="48" rx="4" ry="4.5" fill="#3D1A24" />
      <ellipse cx="88" cy="48" rx="4" ry="4.5" fill="#3D1A24" />
      <circle cx="73.5" cy="46.5" r="1.5" fill="white" />
      <circle cx="89.5" cy="46.5" r="1.5" fill="white" />
      {/* Blush */}
      <ellipse cx="67" cy="56" rx="5" ry="3" fill="#F9A8D4" opacity="0.6" />
      <ellipse cx="93" cy="56" rx="5" ry="3" fill="#F9A8D4" opacity="0.6" />
      {/* Smile */}
      <path d="M73 61 Q80 67 87 61" stroke="#E03668" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Tiara / crown */}
      <path d="M64 30 L68 22 L73 28 L80 18 L87 28 L92 22 L96 30 Q88 26 80 26 Q72 26 64 30 Z" fill="#F9A8D4" />
      <circle cx="80" cy="19" r="3" fill="#F45B83" />
      <circle cx="68" cy="23" r="2" fill="#FBCFE8" />
      <circle cx="92" cy="23" r="2" fill="#FBCFE8" />
      {/* Stars around */}
      <path d="M28 38 L30 33 L32 38 L37 40 L32 42 L30 47 L28 42 L23 40 Z" fill="#F9A8D4" opacity="0.8" />
      <path d="M125 30 L127 26 L129 30 L133 32 L129 34 L127 38 L125 34 L121 32 Z" fill="#FBCFE8" opacity="0.8" />
      <path d="M20 65 L21.5 62 L23 65 L26 66.5 L23 68 L21.5 71 L20 68 L17 66.5 Z" fill="#F9A8D4" opacity="0.6" />
      {/* Outfit detail */}
      <path d="M65 88 Q68 85 71 88" stroke="#E879A0" strokeWidth="1.5" fill="none" />
      <path d="M89 88 Q92 85 95 88" stroke="#E879A0" strokeWidth="1.5" fill="none" />
      <circle cx="80" cy="86" r="2.5" fill="#F45B83" opacity="0.6" />
    </svg>
  )
}
