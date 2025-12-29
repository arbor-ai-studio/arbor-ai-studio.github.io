import { Container } from "@/components/ui/container"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12 animate-pulse">
        <div className="text-center space-y-4">
          <div className="h-10 bg-muted rounded-md w-3/4 mx-auto" />
          <div className="h-6 bg-muted rounded-md w-1/2 mx-auto" />
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="h-8 bg-muted rounded-md w-1/3" />
            <div className="h-6 bg-muted rounded-md w-24" />
          </div>

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 h-32"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
