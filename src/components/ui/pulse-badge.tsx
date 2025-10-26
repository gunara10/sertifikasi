'use client'

import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface PulseBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

const PulseBadge = forwardRef<HTMLDivElement, PulseBadgeProps>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Badge 
          variant={variant}
          className="relative overflow-hidden"
          {...props}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          {children}
        </Badge>
      </motion.div>
    )
  }
)

PulseBadge.displayName = 'PulseBadge'

export { PulseBadge }