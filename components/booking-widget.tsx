"use client"

import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function BookingWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-8 gap-2 bg-primary text-primary-foreground"
        asChild
      >
        <a
          href="https://calendar.app.google/SQuZ5t9RAyUtYhq7A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Calendar className="w-5 h-5" />
          <span className="font-semibold">Book Meeting</span>
        </a>
      </Button>
    </motion.div>
  )
}
