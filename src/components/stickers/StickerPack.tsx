/**
 * Original Sticker Pack — Custom illustrations for Maria's Birthday
 * A cohesive set of cute, soft, romantic stickers.
 */

import React from 'react'

interface StickerProps { size?: number; className?: string }

/* ─── 01. Balloon ─── */
export function StickerBalloon({ size = 60, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 60 78" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Balloon sticker">
      <ellipse cx="30" cy="28" rx="22" ry="26" fill="#F9A8D4" />
      <ellipse cx="30" cy="28" rx="22" ry="26" stroke="#E879A0" strokeWidth="1.5" />
      {/* Shine */}
      <ellipse cx="21" cy="18" rx="6" ry="4" fill="white" opacity="0.4" transform="rotate(-20 21 18)" />
      <ellipse cx="24" cy="13" rx="2.5" ry="1.5" fill="white" opacity="0.3" />
      {/* Knot */}
      <path d="M27 53 Q30 50 33 53 Q31 55 30 54 Q29 55 27 53Z" fill="#E879A0" />
      {/* String */}
      <path d="M30 54 Q26 60 28 65 Q32 70 30 76" stroke="#E879A0" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Face */}
      <circle cx="23" cy="24" r="2.5" fill="#BE185D" />
      <circle cx="37" cy="24" r="2.5" fill="#BE185D" />
      <circle cx="23.8" cy="23" r="1" fill="white" />
      <circle cx="37.8" cy="23" r="1" fill="white" />
      <path d="M24 32 Q30 37 36 32" stroke="#BE185D" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Cheeks */}
      <ellipse cx="19" cy="30" rx="3.5" ry="2" fill="#F472B6" opacity="0.4" />
      <ellipse cx="41" cy="30" rx="3.5" ry="2" fill="#F472B6" opacity="0.4" />
    </svg>
  )
}

/* ─── 02. Sparkle ─── */
export function StickerSparkle({ size = 50, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Sparkle sticker">
      {/* Main star */}
      <path d="M25 4 L27.5 20 L43 16 L30 27 L43 38 L27.5 34 L25 50 L22.5 34 L7 38 L20 27 L7 16 L22.5 20 Z" fill="#F9A8D4" stroke="#E879A0" strokeWidth="1" />
      {/* Inner star */}
      <path d="M25 14 L26.5 22 L34 20 L27.5 26 L34 32 L26.5 30 L25 38 L23.5 30 L16 32 L22.5 26 L16 20 L23.5 22 Z" fill="white" opacity="0.5" />
      {/* Tiny dots */}
      <circle cx="10" cy="10" r="2.5" fill="#F472B6" opacity="0.7" />
      <circle cx="40" cy="10" r="2" fill="#F9A8D4" opacity="0.7" />
      <circle cx="40" cy="40" r="2.5" fill="#F472B6" opacity="0.6" />
      <circle cx="10" cy="40" r="2" fill="#F9A8D4" opacity="0.6" />
    </svg>
  )
}

