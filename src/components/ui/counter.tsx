"use client"

import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  delay?: number
}

export function Counter({ 
  end, 
  duration = 2000, 
  suffix = "", 
  prefix = "",
  className = "",
  delay = 0
}: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
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
        // Tambahkan efek pulse saat mencapai angka akhir
        setTimeout(() => {
          setCount(end)
        }, 100)
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
    <span ref={ref} className={`inline-block ${className}`}>
      <span className="inline-block">
        {prefix}
        {count.toLocaleString("id-ID")}
        {suffix}
      </span>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </span>
  )
}