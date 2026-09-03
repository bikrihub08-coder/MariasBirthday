import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Opening from './components/Opening'
import BirthdayWelcome from './components/BirthdayWelcome'
import BirthdayLetter from './components/BirthdayLetter'
import WhySpecial from './components/WhySpecial'
import BirthdaySurprise from './components/BirthdaySurprise'
import FinalWish from './components/FinalWish'
import MusicPlayer from './components/MusicPlayer'
import ChapterIndicator from './components/ChapterIndicator'

export type Chapter = 0 | 1 | 2 | 3 | 4 | 5

const pageVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, y: -20, scale: 0.97, filter: 'blur(4px)', transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

export default function App() {
  const [chapter, setChapter] = useState<Chapter>(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = (c: Chapter) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setChapter(c)
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 50)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [chapter])

  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      {/* Music Player — always visible after opening */}
      {chapter > 0 && <MusicPlayer />}

      {/* Chapter Indicator */}
      {chapter > 0 && chapter < 5 && (
        <ChapterIndicator current={chapter} total={5} />
      )}

      <AnimatePresence mode="wait">
        {chapter === 0 && (
          <motion.div key="opening" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <Opening onContinue={() => goTo(1)} />
          </motion.div>
        )}
        {chapter === 1 && (
          <motion.div key="welcome" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <BirthdayWelcome onContinue={() => goTo(2)} />
          </motion.div>
        )}
        {chapter === 2 && (
          <motion.div key="letter" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <BirthdayLetter onContinue={() => goTo(3)} />
          </motion.div>
        )}
        {chapter === 3 && (
          <motion.div key="special" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <WhySpecial onContinue={() => goTo(4)} />
          </motion.div>
        )}
        {chapter === 4 && (
          <motion.div key="surprise" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <BirthdaySurprise onContinue={() => goTo(5)} />
          </motion.div>
        )}
        {chapter === 5 && (
          <motion.div key="final" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <FinalWish onRestart={() => goTo(0)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
