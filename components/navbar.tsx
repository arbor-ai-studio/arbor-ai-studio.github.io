"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { navLinks } from "@/lib/constants"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
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
                {link.href.startsWith("#") ? (
                  pathname === "/" ? (
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-sm hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={`/${link.href}`}
                      className="text-sm hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  )
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild className="hidden md:flex">
            {pathname === "/" ? (
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                Get Started
              </a>
            ) : (
              <Link href="/#contact">
                Get Started
              </Link>
            )}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
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
                  <span className="text-xl font-semibold">Arbor AI Studio</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <div key={link.href}>
                      {link.href.startsWith("#") ? (
                        pathname === "/" ? (
                          <a
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={`/${link.href}`}
                            className="text-lg font-medium hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        )
                      ) : (
                        <Link
                          href={link.href}
                          className="text-lg font-medium hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Button asChild className="mt-4 w-full">
                    {pathname === "/" ? (
                      <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                        Get Started
                      </a>
                    ) : (
                      <Link href="/#contact" onClick={() => setIsOpen(false)}>
                        Get Started
                      </Link>
                    )}
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
