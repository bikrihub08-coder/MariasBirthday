import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function getFormattedDate() {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date())
}

function getFormattedTime() {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(new Date())
}

export default function DateTimeCard() {
  const [date, setDate] = useState(getFormattedDate())
  const [time, setTime] = useState(getFormattedTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getFormattedDate())
      setTime(getFormattedTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className="inline-flex flex-col items-center gap-1 bg-white/70 backdrop-blur-md rounded-2xl px-7 py-4 border border-blush-200/50 shadow-card"
      aria-label={`Today is ${date}, current time ${time}`}
    >
      <span className="font-sans text-xs text-[#B07A8A] tracking-widest uppercase">Today is</span>
      <span className="font-serif text-xl sm:text-2xl font-semibold text-[#3D1A24]">{date}</span>
      <span className="font-sans text-sm text-rose-brand font-medium tracking-wide">{time}</span>
    </motion.div>
  )
}
