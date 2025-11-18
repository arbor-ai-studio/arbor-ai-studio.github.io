import { cn } from "@/lib/utils"

interface SectionBadgeProps {
  title: string
  className?: string
}

export function SectionBadge({ title, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary",
        className
      )}
    >
      {title}
    </div>
  )
}
