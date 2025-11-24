"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { navLinks } from "@/lib/constants"

export function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 inset-x-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <Container className="relative flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 md:flex">
          <div className="h-8 w-auto flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Arbor AI Studio Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-auto object-contain dark:brightness-0 dark:invert"
            />
          </div>
          <span className="hidden md:inline text-xl font-semibold">Arbor AI Studio</span>
        </Link>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden">
          <span className="text-xl font-semibold">Arbor AI Studio</span>
        </div>

        <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      scrollToSection(e, link.href)
                    }
                  }}
                  className="text-sm hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild className="hidden md:flex">
            <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
              Get Started
            </a>
          </Button>
        </div>
      </Container>
    </header>
  )
}
