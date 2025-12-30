"use client"

import { useState } from "react"
import { Container } from "@/components/ui/container"
import { Wrapper } from "@/components/ui/wrapper"
import { SectionBadge } from "@/components/ui/section-badge"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { services, aiTechnologies, BOOKING_URL } from "@/lib/constants"
import { serviceExamples } from "@/lib/service-examples"
import { ServiceModal } from "@/components/service-modal"
import { ArrowRight, Mail, Phone, MapPin, Calendar, Globe, Clock, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import Marquee from "@/components/ui/marquee" // Keep Marquee for technologies
import { MagicCard } from "@/components/ui/magic-card"
import { FadeIn } from "@/components/ui/fade-in"
import Magnetic from "@/components/ui/magnetic"
import { TextReveal } from "@/components/ui/text-reveal"
import Image from "next/image"

export default function Home() {
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | null>(null)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleServiceClick = (title: string) => {
    if (serviceExamples[title]) {
      setSelectedServiceTitle(title)
    }
  }

  const selectedService = selectedServiceTitle ? serviceExamples[selectedServiceTitle] : null
  const SelectedServiceIcon = selectedServiceTitle ? services.find(s => s.title === selectedServiceTitle)?.icon : undefined

  return (
    <div className="flex flex-col w-full relative">

      {/* Hero Section */}
      <Wrapper>
        <Container className="py-24 lg:py-32 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionBadge title="AI Solutions Provider" className="mb-8" />
            </motion.div>

            <TextReveal
              text="Turn Agentic AI Potential into Real Business Impact"
              className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 mb-6 leading-tight"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              <p className="mb-4">
                From <span className="text-foreground font-semibold border-b border-primary/20">internal tools</span> that cut costs,
                <br className="hidden sm:block" />
                to launching your own <span className="text-foreground font-semibold border-b border-primary/20">SaaS product</span>.
              </p>
              
              <div className="flex items-center justify-center gap-3 text-sm font-medium tracking-wide opacity-80">
                 <span className="h-px w-6 md:w-12 bg-gradient-to-r from-transparent to-primary/50"></span>
                 <span className="text-foreground/80">We bridge Technology & Value</span>
                 <span className="h-px w-6 md:w-12 bg-gradient-to-l from-transparent to-primary/50"></span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-24 items-center justify-center"
            >
              <Magnetic>
                <Button size="lg" asChild className="gap-2 h-14 px-8 rounded-full text-base">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book a Meeting
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </Magnetic>
              
              <Magnetic>
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base backdrop-blur-sm bg-background/50" onClick={() => scrollToSection("#solutions")}>
                  Explore Solutions
                </Button>
              </Magnetic>
            </motion.div>
            
            {/* AI Technologies Marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-0 w-full"
            >
              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
                <Marquee pauseOnHover className="[--duration:40s] select-none">
                  {aiTechnologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="mx-6 flex items-center justify-center p-4 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card transition-colors"
                      title={tech.name}
                    >
                      <Image
                        src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
                        alt={tech.name}
                        className="w-10 h-10 dark:invert dark:brightness-0 dark:contrast-200"
                        width={40}
                        height={40}
                        unoptimized
                      />
                    </div>
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Wrapper>

      {/* About Section */}
      <FadeIn>
        <Wrapper id="about" className="py-24 bg-muted/30">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <SectionBadge title="About Us" className="mb-6" />
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-snug">
                We Build the AI Tech So You Can Build the Business
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Arbor AI Studio, we don&apos;t just deliver code; we deliver measurable business outcomes. Whether you need to automate internal costs or launch a revenue-generating product, our team aligns technology with your bottom line.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="flex flex-col items-center">
                  <Globe className="w-8 h-8 text-primary mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">Global</div>
                  <p className="text-muted-foreground">Remote-First Operation</p>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">System Reliability</p>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Code Ownership</p>
                </div>
              </div>
            </div>
          </Container>
        </Wrapper>
      </FadeIn>

      {/* Use Cases Section */}
      <Wrapper id="use-cases" className="py-24 bg-muted/30">
        <Container>
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <SectionBadge title="Real World Impact" className="mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-snug">
              Beyond Chatbots: Intelligent Digital Workers for Your Business
            </h2>
            <p className="text-lg text-muted-foreground">
              We build autonomous agents that execute complex workflows, not just answer questions.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-6 lg:gap-8">
            {[
              {
                problem: "Support team overwhelmed?",
                fix: "24/7 Intelligent Support Agents that resolve 80% of queries instantly, letting your team focus on complex issues."
              },
              {
                problem: "Great idea but no engineering team?",
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
              <FadeIn key={i} delay={i * 0.1} className={`flex w-full ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="relative group w-full md:w-[95%] lg:w-[97%] p-8 rounded-2xl border border-border bg-card hover:bg-muted/30 transition-all duration-300 shadow-sm hover:shadow-md"
                >
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
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Wrapper>

      {/* Services Section */}
      <Wrapper id="solutions" className="py-24">
        <Container>
            <FadeIn className="max-w-3xl mx-auto text-center mb-16">
              <SectionBadge title="Our Solutions" className="mb-6" />
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-snug">
                Solutions for Every Stage
              </h2>
              <p className="text-lg text-muted-foreground">
                Whether you are an established enterprise or a fast-moving startup, we have the right tools for you.
              </p>
            </FadeIn>

          <div className="grid grid-cols-1 gap-12">
            <div>
              <FadeIn direction="right">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">1</span>
                  For Established Businesses
                </h3>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.filter((s) => s.category === 'enterprise').map((service, i) => (
                  <FadeIn key={service.title} delay={i * 0.1}>
                    <MagicCard
                      onClick={() => handleServiceClick(service.title)}
                      className="p-6 cursor-pointer"
                    >
                      <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 group">
                        {service.title}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </MagicCard>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div>
              <FadeIn direction="right">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">2</span>
                  For Founders & Startups
                </h3>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.filter((s) => s.category === 'startup').map((service, i) => (
                  <FadeIn key={service.title} delay={i * 0.1}>
                    <MagicCard
                      onClick={() => handleServiceClick(service.title)}
                      className="p-6 cursor-pointer"
                    >
                      <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 group">
                        {service.title}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </MagicCard>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Infinite Potential Section */}
      <Wrapper className="py-32 md:py-48 min-h-[60vh] flex items-center justify-center overflow-hidden border-y border-border/50">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <Container>
          <FadeIn className="flex flex-col items-center justify-center text-center">
            <SectionBadge title="Limitless Possibilities" className="mb-6" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              And much, much more.
            </h2>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mb-10 leading-relaxed">
              The possibilities are endless. If you have data, we can build an agent to understand it. No challenge is too specific for our team.
            </p>
            <Button size="lg" asChild className="gap-2">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a Meeting
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </FadeIn>
        </Container>
      </Wrapper>

      {/* Process Section */}
      <Wrapper id="process" className="py-24 bg-muted/30">
        <Container>
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <SectionBadge title="Our Process" className="mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-snug">
              From Concept to Launch in 4 Steps
            </h2>
            <p className="text-lg text-muted-foreground">
              We don&apos;t just guess. We follow a proven framework to ensure your AI solution delivers real value from day one.
            </p>
          </FadeIn>

          <div className="relative">
             {/* Connecting Line (Mobile: hidden, Desktop: visible) */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />
             
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We audit your current workflows to identify high-ROI opportunities where AI can save time or money."
              },
              {
                step: "02",
                title: "Strategy",
                desc: "We design the agent architecture, selecting the right models (LLMs) and tools for your specific needs."
              },
              {
                step: "03",
                title: "Build",
                desc: "Our engineers develop your custom solution, connecting it securely to your existing data and software."
              },
              {
                step: "04",
                title: "Launch",
                desc: "We deploy to production, train your team, and set up 24/7 monitoring to ensure everything runs smoothly."
              }
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <MagicCard className="p-6 flex flex-col items-start h-full">
                  <div className="text-5xl font-bold text-primary/50 mb-4 transition-colors duration-300 group-hover:text-primary">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </MagicCard>
              </FadeIn>
            ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Contact Section */}
      <Wrapper id="contact" className="pt-12 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-12">
              <SectionBadge title="Get In Touch" className="mb-6" />
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-snug">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground">
                Let&apos;s discuss how we can help you leverage AI to achieve your business goals
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn direction="right" className="h-full">
                <MagicCard className="p-8 flex flex-col items-center justify-center text-center h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Book a Meeting</h3>
                  <p className="text-muted-foreground mb-8">
                    Schedule a strategy session directly on our calendar.
                  </p>
                  <Button size="lg" asChild className="gap-2">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      Book a Meeting
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </MagicCard>
              </FadeIn>

              <div className="space-y-6">
                <FadeIn direction="left" delay={0.2}>
                  <MagicCard className="p-8">
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
                          <p className="text-muted-foreground">Dhaka, Bangladesh (Operating Globally)</p>
                        </div>
                      </div>
                    </div>
                  </MagicCard>
                </FadeIn>

                <FadeIn direction="left" delay={0.4}>
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
                </FadeIn>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      <Footer />

      <ServiceModal
        isOpen={!!selectedServiceTitle}
        onOpenChange={(open) => !open && setSelectedServiceTitle(null)}
        service={selectedService}
        icon={SelectedServiceIcon}
      />
    </div>
  )
}
