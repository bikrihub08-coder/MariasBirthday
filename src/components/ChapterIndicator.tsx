import React from 'react'
import { motion } from 'framer-motion'

const labels = ['', 'Welcome', 'Letter', 'Special', 'Surprise', 'Wish']

interface Props { current: number; total: number }

export default function ChapterIndicator({ current }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-blush-200/50 shadow-card"
      aria-label={`Chapter ${current} of 5: ${labels[current]}`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`chapter-dot transition-all duration-400 ${i === current ? 'active' : ''}`}
          aria-hidden="true"
        />
      ))}
      <span className="font-sans text-xs text-rose-brand/70 ml-1 tracking-wide">
        {String(current).padStart(2, '0')} — {labels[current]}
      </span>
    </motion.div>
  )
}
