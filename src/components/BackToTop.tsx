'use client'

import useScrollEvent from '@/hooks/useScrollEvent'
import { Icon } from '@iconify/react'
import { useEffect, useRef } from 'react'

const BackToTop = () => {
  const { scrollPassed, scrollY } = useScrollEvent()
  const scrollProgressRef = useRef<SVGRectElement>(null)

  useEffect(() => {
    if (scrollProgressRef.current) {
      const offset = 185 - (185 * scrollPassed) / 100
      scrollProgressRef.current.style.strokeDashoffset = offset.toString()
    }
  }, [scrollPassed])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed top-1/2 end-4 z-[100] flex flex-col items-center space-y-3 -translate-y-1/2">
      <button
        id="topButton"
        onClick={scrollToTop}
        className={`relative flex flex-col items-center justify-center px-1.75 pb-4 pt-2.5 bg-body-bg rounded-full border border-border transition text-xs font-medium text-default-700 overflow-hidden duration-300 ${
          scrollY > 100 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Icon icon="lucide:arrow-up" className="text-base mb-1" />
        <span className="[writing-mode:vertical-rl] [text-orientation:mixed] rotate-180 uppercase">Top</span>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 32 76" fill="none">
          <rect ref={scrollProgressRef} x=".75" y=".75" width="30.5" height={75} rx="15.25" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray={185} strokeDashoffset={185} />
        </svg>
      </button>
    </div>
  )
}

export default BackToTop
