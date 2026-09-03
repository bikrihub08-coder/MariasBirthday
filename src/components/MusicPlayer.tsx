import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const [available, setAvailable] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio('/src/assets/audio/romantic-instrumental.mp3')
    audio.loop = true
    audio.volume = 0.45
    audio.onerror = () => setAvailable(false)
    audioRef.current = audio
    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const toggle = () => {
    if (!audioRef.current || !available) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().catch(() => setAvailable(false))
      setPlaying(true)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className="fixed bottom-6 right-5 z-50"
    >
      <button
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        title={available ? (playing ? 'Pause music' : 'Play romantic music') : 'Music unavailable'}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium font-sans transition-all duration-300 shadow-soft backdrop-blur-md border ${
          playing
            ? 'bg-rose-brand text-white border-rose-brand/30'
            : 'bg-white/80 text-rose-brand border-blush-200/60 hover:bg-white'
        } ${!available ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:shadow-glow'}`}
      >
        <AnimatePresence mode="wait">
          {playing ? (
            <motion.span key="note" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              <MusicWave />
            </motion.span>
          ) : (
            <motion.span key="play" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-base">
              🎵
            </motion.span>
          )}
        </AnimatePresence>
        <span>{playing ? 'Playing' : 'Music'}</span>
      </button>
    </motion.div>
  )
}

function MusicWave() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={i * 4 + 1}
          width={3}
          rx={1.5}
          fill="currentColor"
          animate={{ height: [4, 10 + i * 2, 6, 14, 4], y: [5, 2, 4, 0, 5] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
        />
      ))}
    </svg>
  )
}
