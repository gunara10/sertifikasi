'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  colors?: string[]
  animate?: boolean
}

const GradientText = forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, children, colors = ['from-blue-600', 'to-purple-600'], animate = true, ...props }, ref) => {
    const gradientClass = `bg-gradient-to-r ${colors.join(' ')} bg-clip-text text-transparent`
    
    return (
      <motion.span
        ref={ref}
        className={`${gradientClass} ${className}`}
        {...props}
        {...(animate && {
          initial: { backgroundPosition: '0% 50%' },
          animate: { backgroundPosition: '100% 50%' },
          transition: { duration: 3, repeat: Infinity, repeatType: 'reverse' }
        })}
        style={{
          backgroundSize: '200% 200%'
        }}
      >
        {children}
      </motion.span>
    )
  }
)

GradientText.displayName = 'GradientText'

export { GradientText }