/* ─── 03. Heart ─── */
export function StickerHeart({ size = 56, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 56 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Heart sticker">
      <path d="M28 46 C28 46, 4 30, 4 15 C4 7, 9 3, 15 3 C20 3, 24 6, 28 10 C32 6, 36 3, 41 3 C47 3, 52 7, 52 15 C52 30, 28 46, 28 46Z" fill="#F45B83" stroke="#E03668" strokeWidth="1.5" />
      {/* Shine */}
      <ellipse cx="18" cy="12" rx="7" ry="4" fill="white" opacity="0.3" transform="rotate(-20 18 12)" />
      <ellipse cx="15" cy="10" rx="3" ry="2" fill="white" opacity="0.2" />
      {/* Inner glow */}
      <path d="M28 40 C28 40, 10 26, 10 15 C10 10, 13 7, 17 7" stroke="#E03668" strokeWidth="0.8" opacity="0.3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/* ─── 04. Flower ─── */
export function StickerFlower({ size = 48, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Flower sticker">
      {/* Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse
          key={i}
          cx={24 + Math.cos((angle * Math.PI) / 180) * 10}
          cy={24 + Math.sin((angle * Math.PI) / 180) * 10}
          rx="6"
          ry="9"
          fill={i % 2 === 0 ? '#F9A8D4' : '#FBCFE8'}
          stroke="#F472B6"
          strokeWidth="0.8"
          transform={`rotate(${angle} ${24 + Math.cos((angle * Math.PI) / 180) * 10} ${24 + Math.sin((angle * Math.PI) / 180) * 10})`}
        />
      ))}
      {/* Center */}
      <circle cx="24" cy="24" r="8" fill="#F9A8D4" />
      <circle cx="24" cy="24" r="8" stroke="#E879A0" strokeWidth="1" />
      {/* Center face */}
      <circle cx="21" cy="22" r="1.5" fill="#BE185D" />
      <circle cx="27" cy="22" r="1.5" fill="#BE185D" />
      <path d="M20.5 27 Q24 30 27.5 27" stroke="#BE185D" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Center shine */}
      <circle cx="22" cy="21" r="0.8" fill="white" opacity="0.5" />
    </svg>
  )
}

/* ─── 05. Happy Reaction ─── */
export function StickerHappyReaction({ size = 60, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Happy reaction sticker">
      {/* Body */}
      <circle cx="30" cy="30" r="27" fill="#FFE4C4" stroke="#F9A8D4" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="27" fill="url(#happyGrad)" />
      <defs>
        <radialGradient id="happyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#FFF0DC" />
          <stop offset="100%" stopColor="#FFD6B0" />
        </radialGradient>
      </defs>
      {/* Eyes — happy crescent */}
      <path d="M18 26 Q21 22 24 26" stroke="#4A2030" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M36 26 Q39 22 42 26" stroke="#4A2030" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Blush */}
      <ellipse cx="16" cy="34" rx="6" ry="3.5" fill="#F9A8D4" opacity="0.6" />
      <ellipse cx="44" cy="34" rx="6" ry="3.5" fill="#F9A8D4" opacity="0.6" />
      {/* Big smile */}
      <path d="M16 36 Q30 50 44 36" stroke="#E03668" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Tongue */}
      <ellipse cx="30" cy="44" rx="6" ry="3" fill="#F472B6" opacity="0.7" />
      {/* Stars */}
      <path d="M8 12 L9 9 L10 12 L13 13 L10 14 L9 17 L8 14 L5 13 Z" fill="#F9A8D4" opacity="0.8" />
      <path d="M47 8 L48 5 L49 8 L52 9 L49 10 L48 13 L47 10 L44 9 Z" fill="#FBCFE8" opacity="0.8" />
    </svg>
  )
}

/* ─── 06. Envelope ─── */
export function StickerEnvelope({ size = 60, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Envelope sticker">
      <rect x="3" y="8" width="54" height="34" rx="6" fill="#F9A8D4" stroke="#E879A0" strokeWidth="1.5" />
      {/* Flap */}
      <path d="M3 14 L30 29 L57 14 L57 8 Q57 8 53 8 L30 23 L7 8 Q3 8 3 8 Z" fill="#FBCFE8" stroke="#F472B6" strokeWidth="0.8" />
      {/* Bottom fold lines */}
      <path d="M3 42 L22 28" stroke="#F472B6" strokeWidth="1" strokeLinecap="round" />
      <path d="M57 42 L38 28" stroke="#F472B6" strokeWidth="1" strokeLinecap="round" />
      {/* Heart stamp */}
      <path d="M30 6 C29 4, 26 4, 26 6.5 C26 9, 30 12, 30 12 C30 12, 34 9, 34 6.5 C34 4, 31 4, 30 6Z" fill="#E03668" />
    </svg>
  )
}

