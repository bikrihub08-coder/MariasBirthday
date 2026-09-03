import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  StickerHeart, StickerSparkle, StickerFlower, StickerLoveReaction
} from './stickers/StickerPack'

interface Props { onRestart: () => void }

export default function FinalWish({ onRestart }: Props) {
  const [showLove, setShowLove] = useState(false)
  const [showLastLine, setShowLastLine] = useState(false)
  const loveRef = useRef<HTMLDivElement>(null)
  const isVisible = useInView(loveRef, { once: true, margin: '-60px' })

  useEffect(() => {
    if (isVisible) {
      const t1 = setTimeout(() => setShowLove(true), 600)
      const t2 = setTimeout(() => setShowLastLine(true), 2200)
      return () => { clearTimeout(t1); clearTimeout(t2) }
    }
  }, [isVisible])

  return (
    <div className="relative min-h-dvh bg-final overflow-hidden flex flex-col items-center justify-center py-20 px-5">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-rose-soft/35 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blush-100/40 blur-3xl" />
        <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-petal/30 blur-3xl" />
      </div>

      {/* Floating hearts background */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute sticker opacity-20"
          style={{
            left: `${5 + i * 9}%`,
            top: `${10 + (i % 4) * 22}%`,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, (i % 2 === 0 ? 6 : -6), 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 5 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        >
          <StickerHeart size={20 + (i % 3) * 8} />
        </motion.div>
      ))}

      {/* Floating sparkles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`s${i}`}
          className="pointer-events-none absolute sticker opacity-25"
          style={{ right: `${4 + i * 14}%`, top: `${15 + (i % 3) * 25}%` }}
          animate={{ y: [0, -12, 0], rotate: [0, 15, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
        >
          <StickerSparkle size={22 + (i % 2) * 10} />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-blush-200/60 mb-8"
        >
          <span className="text-rose-brand font-sans text-sm font-medium tracking-wider uppercase">Chapter 05 — Final</span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="section-title mb-6"
        >
          Happy Birthday,<br />
          <span className="text-rose-brand italic">My Janpakhii ❤️</span>
        </motion.h2>

        {/* Large heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex justify-center mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="sticker"
          >
            <StickerHeart size={100} />
          </motion.div>
        </motion.div>

        {/* Wishes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-white/65 backdrop-blur-md rounded-3xl p-7 sm:p-10 border border-blush-200/40 shadow-card mb-10 text-left"
        >
          <div className="letter-body space-y-4">
            <WishLine delay={0.9} text="Maria, তোমার জন্মদিনে শুধু একটাই চাওয়া — তুমি ভালো থেকো। সত্যিই ভালো।" />
            <WishLine delay={1.1} text="তোমার প্রতিটা স্বপ্ন পূরণ হোক। তুমি যা চাও, যা ভাবো — সবকিছু সুন্দর হয়ে আসুক তোমার কাছে।" />
            <WishLine delay={1.3} text="তোমার হাসিটা যেন কখনো না থামে। এই পৃথিবীর সব ভালো জিনিস তোমার প্রাপ্য।" />
            <WishLine delay={1.5} text="May every day ahead be kinder, brighter, and more beautiful than the last. You deserve a life full of joy, warmth, and love." />
            <WishLine delay={1.7} text="আগামীর দিনগুলো আরো সুন্দর হোক — শুধু তোমার জন্য। আমরা একসাথে অনেক সুন্দর মুহূর্ত তৈরি করবো — এটুকু বিশ্বাস রাখি।" />
          </div>
        </motion.div>

        {/* The reveal */}
        <div ref={loveRef}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-serif text-lg text-rose-brand/60 italic mb-6"
          >
            I have one last thing to say...
          </motion.p>

          {/* Main love line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={showLove ? {
              opacity: 1,
              scale: 1,
              textShadow: '0 0 30px rgba(244,91,131,0.4)',
            } : {}}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="mb-6"
          >
            <h3 className="font-serif text-4xl sm:text-5xl font-bold text-rose-brand love-glow leading-tight">
              I Love You, Maria ❤️
            </h3>
          </motion.div>

          {/* Final birthday line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={showLastLine ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="mb-6"
          >
            <p className="font-serif text-2xl sm:text-3xl text-rose-brand/80 italic">
              Happy Birthday, জানপাখি. 🎂💗
            </p>
          </motion.div>

          {/* Sticker group */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={showLastLine ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex justify-center items-center gap-4 mb-10"
          >
            {[
              { S: StickerFlower, size: 44, delay: 0 },
              { S: StickerHeart, size: 52, delay: 0.15 },
              { S: StickerLoveReaction, size: 48, delay: 0.3 },
              { S: StickerSparkle, size: 40, delay: 0.45 },
              { S: StickerFlower, size: 40, delay: 0.6 },
            ].map(({ S, size, delay }, i) => (
              <motion.div
                key={i}
                className="sticker"
                initial={{ scale: 0, rotate: -20 }}
                animate={showLastLine ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: delay + 0.3, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}>
                  <S size={size} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Restart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showLastLine ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <button
            className="btn-ghost"
            onClick={onRestart}
            aria-label="Relive from the beginning"
          >
            ↩ Relive from the Beginning
          </button>
        </motion.div>
      </div>
    </div>
  )
}

function WishLine({ text, delay }: { text: string; delay: number }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const isVisible = useInView(ref, { once: true, margin: '-30px' })
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.7 }}
    >
      {text}
    </motion.p>
  )
}
