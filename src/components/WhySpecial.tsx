import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  StickerHappyReaction, StickerHeart, StickerSparkle,
  StickerFlower, StickerLoveReaction
} from './stickers/StickerPack'

interface Props { onContinue: () => void }

const reasons = [
  {
    emoji: '🌸',
    text: 'তোমার হাসিটা আলাদা।',
    sub: 'It lights up everything around you.',
    sticker: <StickerHappyReaction size={44} />,
  },
  {
    emoji: '✨',
    text: 'তুমি থাকলে দিনটা একটু বেশি সুন্দর লাগে।',
    sub: 'Just your presence makes the world warmer.',
    sticker: <StickerSparkle size={40} />,
  },
  {
    emoji: '💗',
    text: 'তোমার ছোট ছোট কথাগুলোও special.',
    sub: 'Every word you say means something.',
    sticker: <StickerHeart size={42} />,
  },
  {
    emoji: '🫶',
    text: 'তুমি আমার কাছে সত্যিই important.',
    sub: 'More than words can ever say.',
    sticker: <StickerLoveReaction size={44} />,
  },
  {
    emoji: '🌷',
    text: 'তুমি মানেই একটু extra happiness.',
    sub: 'You are someone worth celebrating — every day.',
    sticker: <StickerFlower size={42} />,
  },
  {
    emoji: '🌟',
    text: 'তুমি নিজেই একটা কারণ — খুশি থাকার।',
    sub: 'You make smiling effortless.',
    sticker: <StickerSparkle size={38} />,
  },
]

export default function WhySpecial({ onContinue }: Props) {
  return (
    <div className="relative min-h-dvh bg-special overflow-hidden py-20 px-5">
      {/* Blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-rose-soft/30 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-blush-100/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-blush-200/60 mb-6">
            <span className="text-rose-brand font-sans text-sm font-medium tracking-wider uppercase">Chapter 03</span>
          </div>
          <h2 className="section-title mb-4">Why You're Special 💕</h2>
          <p className="section-subtitle max-w-sm mx-auto">
            কিছু কথা যেগুলো সবসময় বলা হয় না — কিন্তু সবসময় মনে থাকে।
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {reasons.map((r, i) => (
            <SpecialCard key={i} reason={r} index={i} />
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-blush-200/40 mb-12"
        >
          <p className="font-serif text-2xl sm:text-3xl font-medium text-rose-brand/80 italic mb-2">
            "তুমি অনেক সুন্দর, Maria —
          </p>
          <p className="font-serif text-2xl sm:text-3xl font-medium text-rose-brand italic">
            ভেতরে এবং বাইরে, দুটোতেই।" 💗
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button className="btn-cta" onClick={onContinue} aria-label="Open the birthday surprise">
            Open Surprise 🎁
          </button>
        </motion.div>
      </div>
    </div>
  )
}

function SpecialCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className="special-card relative group"
    >
      {/* Sticker corner */}
      <div className="absolute -top-3 -right-3">
        <motion.div
          initial={{ scale: 0, rotate: -15 }}
          animate={isVisible ? { scale: 1, rotate: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="sticker"
        >
          {reason.sticker}
        </motion.div>
      </div>

      <div className="text-4xl mb-3">{reason.emoji}</div>
      <p className="font-serif text-xl font-semibold text-[#3D1A24] mb-2 leading-snug">{reason.text}</p>
      <p className="font-sans text-sm text-[#B07A8A] leading-relaxed">{reason.sub}</p>
    </motion.div>
  )
}
