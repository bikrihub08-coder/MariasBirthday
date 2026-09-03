import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  StickerBalloon, StickerSparkle, StickerHeart, StickerFlower, StickerHappyReaction
} from './stickers/StickerPack'

interface Props { onContinue: () => void }

const lines = [
  { text: 'আজকের দিনটা একটু special...', delay: 0.3, lang: 'bn' },
  { text: 'Because it\'s your day. ❤️', delay: 1.4, lang: 'en' },
  { text: 'Happy Birthday, Maria! 🎂❤️', delay: 2.6, lang: 'en', big: true },
  { text: 'আমার জানপাখির জন্য ছোট্ট একটা surprise...', delay: 3.8, lang: 'bn' },
]

export default function Opening({ onContinue }: Props) {
  const [showCta, setShowCta] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowCta(true), 5200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative min-h-dvh flex flex-col items-center justify-center bg-opening overflow-hidden px-6 py-16">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-blush-100 opacity-40 blur-3xl" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-rose-soft opacity-30 blur-3xl" />
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-petal opacity-20 blur-2xl" />
      </div>

      {/* Floating stickers */}
      <motion.div
        className="sticker absolute top-[8%] left-[6%] sm:left-[10%]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <StickerBalloon size={64} />
      </motion.div>

      <motion.div
        className="sticker absolute top-[10%] right-[6%] sm:right-[10%]"
        animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <StickerSparkle size={52} />
      </motion.div>

      <motion.div
        className="sticker absolute top-[45%] left-[3%] sm:left-[7%]"
        animate={{ y: [0, -10, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <StickerHeart size={56} />
      </motion.div>

      <motion.div
        className="sticker absolute top-[45%] right-[3%] sm:right-[7%]"
        animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <StickerHappyReaction size={60} />
      </motion.div>

      <motion.div
        className="sticker absolute bottom-[12%] left-[8%] sm:left-[12%]"
        animate={{ y: [0, -6, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <StickerFlower size={48} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-lg mx-auto">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: line.delay, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className={`mb-4 ${line.big
              ? 'font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-rose-brand leading-tight'
              : line.lang === 'bn'
                ? 'font-serif text-xl sm:text-2xl text-rose-brand/80 italic'
                : 'font-sans text-lg sm:text-xl text-[#7A4557]'
            }`}
          >
            {line.text}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 16 }}
          animate={{ opacity: showCta ? 1 : 0, scale: showCta ? 1 : 0.85, y: showCta ? 0 : 16 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="mt-10"
        >
          <button className="btn-cta" onClick={onContinue} aria-label="Open your birthday surprise">
            Open Your Surprise ✨
          </button>
        </motion.div>
      </div>

      {/* Soft floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blush-300 opacity-30 pointer-events-none"
          style={{
            width: 4 + (i % 3) * 3,
            height: 4 + (i % 3) * 3,
            left: `${10 + i * 11}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        />
      ))}
    </div>
  )
}
