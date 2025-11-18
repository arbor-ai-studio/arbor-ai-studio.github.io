import { cn } from "@/lib/utils"

interface WrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Wrapper({ children, className, id }: WrapperProps) {
  return (
    <div id={id} className={cn("w-full relative", className)}>
      {children}
    </div>
  )
}
