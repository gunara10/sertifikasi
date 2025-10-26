'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
  delay?: number
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, children, hover = true, delay = 0, ...props }, ref) => {
    const cardVariants = {
      rest: { 
        scale: 1, 
        y: 0,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      },
      hover: { 
        scale: 1.03, 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3, ease: "easeOut" }
      }
    }

    const containerVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6, 
          delay,
          ease: "easeOut"
        }
      }
    }

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        ref={ref}
        className={className}
        {...props}
      >
        <motion.div
          variants={hover ? cardVariants : undefined}
          initial="rest"
          whileHover={hover ? "hover" : undefined}
        >
          <Card className="h-full transition-all duration-300 hover:border-primary/50 group">
            {children}
          </Card>
        </motion.div>
      </motion.div>
    )
  }
)

AnimatedCard.displayName = 'AnimatedCard'

const AnimatedCardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <CardHeader ref={ref} className={className} {...props}>
        {children}
      </CardHeader>
    </motion.div>
  )
)

AnimatedCardHeader.displayName = 'AnimatedCardHeader'

const AnimatedCardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <motion.h3
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      {...props}
    >
      {children}
    </motion.h3>
  )
)

AnimatedCardTitle.displayName = 'AnimatedCardTitle'

const AnimatedCardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <motion.p
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      {...props}
    >
      {children}
    </motion.p>
  )
)

AnimatedCardDescription.displayName = 'AnimatedCardDescription'

const AnimatedCardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <CardContent ref={ref} className={className} {...props}>
        {children}
      </CardContent>
    </motion.div>
  )
)

AnimatedCardContent.displayName = 'AnimatedCardContent'

export { AnimatedCard, AnimatedCardHeader, AnimatedCardTitle, AnimatedCardDescription, AnimatedCardContent }