"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
  direction = "up",
  ...props
}: FadeInProps) {
  const getInitial = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 40 }
      case "down": return { opacity: 0, y: -40 }
      case "left": return { opacity: 0, x: 40 }
      case "right": return { opacity: 0, x: -40 }
      case "none": return { opacity: 0 }
      default: return { opacity: 0, y: 40 }
    }
  }

  const getAnimate = () => {
    switch (direction) {
      case "up": return { opacity: 1, y: 0 }
      case "down": return { opacity: 1, y: 0 }
      case "left": return { opacity: 1, x: 0 }
      case "right": return { opacity: 1, x: 0 }
      case "none": return { opacity: 1 }
      default: return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