/* ─── 07. Blush reaction ─── */
export function StickerBlush({ size = 48, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Blush reaction sticker">
      <circle cx="24" cy="24" r="21" fill="#FFE4C4" stroke="#F9A8D4" strokeWidth="1.5" />
      {/* Eyes — shy/happy */}
      <path d="M14 20 Q17 17 20 20" stroke="#4A2030" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M28 20 Q31 17 34 20" stroke="#4A2030" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Blush circles */}
      <ellipse cx="12" cy="28" rx="6" ry="3.5" fill="#F9A8D4" opacity="0.8" />
      <ellipse cx="36" cy="28" rx="6" ry="3.5" fill="#F9A8D4" opacity="0.8" />
      {/* Small smile */}
      <path d="M18 32 Q24 37 30 32" stroke="#E03668" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Sparkle */}
      <path d="M6 8 L7 5 L8 8 L11 9 L8 10 L7 13 L6 10 L3 9 Z" fill="#F9A8D4" opacity="0.7" />
      <path d="M39 7 L40 5 L41 7 L43 8 L41 9 L40 11 L39 9 L37 8 Z" fill="#FBCFE8" opacity="0.7" />
    </svg>
  )
}

/* ─── 08. Love Reaction (heart eyes) ─── */
export function StickerLoveReaction({ size = 56, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Love reaction sticker">
      <circle cx="28" cy="28" r="25" fill="#FFE4C4" stroke="#F9A8D4" strokeWidth="1.5" />
      {/* Heart eyes */}
      <path d="M16 22 C16 22, 11 17, 16 14 C19 12, 21 15, 16 22Z" fill="#F45B83" />
      <path d="M16 22 C16 22, 21 17, 16 14 C13 12, 11 15, 16 22Z" fill="#E03668" />
      <path d="M40 22 C40 22, 35 17, 40 14 C43 12, 45 15, 40 22Z" fill="#F45B83" />
      <path d="M40 22 C40 22, 45 17, 40 14 C37 12, 35 15, 40 22Z" fill="#E03668" />
      {/* Blush */}
      <ellipse cx="13" cy="32" rx="6" ry="3" fill="#F9A8D4" opacity="0.7" />
      <ellipse cx="43" cy="32" rx="6" ry="3" fill="#F9A8D4" opacity="0.7" />
      {/* Big kiss smile */}
      <path d="M16 38 Q28 48 40 38" stroke="#E03668" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <ellipse cx="28" cy="44" rx="5" ry="2.5" fill="#F9A8D4" opacity="0.5" />
    </svg>
  )
}

/* ─── 09. Small Cake ─── */
export function StickerCake({ size = 56, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Cake sticker">
      {/* Plate shadow */}
      <ellipse cx="28" cy="50" rx="18" ry="4" fill="#F9A8D4" opacity="0.3" />
      {/* Cake body */}
      <rect x="8" y="28" width="40" height="22" rx="6" fill="#FBCFE8" stroke="#F9A8D4" strokeWidth="1.5" />
      {/* Frosting */}
      <path d="M8 28 Q14 21 20 28 Q26 21 32 28 Q38 21 44 28 Q48 24 48 28" stroke="white" strokeWidth="2.5" fill="#F9A8D4" />
      {/* Candle */}
      <rect x="24" y="14" width="8" height="16" rx="3" fill="#F472B6" />
      <rect x="24" y="14" width="8" height="16" rx="3" stroke="#E879A0" strokeWidth="1" />
      {/* Flame */}
      <ellipse cx="28" cy="11" rx="4" ry="6" fill="#FBBF24" className="animate-[candle_1.5s_ease-in-out_infinite]" />
      <ellipse cx="28" cy="12" rx="2.5" ry="4" fill="#FDE68A" />
      {/* Stripes */}
      <line x1="28" y1="38" x2="28" y2="48" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="18" y1="38" x2="18" y2="48" stroke="#F9A8D4" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="38" y1="38" x2="38" y2="48" stroke="#F9A8D4" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

/* ─── 10. Hug illustration ─── */
export function StickerHug({ size = 64, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Hug sticker">
      {/* Two figures hugging */}
      <circle cx="22" cy="18" r="9" fill="#F9A8D4" stroke="#F472B6" strokeWidth="1" />
      <circle cx="42" cy="18" r="9" fill="#FBCFE8" stroke="#F9A8D4" strokeWidth="1" />
      {/* Bodies */}
      <path d="M12 54 Q12 36 22 36 Q32 36 32 50" fill="#F9A8D4" />
      <path d="M52 54 Q52 36 42 36 Q32 36 32 50" fill="#FBCFE8" />
      {/* Arms */}
      <path d="M12 40 Q20 30 32 36 Q44 30 52 40" stroke="#E879A0" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Faces */}
      <circle cx="19" cy="16" r="1.5" fill="#BE185D" />
      <circle cx="25" cy="16" r="1.5" fill="#BE185D" />
      <path d="M18 22 Q22 26 26 22" stroke="#E03668" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="39" cy="16" r="1.5" fill="#BE185D" />
      <circle cx="45" cy="16" r="1.5" fill="#BE185D" />
      <path d="M38 22 Q42 26 46 22" stroke="#E03668" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Hearts between */}
      <path d="M32 28 C31 26, 28 26, 28 28.5 C28 31, 32 34, 32 34 C32 34, 36 31, 36 28.5 C36 26, 33 26, 32 28Z" fill="#E03668" />
    </svg>
  )
}

