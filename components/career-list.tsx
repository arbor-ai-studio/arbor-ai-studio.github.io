"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Loader2, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BorderBeam } from "@/components/ui/border-beam"
import { useEffect, useState } from "react"
import { FadeIn } from "@/components/ui/fade-in"
import { MagicCard } from "@/components/ui/magic-card"

interface Job {
  id: string
  title: string
}

interface CareerListProps {
  jobsEndpoint: string
  applyBase: string
  location: string
}

export function CareerList({ jobsEndpoint, applyBase, location }: CareerListProps) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(jobsEndpoint)
        if (!response.ok) {
          throw new Error("Unable to load open roles")
        }
        const data = await response.json()
        setJobs(Array.isArray(data?.results) ? data.results.reverse() : [])
      } catch {
        setError("Unable to load open roles right now. Please try again shortly.")
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [jobsEndpoint])

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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground mt-4">Loading open positions...</p>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      <FadeIn className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold">Open Positions</h2>
        <span className="text-sm font-medium text-muted-foreground bg-background border border-border px-3 py-1 rounded-full">
          {jobs.length} Active Roles
        </span>
      </FadeIn>

      {error && (
        <FadeIn>
          <div className="rounded-xl border border-destructive/50 bg-destructive/5 p-6 text-center">
            <p className="text-destructive mb-2 font-medium">Could not load jobs</p>
            <p className="text-muted-foreground text-sm">{error}</p>
          </div>
        </FadeIn>
      )}

      {!error && jobs.length === 0 && (
        <FadeIn>
          <MagicCard className="py-20 flex flex-col items-center justify-center text-center px-4">
            <p className="text-lg font-medium mb-2">No open positions right now</p>
            <p className="text-muted-foreground mb-8">But we&apos;re always looking for exceptional talent.</p>
            <a 
              href="mailto:contact@arboraistudio.com" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Mail className="w-4 h-4" />
              Send us your CV
            </a>
          </MagicCard>
        </FadeIn>
      )}

      {!error && jobs.length > 0 && (
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
      )}
    </div>
  )
}
