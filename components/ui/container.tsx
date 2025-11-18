import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean
}

export function Container({ children, className, reverse }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-4 md:px-8",
        reverse && "flex flex-col-reverse",
        className
      )}
    >
      {children}
    </div>
  )
}
