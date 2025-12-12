"use client"

import { Container } from "@/components/ui/container"
import { Wrapper } from "@/components/ui/wrapper"
import { SectionBadge } from "@/components/ui/section-badge"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Marquee from "@/components/ui/marquee"
import { services, reviews, aiTechnologies } from "@/lib/constants"
import { ArrowRight, Mail, Phone, MapPin, User, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Home() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const firstRow = reviews.slice(0, reviews.length / 2)
  const secondRow = reviews.slice(reviews.length / 2)

  return (
    <div className="flex flex-col w-full">

      {/* Hero Section */}
      <Wrapper>
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[120vh]" />

        <Container className="py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionBadge title="AI Solutions Provider" className="mb-8" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 mb-6 leading-tight"
            >
              Turn AI Potential into Real Business Impact
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
            >
              From custom internal business tools that save you money, to launching your own SaaS product. We bridge the gap between technology and value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" onClick={() => scrollToSection("#contact")} className="gap-2">
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("#solutions")}>
                Explore Solutions
              </Button>
            </motion.div>

            {/* AI Technologies Marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-12 mb-0 w-full"
            >
              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
                <Marquee pauseOnHover className="[--duration:40s] select-none">
                  {aiTechnologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="mx-6 flex items-center justify-center p-4 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card transition-colors"
                      title={tech.name}
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
                        alt={tech.name}
                        className="w-10 h-10 dark:invert dark:brightness-0 dark:contrast-200"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
              </div>
            </motion.div>

            {/* Placeholder for hero image */}
            {/* <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 w-full max-w-5xl"
            >
              <div className="relative aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 border border-border shadow-lg flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <p className="text-muted-foreground z-10">Hero Image Placeholder</p>
                <BorderBeam size={250} duration={12} delay={9} colorFrom="#86a447" colorTo="#31593a" />
              </div>
            </motion.div> */}
          </div>
        </Container>
      </Wrapper>

      {/* About Section */}
      <Wrapper id="about" className="py-24 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionBadge title="About Us" className="mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              We Build the AI Tech So You Can Build the Business
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Arbor AI Studio, we don&apos;t just deliver code; we deliver measurable business outcomes. Whether you need to automate internal costs or launch a revenue-generating product, our team aligns technology with your bottom line.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Use Cases Section - New Addition */}
      <Wrapper id="use-cases" className="py-24 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionBadge title="Real World Impact" className="mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Solving Real Problems with AI
            </h2>
            <p className="text-lg text-muted-foreground">
              We don&apos;t just write code; we solve business bottlenecks.
            </p>
          </div>

          <div className="flex flex-col gap-12 lg:gap-20">
            {[
              {
                problem: "Support team overwhelmed?",
                fix: "24/7 Intelligent Support Agents that resolve 80% of queries instantly, letting your team focus on complex issues."
              },
              {
                problem: "Great idea but no devs?",
                fix: "Full-cycle SaaS building. We take you from napkin sketch to MVP with final quality checks and production deployment."
              },
              {
                problem: "Employees wasting time?",
                fix: "Chat with Company Data (RAG). Instant answers from your PDF policies, documentation, and internal wikis."
              },
              {
                problem: "Tired of copy-pasting?",
                fix: (<span><strong className="text-foreground">MCP Tools</strong>: Custom integrations that let your AI assistants safely read/write to your CRM, Calendar, and Inventory systems.</span>)
              }
            ].map((item, i) => (
              <div key={i} className={`flex w-full ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="relative group w-full md:w-[95%] lg:w-[90%] p-8 rounded-2xl border border-border bg-card hover:bg-muted/30 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
                    <div className="flex-1 text-center md:text-left">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">The Problem</span>
                      <h3 className="text-xl md:text-2xl font-bold mt-2 text-foreground">&quot;{item.problem}&quot;</h3>
                    </div>

                    <div className="flex-shrink-0">
                      <ArrowRight className="w-8 h-8 text-muted-foreground/50 rotate-90 md:rotate-0" />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">The AI Fix</span>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{item.fix}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Wrapper>

      {/* Services Section */}
      <Wrapper id="solutions" className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionBadge title="Our Solutions" className="mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Solutions for Every Stage
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you are an established enterprise or a fast-moving startup, we have the right tools for you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Enterprise / Internal Tools Group */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">1</span>
                For Established Businesses
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.filter((s) => s.category === 'enterprise').map((service) => (
                  <div
                    key={service.title}
                    className="group relative p-6 rounded-xl border border-border bg-card hover:bg-primary/5 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Founders / Startups Group */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">2</span>
                For Founders & Startups
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.filter((s) => s.category === 'startup').map((service) => (
                  <div
                    key={service.title}
                    className="group relative p-6 rounded-xl border border-border bg-card hover:bg-primary/5 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Reviews Section */}
      <Wrapper id="reviews" className="flex flex-col items-center justify-center py-24 relative">
        <Container>
          <div className="max-w-md mx-auto text-center mb-12">
            <SectionBadge title="Client Reviews" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground mt-6">
              See how we&apos;ve helped businesses transform with AI
            </p>
          </div>
        </Container>
        <Container>
          <div className="w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              <Marquee pauseOnHover className="[--duration:20s] select-none">
                {firstRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.15]",
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <User className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                  </figure>
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                {secondRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.15]",
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <User className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">{review.username}</p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                  </figure>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Contact/CTA Section */}
      <Wrapper id="contact" className="pt-12 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <SectionBadge title="Get In Touch" className="mb-6" />
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground">
                Let&apos;s discuss how we can help you leverage AI to achieve your business goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form Placeholder */}
              <div className="p-8 rounded-xl border border-border bg-card flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Schedule a Consultation</h3>
                <p className="text-muted-foreground mb-8">
                  Book a time directly on our calendar to discuss your AI needs.
                </p>
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="https://calendar.app.google/SQuZ5t9RAyUtYhq7A" target="_blank" rel="noopener noreferrer">
                    Book a Meeting
                  </a>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="p-8 rounded-xl border border-border bg-card">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">contact@arboraistudio.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+880 131 666 1100</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20">
                  <h4 className="text-xl font-semibold mb-3">Why Choose Us?</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Expert team with years of AI experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Tailored solutions for your specific needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Ongoing support and maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Proven track record of success</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      <Footer />
    </div>
  )
}
