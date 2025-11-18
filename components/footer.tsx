import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <Container className="py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image src="/logo.png" alt="Arbor AI Studio Logo" width={32} height={32} className="object-contain rounded-lg" />
            </div>
            <span className="text-sm font-medium">Arbor AI Studio</span>
          </div>

          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Arbor AI Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
