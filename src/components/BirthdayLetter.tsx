import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  StickerEnvelope, StickerHeart, StickerFlower, StickerSparkle, StickerBlush
} from './stickers/StickerPack'

interface Props { onContinue: () => void }

const paragraphs = [
  {
    bn: true,
    text: 'Maria, আজকের এই দিনটা শুধু একটা তারিখ না — এটা তোমার দিন। সেই মানুষটার দিন, যে আমার কাছে সত্যিই অনেক কিছু মানে রাখে।',
  },
  {
    bn: false,
    text: 'There are people in life who simply make everything feel a little lighter, a little warmer — and you are one of those people. Your presence in my world is something I am quietly grateful for, every single day.',
  },
  {
    bn: true,
    text: 'তোমার হাসিটা — সেটা দেখলে মনে হয় পৃথিবীটা একটু ভালো। তুমি হয়তো জানো না, কিন্তু তোমার ছোট ছোট কথাগুলো, তোমার ছোট ছোট মুহূর্তগুলো — সেগুলো আমার কাছে অনেক মূল্যবান।',
  },
  {
    bn: false,
    text: 'On this special day, I want you to know that you deserve every beautiful thing that life has to offer. Every dream you hold close, every wish you have whispered — I hope the universe hears each one of them.',
  },
  {
    bn: true,
    text: 'জীবনে কত কিছু আসে-যায়। কিন্তু কিছু কিছু মানুষ থেকে যায় — হৃদয়ের একটু কোণে, নিঃশব্দে। তুমি সেই মানুষ, Maria।',
  },
  {
    bn: false,
    text: 'May this birthday bring you joy that overflows, laughter that fills every room, and a heart full of everything that is good and beautiful. May the coming year be your most wonderful yet.',
  },
  {
    bn: true,
    text: 'আমি চাই তোমার জীবনটা সুন্দর থাকুক — তোমার স্বপ্নগুলো পূরণ হোক, তোমার হাসিটা কখনো না মেলাক। তুমি সেটার যোগ্য, Maria। সত্যিই।',
  },
]

export default function BirthdayLetter({ onContinue }: Props) {
  const loveRef = useRef<HTMLDivElement>(null)
  const isLoveVisible = useInView(loveRef, { once: true, margin: '-80px' })

  return (
    <div className="relative min-h-dvh bg-letter paper-texture overflow-hidden py-20 px-5">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-[-15%] w-[55vw] h-[55vw] rounded-full bg-blush-100/35 blur-3xl" />
        <div className="absolute bottom-0 right-[-10%] w-[45vw] h-[45vw] rounded-full bg-rose-soft/25 blur-3xl" />
      </div>

      {/* Stickers */}
      <motion.div
        className="sticker absolute top-[4%] right-[5%] sm:right-[10%]"
        initial={{ opacity: 0, scale: 0, rotate: 15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <motion.div animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
          <StickerEnvelope size={60} />
        </motion.div>
      </motion.div>

      <motion.div
        className="sticker absolute top-[18%] left-[3%] sm:left-[6%]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <motion.div animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
          <StickerHeart size={48} />
        </motion.div>
      </motion.div>

      <motion.div
        className="sticker absolute top-[50%] right-[3%] sm:right-[6%]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <motion.div animate={{ y: [0, -7, 0], rotate: [0, 5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
          <StickerFlower size={50} />
        </motion.div>
      </motion.div>

      <motion.div
        className="sticker absolute bottom-[15%] left-[4%] sm:left-[8%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div animate={{ y: [0, -9, 0], rotate: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <StickerSparkle size={44} />
        </motion.div>
      </motion.div>

      {/* Floating heart */}
      <motion.div
        className="sticker absolute top-[35%] left-[5%] sm:left-[10%]"
        animate={{ y: [0, -16, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <StickerHeart size={28} />
      </motion.div>

      {/* Letter card */}
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-blush-200/60 mb-6">
            <span className="text-rose-brand font-sans text-sm font-medium tracking-wider uppercase">Chapter 02</span>
          </div>
          <h2 className="section-title mb-3">
            একটা ছোট্ট চিঠি,
          </h2>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-rose-brand/80 italic">
            শুধু তোমার জন্য 💌
          </h2>
        </motion.div>

        {/* Letter paper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative bg-white/75 backdrop-blur-md rounded-3xl p-7 sm:p-10 border border-blush-200/40 shadow-card"
        >
          {/* Decorative corner */}
          <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-blush-200/60 rounded-tl-lg" />
          <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-blush-200/60 rounded-tr-lg" />
          <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-blush-200/60 rounded-bl-lg" />
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-blush-200/60 rounded-br-lg" />

          <div className="letter-body">
            {paragraphs.map((p, i) => (
              <LetterParagraph key={i} text={p.text} delay={0.5 + i * 0.12} />
            ))}
          </div>

          {/* Love confession */}
          <div ref={loveRef} className="mt-10 text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.88 }}
              animate={isLoveVisible ? {
                opacity: 1,
                scale: 1,
                textShadow: ['0 0 0px rgba(244,91,131,0)', '0 0 20px rgba(244,91,131,0.4)', '0 0 10px rgba(244,91,131,0.2)']
              } : {}}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif text-2xl sm:text-3xl font-semibold text-rose-brand love-glow"
            >
              Maria, আমি তোমাকে ভালোবাসি। ❤️
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoveVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-4"
            >
              <StickerBlush size={48} />
            </motion.div>
          </div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="mt-8 text-right"
          >
            <p className="font-serif text-lg italic text-rose-brand/60">তোমার জন্যই,</p>
            <p className="font-serif text-2xl font-semibold text-rose-brand/80 mt-1">— With Love ❤️</p>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="text-center mt-12"
        >
          <button className="btn-cta" onClick={onContinue} aria-label="Continue to why you are special">
            Continue 💕
          </button>
        </motion.div>
      </div>
    </div>
  )
}

function LetterParagraph({ text, delay }: { text: string; delay: number }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const isVisible = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="mb-5"
    >
      {text}
    </motion.p>
  )
}
