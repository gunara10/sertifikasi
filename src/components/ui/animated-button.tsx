'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Loader2, ArrowRight } from 'lucide-react'
import { forwardRef } from 'react'

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  loading?: boolean
  children: React.ReactNode
  asChild?: boolean
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = 'default', size = 'default', loading = false, children, asChild = false, ...props }, ref) => {
    const buttonVariants = {
      default: {
        rest: { scale: 1, rotateX: 0, rotateY: 0 },
        hover: { 
          scale: 1.05, 
          rotateX: -5, 
          rotateY: 5,
          transition: { duration: 0.2, ease: "easeOut" }
        },
        tap: { scale: 0.95 }
      },
      outline: {
        rest: { scale: 1, borderWidth: "2px" },
        hover: { 
          scale: 1.05, 
          borderWidth: "3px",
          transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
      },
      secondary: {
        rest: { scale: 1, opacity: 0.9 },
        hover: { 
          scale: 1.05, 
          opacity: 1,
          transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
      }
    }

    const currentVariant = buttonVariants[variant as keyof typeof buttonVariants] || buttonVariants.default

    if (asChild) {
      return (
        <motion.div
          variants={currentVariant}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className="inline-block"
        >
          {children}
        </motion.div>
      )
    }

    return (
      <motion.div
        variants={currentVariant}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className="inline-block"
      >
        <Button
          ref={ref}
          variant={variant}
          size={size}
          className={`relative overflow-hidden group ${className}`}
          disabled={loading}
          {...props}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              {children}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              {children}
              {variant === 'default' && (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </motion.div>
          )}
        </Button>
      </motion.div>
    )
  }
)

AnimatedButton.displayName = 'AnimatedButton'

export { AnimatedButton }