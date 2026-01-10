"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BorderBeam } from "@/components/ui/border-beam"

interface Job {
  id: string
  title: string
}

interface CareerListProps {
  jobs: Job[]
  applyBase: string
  location: string
}

export function CareerList({ jobs, applyBase, location }: CareerListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-6"
    >
      {jobs.map((job) => (
        <motion.div
          key={job.id}
          variants={item}
          className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all duration-300 hover:bg-card/80 overflow-hidden"
        >
          <BorderBeam 
            size={250} 
            duration={12} 
            delay={9} 
            borderWidth={1.5}
            colorFrom="#00f2fe"
            colorTo="#4facfe"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          <div className="space-y-2 relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {job.title}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{location}</span>
            </div>
          </div>

          <Button asChild size="lg" className="shrink-0 gap-2 relative z-10 shadow-xl group/btn">
            <Link
              href={`${applyBase}/${job.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}
