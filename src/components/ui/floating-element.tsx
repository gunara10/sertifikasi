'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface FloatingElementProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  duration?: number
  delay?: number
  intensity?: number
}

const FloatingElement = forwardRef<HTMLDivElement, FloatingElementProps>(
  ({ className, children, duration = 3, delay = 0, intensity = 10, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={className}
        animate={{
          y: [0, -intensity, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          delay,
          ease: "easeInOut"
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

FloatingElement.displayName = 'FloatingElement'

export { FloatingElement }