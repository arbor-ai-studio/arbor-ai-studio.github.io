import { Container } from "@/components/ui/container"
import { Wrapper } from "@/components/ui/wrapper"
import { SectionBadge } from "@/components/ui/section-badge"
import { CareerList } from "@/components/career-list"
import { Zap, Globe, Users, Mail, Laptop, Cpu, TrendingUp } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { MagicCard } from "@/components/ui/magic-card"
import { NeuralNetwork3D } from "@/components/ui/neural-network-3d"

interface ApiJob {
  id: string;
  title: string;
}

const JOBS_ENDPOINT = "https://cover-gen-user-data.vercel.app/api/jobs";
const APPLY_BASE = "https://app.dover.com/apply/22029207-c38c-4586-99f2-91c12a57475d";
const LOCATION = "Dhaka, Bangladesh";

async function getJobs(): Promise<{ jobs: ApiJob[]; error: string | null }> {
  try {
    const response = await fetch(JOBS_ENDPOINT, { next: { revalidate: 3600 } });
    if (!response.ok) {
      return { jobs: [], error: "Unable to load open roles right now. Please try again shortly." };
    }
    const data = await response.json();
    return { jobs: Array.isArray(data?.results) ? data.results : [], error: null };
  } catch {
    return { jobs: [], error: "Unable to load open roles right now. Please try again shortly." };
  }
}

export default async function CareerPage() {
  const { jobs, error } = await getJobs();
  const hasJobs = jobs.length > 0;

  return (
    <div className="flex flex-col w-full min-h-screen relative">
      <NeuralNetwork3D />
      
      {/* Hero Section */}
      <Wrapper className="py-24 lg:py-32 z-10">
        <Container>
          <div className="flex flex-col items-center justify-center text-center">
            <FadeIn>
              <SectionBadge title="Careers" className="mb-8" />
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-snug">
                Join Arbor AI Studio
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                We&apos;re building the next generation of AI-powered business tools. 
                Help us bridge the gap between technology and business impact.
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
            <FadeIn className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
              <h2 className="text-2xl md:text-3xl font-bold">Open Positions</h2>
              <span className="text-sm font-medium text-muted-foreground bg-background border border-border px-3 py-1 rounded-full">
                {jobs.length} Active Roles
              </span>
            </FadeIn>

            {error && (
              <FadeIn>
                <div className="rounded-xl border border-destructive/50 bg-destructive/5 p-6 text-center">
                  <p className="text-destructive mb-2 font-medium">Could not load jobs</p>
                  <p className="text-muted-foreground text-sm">{error}</p>
                </div>
              </FadeIn>
            )}

            {!error && !hasJobs && (
              <FadeIn>
                <MagicCard className="py-20 flex flex-col items-center justify-center text-center px-4">
                  <p className="text-lg font-medium mb-2">No open positions right now</p>
                  <p className="text-muted-foreground mb-8">But we&apos;re always looking for exceptional talent.</p>
                  <a 
                    href="mailto:contact@arboraistudio.com" 
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    Send us your CV
                  </a>
                </MagicCard>
              </FadeIn>
            )}

            {hasJobs && (
              <FadeIn>
                <CareerList 
                  jobs={jobs} 
                  applyBase={APPLY_BASE} 
                  location={LOCATION} 
                />
              </FadeIn>
            )}
          </div>
        </Container>
      </Wrapper>
    </div>
  );
}