/* ─── 11. Gift Box (sticker version) ─── */
export function StickerGift({ size = 56, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Gift sticker">
      <rect x="8" y="26" width="40" height="26" rx="5" fill="#F9A8D4" stroke="#E879A0" strokeWidth="1.5" />
      <rect x="4" y="18" width="48" height="12" rx="5" fill="#F472B6" stroke="#E879A0" strokeWidth="1.5" />
      <rect x="25" y="18" width="6" height="34" rx="3" fill="#E03668" opacity="0.7" />
      <rect x="4" y="22" width="48" height="4" rx="2" fill="#E03668" opacity="0.5" />
      {/* Bow */}
      <ellipse cx="22" cy="16" rx="8" ry="5" fill="#F45B83" transform="rotate(-20 22 16)" />
      <ellipse cx="34" cy="16" rx="8" ry="5" fill="#F45B83" transform="rotate(20 34 16)" />
      <circle cx="28" cy="17" r="4.5" fill="#E03668" />
      <circle cx="28" cy="17" r="2" fill="#F45B83" />
    </svg>
  )
}

/* ─── 12. Confetti sticker ─── */
export function StickerConfetti({ size = 48, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Confetti sticker">
      <rect x="8" y="10" width="6" height="12" rx="3" fill="#F45B83" transform="rotate(20 8 10)" />
      <rect x="22" y="4" width="6" height="12" rx="3" fill="#F472B6" transform="rotate(-15 22 4)" />
      <rect x="36" y="10" width="5" height="10" rx="2.5" fill="#FBCFE8" transform="rotate(35 36 10)" />
      <rect x="6" y="28" width="5" height="10" rx="2.5" fill="#E879A0" transform="rotate(-25 6 28)" />
      <rect x="30" y="26" width="6" height="12" rx="3" fill="#F9A8D4" transform="rotate(10 30 26)" />
      <rect x="18" y="32" width="5" height="10" rx="2.5" fill="#F45B83" transform="rotate(-40 18 32)" />
      {/* Stars */}
      <path d="M40 30 L41 27 L42 30 L45 31 L42 32 L41 35 L40 32 L37 31 Z" fill="#F9A8D4" />
      <path d="M12 40 L13 38 L14 40 L16 41 L14 42 L13 44 L12 42 L10 41 Z" fill="#F472B6" />
    </svg>
  )
}

/* ─── 13. Star / Tiny sparkle ─── */
export function StickerStar({ size = 36, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Star sticker">
      <path d="M18 3 L20.5 14 L31 11 L22 18 L31 25 L20.5 22 L18 33 L15.5 22 L5 25 L14 18 L5 11 L15.5 14 Z" fill="#F9A8D4" stroke="#E879A0" strokeWidth="1" />
      <path d="M18 10 L19.5 16 L25 14.5 L20.5 18 L25 21.5 L19.5 20 L18 26 L16.5 20 L11 21.5 L15.5 18 L11 14.5 L16.5 16 Z" fill="white" opacity="0.45" />
    </svg>
  )
}

/* ─── 14. Small Heart (tiny) ─── */
export function StickerSmallHeart({ size = 24, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Small heart sticker">
      <path d="M12 20 C12 20, 2 13, 2 7 C2 3.5, 4.5 2, 7 2 C9 2, 11 3.5, 12 5 C13 3.5, 15 2, 17 2 C19.5 2, 22 3.5, 22 7 C22 13, 12 20, 12 20Z" fill="#F45B83" stroke="#E03668" strokeWidth="1" />
    </svg>
  )
}

