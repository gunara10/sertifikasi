"use client"

import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface CelebrationCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  delay?: number
}

export function CelebrationCounter({ 
  end, 
  duration = 2000, 
  suffix = "", 
  prefix = "",
  className = "",
  delay = 0
}: CelebrationCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [isInView, delay])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function untuk animasi yang lebih smooth
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
        // Tampilkan celebration effect saat mencapai angka akhir
        setShowCelebration(true)
        setTimeout(() => setShowCelebration(false), 2000)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration])

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <span className="inline-block">
        {prefix}
        {count.toLocaleString("id-ID")}
        {suffix}
      </span>
      
      {/* Celebration Effects */}
      {showCelebration && (
        <>
          {/* Confetti particles */}
          <span className="absolute -top-4 -left-4 text-2xl animate-bounce">🎉</span>
          <span className="absolute -top-2 -right-4 text-xl animate-bounce animation-delay-100">🎊</span>
          <span className="absolute -bottom-2 left-2 text-lg animate-bounce animation-delay-200">✨</span>
          <span className="absolute -bottom-4 right-2 text-xl animate-bounce animation-delay-300">🌟</span>
          
          {/* Glow effect */}
          <span className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-50 animate-pulse"></span>
        </>
      )}
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </span>
  )
}