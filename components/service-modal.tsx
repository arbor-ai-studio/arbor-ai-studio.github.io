"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ServiceDetail } from "@/lib/service-examples"
import { Check, LucideIcon, Sparkles, ArrowRight, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  service: ServiceDetail | null
  icon?: LucideIcon
}

export function ServiceModal({ isOpen, onOpenChange, service, icon: Icon }: ServiceModalProps) {
  if (!service) return null

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col border-border/50 bg-background/95 backdrop-blur-xl p-0 gap-0">
        
        {/* Header Section */}
        <div className="flex-shrink-0 p-6 pb-4 border-b border-border/40">
          <DialogHeader className="gap-4">
            <div className="flex items-center gap-4">
              {Icon ? (
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center shadow-inner">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
              <div className="space-y-1">
                <DialogTitle className="text-2xl font-bold tracking-tight">{service.title}</DialogTitle>
                <DialogDescription className="text-base font-medium text-foreground/80 leading-snug">
                  {service.coreValue}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
        </div>

        {/* Scrollable Content Section */}
        <div className="flex-1 overflow-y-auto p-6 pt-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Potential Use Cases
            </h4>
          </div>
          
          <div className="grid gap-4">
            {service.examples.map((example, i) => (
              <div 
                key={i} 
                className="group relative p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-muted/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {example.title}
                    </h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {example.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* "And More" / Custom Card */}
            <div className="group relative p-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Lightbulb className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h5 className="font-semibold text-foreground">
                    Your Unique Challenge
                  </h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Have a different idea? Our agents and models are custom-built to solve <em>your</em> specific problems. These are just examples of what is possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer/Action Area */}
        <div className="flex-shrink-0 p-6 border-t border-border/40 bg-muted/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            Ready to deploy this in your business?
          </p>
          <Button asChild className="w-full sm:w-auto gap-2 shadow-md">
            <a href="https://calendar.app.google/SQuZ5t9RAyUtYhq7A" target="_blank" rel="noopener noreferrer">
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  )
}