/* ─── 15. Celebration reaction ─── */
export function StickerCelebration({ size = 60, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Celebration reaction sticker">
      <circle cx="30" cy="32" r="22" fill="#FFE4C4" stroke="#F9A8D4" strokeWidth="1.5" />
      {/* Party hat */}
      <path d="M30 8 L18 26 L42 26 Z" fill="#F45B83" />
      <path d="M30 8 L18 26 L42 26 Z" stroke="#E03668" strokeWidth="1" />
      <line x1="24" y1="17" x2="36" y2="17" stroke="white" strokeWidth="2" opacity="0.5" />
      <line x1="21" y1="22" x2="39" y2="22" stroke="white" strokeWidth="2" opacity="0.4" />
      {/* Pompom */}
      <circle cx="30" cy="7" r="3.5" fill="#F9A8D4" stroke="#E879A0" strokeWidth="1" />
      {/* Eyes */}
      <ellipse cx="23" cy="34" rx="3" ry="3.5" fill="#4A2030" />
      <ellipse cx="37" cy="34" rx="3" ry="3.5" fill="#4A2030" />
      <circle cx="24" cy="32.5" r="1.2" fill="white" />
      <circle cx="38" cy="32.5" r="1.2" fill="white" />
      {/* Big open smile */}
      <path d="M20 44 Q30 54 40 44" stroke="#E03668" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <ellipse cx="30" cy="49" rx="7" ry="3.5" fill="#F9A8D4" opacity="0.6" />
      {/* Stars */}
      <path d="M6 22 L7 19 L8 22 L11 23 L8 24 L7 27 L6 24 L3 23 Z" fill="#F9A8D4" />
      <path d="M50 18 L51 15 L52 18 L55 19 L52 20 L51 23 L50 20 L47 19 Z" fill="#FBCFE8" />
      {/* Confetti around */}
      <rect x="8" y="38" width="4" height="8" rx="2" fill="#F472B6" transform="rotate(20 8 38)" opacity="0.7" />
      <rect x="48" y="36" width="4" height="8" rx="2" fill="#F9A8D4" transform="rotate(-25 48 36)" opacity="0.7" />
    </svg>
  )
}

/* ─── 16. Heart + Flower combo ─── */
export function StickerHeartFlower({ size = 50, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Heart flower sticker">
      {/* Stem */}
      <path d="M25 48 Q25 35 25 30" stroke="#86EFAC" strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaves */}
      <ellipse cx="20" cy="38" rx="6" ry="3.5" fill="#86EFAC" opacity="0.7" transform="rotate(-30 20 38)" />
      <ellipse cx="30" cy="34" rx="6" ry="3.5" fill="#86EFAC" opacity="0.6" transform="rotate(30 30 34)" />
      {/* Petals */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <ellipse
          key={i}
          cx={25 + Math.cos((angle * Math.PI) / 180) * 8}
          cy={22 + Math.sin((angle * Math.PI) / 180) * 8}
          rx="5"
          ry="7"
          fill={i % 2 === 0 ? '#F9A8D4' : '#FBCFE8'}
          transform={`rotate(${angle} ${25 + Math.cos((angle * Math.PI) / 180) * 8} ${22 + Math.sin((angle * Math.PI) / 180) * 8})`}
        />
      ))}
      {/* Heart center */}
      <path d="M25 17 C24 14, 20 14, 20 17.5 C20 21.5, 25 25, 25 25 C25 25, 30 21.5, 30 17.5 C30 14, 26 14, 25 17Z" fill="#E03668" />
    </svg>
  )
}

/* ─── 17. Floating Heart (drift version) ─── */
export function StickerFloatingHeart({ size = 40, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size * 0.95} viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Floating heart sticker">
      <path d="M20 34 C20 34, 3 22, 3 11 C3 5, 7 2, 12 2 C15.5 2, 18 4, 20 7 C22 4, 24.5 2, 28 2 C33 2, 37 5, 37 11 C37 22, 20 34, 20 34Z" fill="#F9A8D4" stroke="#F472B6" strokeWidth="1.2" />
      <ellipse cx="12" cy="10" rx="5" ry="3" fill="white" opacity="0.3" transform="rotate(-25 12 10)" />
    </svg>
  )
}

