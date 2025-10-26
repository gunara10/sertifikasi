"use client"

import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface SparkleCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  delay?: number
}

export function SparkleCounter({ 
  end, 
  duration = 2000, 
  suffix = "", 
  prefix = "",
  className = "",
  delay = 0
}: SparkleCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showSparkles, setShowSparkles] = useState(false)
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
        // Tampilkan sparkles saat mencapai angka akhir
        setShowSparkles(true)
        setTimeout(() => setShowSparkles(false), 1000)
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
      
      {/* Sparkle Effects */}
      {showSparkles && (
        <>
          <span className="absolute -top-2 -left-2 text-yellow-400 animate-ping">✨</span>
          <span className="absolute -top-1 -right-2 text-blue-400 animate-ping animation-delay-100">⭐</span>
          <span className="absolute -bottom-1 left-0 text-green-400 animate-ping animation-delay-200">💫</span>
        </>
      )}
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </span>
  )
}