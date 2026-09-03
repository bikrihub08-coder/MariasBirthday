import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const COLORS = ['#F45B83', '#F9A8D4', '#FBCFE8', '#E03668', '#F472B6', '#FFD6E0', '#E879A0']
const SHAPES = ['circle', 'rect', 'heart']

interface Particle {
  id: number
  x: number
  color: string
  shape: string
  size: number
  delay: number
  duration: number
  drift: number
}

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: COLORS[i % COLORS.length],
    shape: SHAPES[i % SHAPES.length],
    size: 6 + Math.random() * 8,
    delay: Math.random() * 1.5,
    duration: 2.5 + Math.random() * 2,
    drift: (Math.random() - 0.5) * 60,
  }))
}

export default function Celebration() {
  const particles = useRef(makeParticles(40)).current

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-0"
          style={{ left: `${p.x}%` }}
          initial={{ y: -20, opacity: 1, x: 0, rotate: 0 }}
          animate={{
            y: '110vh',
            x: p.drift,
            opacity: [1, 1, 0.6, 0],
            rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeIn',
            repeat: 2,
            repeatDelay: p.delay * 0.5,
          }}
        >
          {p.shape === 'circle' && (
            <div style={{ width: p.size, height: p.size, borderRadius: '50%', background: p.color }} />
          )}
          {p.shape === 'rect' && (
            <div style={{ width: p.size * 0.6, height: p.size * 1.4, borderRadius: 2, background: p.color }} />
          )}
          {p.shape === 'heart' && (
            <svg width={p.size * 1.5} height={p.size * 1.4} viewBox="0 0 20 18">
              <path d="M10 16 C10 16, 1 10, 1 5 C1 2, 3 1, 5.5 1 C7.5 1, 9 2.5, 10 4 C11 2.5, 12.5 1, 14.5 1 C17 1, 19 2, 19 5 C19 10, 10 16, 10 16Z" fill={p.color} />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  )
}