/* ─── 18. Kiss/Love note ─── */
export function StickerKiss({ size = 50, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Kiss sticker">
      <circle cx="25" cy="25" r="22" fill="#FFE4C4" stroke="#F9A8D4" strokeWidth="1.5" />
      {/* Wink eye */}
      <path d="M14 22 Q17 18 20 22" stroke="#4A2030" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Heart eye */}
      <path d="M32 21 C32 21, 29 17, 32 15.5 C34 14.5, 35.5 16.5, 32 21Z" fill="#F45B83" />
      <path d="M32 21 C32 21, 35 17, 32 15.5 C30 14.5, 28.5 16.5, 32 21Z" fill="#E03668" />
      {/* Kiss lips */}
      <path d="M18 32 Q25 40 32 32" stroke="#E03668" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <ellipse cx="25" cy="36" rx="5" ry="2.5" fill="#F9A8D4" opacity="0.6" />
      {/* Blush */}
      <ellipse cx="11" cy="30" rx="5" ry="3" fill="#F9A8D4" opacity="0.7" />
      <ellipse cx="39" cy="30" rx="5" ry="3" fill="#F9A8D4" opacity="0.7" />
      {/* Sparkle */}
      <path d="M6 10 L7 7 L8 10 L11 11 L8 12 L7 15 L6 12 L3 11 Z" fill="#F9A8D4" opacity="0.6" />
      <path d="M40 8 L41 6 L42 8 L44 9 L42 10 L41 12 L40 10 L38 9 Z" fill="#FBCFE8" opacity="0.6" />
    </svg>
  )
}

/* ─── 19. Mini Star burst ─── */
export function StickerBurst({ size = 32, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Star burst sticker">
      {/* 8-point burst */}
      <path d="M16 2 L17.5 12 L26 6 L19.5 14 L30 16 L19.5 18 L26 26 L17.5 20 L16 30 L14.5 20 L6 26 L12.5 18 L2 16 L12.5 14 L6 6 L14.5 12 Z" fill="#F9A8D4" stroke="#E879A0" strokeWidth="0.8" />
      <circle cx="16" cy="16" r="5" fill="white" opacity="0.5" />
      <circle cx="16" cy="16" r="3" fill="#F472B6" opacity="0.4" />
    </svg>
  )
}

/* ─── 20. Celebration Pop ─── */
export function StickerPop({ size = 48, className = '' }: StickerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Celebration pop sticker">
      {/* Confetti popper */}
      <rect x="28" y="28" width="10" height="18" rx="4" fill="#F472B6" transform="rotate(-30 28 28)" />
      <rect x="28" y="28" width="10" height="18" rx="4" stroke="#E879A0" strokeWidth="1" transform="rotate(-30 28 28)" />
      {/* Opening */}
      <ellipse cx="22" cy="30" rx="6" ry="4" fill="#E03668" transform="rotate(-30 22 30)" />
      {/* Confetti burst */}
      <rect x="6" y="6" width="5" height="9" rx="2.5" fill="#F45B83" transform="rotate(15 6 6)" />
      <rect x="20" y="2" width="4" height="8" rx="2" fill="#FBCFE8" transform="rotate(-20 20 2)" />
      <rect x="32" y="6" width="5" height="9" rx="2.5" fill="#F9A8D4" transform="rotate(30 32 6)" />
      <rect x="8" y="18" width="4" height="8" rx="2" fill="#E879A0" transform="rotate(-10 8 18)" />
      <rect x="36" y="14" width="4" height="7" rx="2" fill="#F472B6" transform="rotate(40 36 14)" />
      {/* Stars */}
      <path d="M14 10 L15 8 L16 10 L18 11 L16 12 L15 14 L14 12 L12 11 Z" fill="#F9A8D4" />
      <path d="M34 4 L35 2 L36 4 L38 5 L36 6 L35 8 L34 6 L32 5 Z" fill="#FBCFE8" />
    </svg>
  )
}
