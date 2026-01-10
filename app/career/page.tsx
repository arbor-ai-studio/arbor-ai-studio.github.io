import { Container } from "@/components/ui/container"
import { Wrapper } from "@/components/ui/wrapper"
import { SectionBadge } from "@/components/ui/section-badge"
import { CareerList } from "@/components/career-list"
import { Zap, Globe, Users, Laptop, Cpu, TrendingUp } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { MagicCard } from "@/components/ui/magic-card"

const JOBS_ENDPOINT = "https://corsproxy.io/?https://cover-gen-user-data.vercel.app/api/jobs";
const APPLY_BASE = "https://app.dover.com/apply/22029207-c38c-4586-99f2-91c12a57475d";
const LOCATION = "Dhaka, Bangladesh";

export default function CareerPage() {
  return (
    <div className="flex flex-col w-full min-h-screen relative">
      
      {/* Hero Section */}
      <Wrapper className="py-24 lg:py-32 z-10">
        <Container>
          <div className="flex flex-col items-center justify-center text-center">
            <FadeIn>
              <SectionBadge title="Careers" className="mb-8" />
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-snug">
                AI Careers & Jobs <br className="hidden md:block" />
                <span className="text-muted-foreground font-medium">Join Arbor AI Studio</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                We&apos;re building the next generation of Agentic AI. We&apos;re looking for exceptional talent to join our team and bridge the gap between technology and business impact.
              </p>
            </FadeIn>

            {/* Why Join Us Grid - 6 Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-5xl">
              {[
                { icon: Globe, title: "Flexible & Remote", desc: "Work from anywhere with flexible hours to accommodate your schedule." },
                { icon: TrendingUp, title: "Technical Mastery", desc: "Master modern tech stacks valued by top-tier companies. Learn from leading tech talents from home and abroad." },
                { icon: Laptop, title: "World Class Tools", desc: "Paid access to Claude, Gemini Ultra, AI video editing, and premium marketing tools from day one." },
                { icon: Cpu, title: "AI-First Company", desc: "We are optimized for speed. AI is in our DNA, not just a buzzword." },
                { icon: Zap, title: "High Impact", desc: "Don&apos;t be a cog. Build core features that real businesses rely on." },
                { icon: Users, title: "Ownership", desc: "Autonomy to lead your projects from concept to deployment." }
              ].map((feature, i) => (
                <FadeIn key={feature.title} delay={i * 0.1}>
                  <MagicCard className="p-8 flex flex-col items-center text-center h-full">
                    <feature.icon className="w-8 h-8 text-primary mb-4" />
                    <div className="text-xl font-bold text-foreground mb-2">{feature.title}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                  </MagicCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Jobs Section */}
      <Wrapper id="open-roles" className="py-24 bg-muted/30 border-t border-border/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <CareerList 
              jobsEndpoint={JOBS_ENDPOINT} 
              applyBase={APPLY_BASE} 
              location={LOCATION} 
            />
          </div>
        </Container>
      </Wrapper>
    </div>
  );
}
