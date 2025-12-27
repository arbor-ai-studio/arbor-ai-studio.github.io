import { Container } from "@/components/ui/container"
import { Wrapper } from "@/components/ui/wrapper"
import { SectionBadge } from "@/components/ui/section-badge"
import { CareerList } from "@/components/career-list"
import { Zap, Globe, Users, Mail, Laptop, Sparkles, Cpu, TrendingUp } from "lucide-react"

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
  } catch (err) {
    return { jobs: [], error: "Unable to load open roles right now. Please try again shortly." };
  }
}

export default async function CareerPage() {
  const { jobs, error } = await getJobs();
  const hasJobs = jobs.length > 0;

  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* Hero Section */}
      <Wrapper className="py-24 lg:py-32">
        <Container>
          <div className="flex flex-col items-center justify-center text-center">
            <SectionBadge title="Careers" className="mb-8" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Join Arbor AI Studio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              We&apos;re building the next generation of AI-powered business tools. 
              Help us bridge the gap between technology and business impact.
            </p>

            {/* Why Join Us Grid - 6 Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 mt-20 w-full max-w-5xl">
              <div className="flex flex-col items-center">
                <Globe className="w-8 h-8 text-primary mb-4" />
                <div className="text-xl font-bold text-foreground mb-2">Flexible & Remote</div>
                <p className="text-muted-foreground text-sm max-w-[250px]">Work from anywhere with flexible hours to accommodate your schedule.</p>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <div className="text-xl font-bold text-foreground mb-2">Technical Mastery</div>
                <p className="text-muted-foreground text-sm max-w-[250px]">Master modern tech stacks valued by top-tier companies. Learn from leading tech talents from home and abroad.</p>
              </div>
              <div className="flex flex-col items-center">
                <Laptop className="w-8 h-8 text-primary mb-4" />
                <div className="text-xl font-bold text-foreground mb-2">World Class Tools</div>
                <p className="text-muted-foreground text-sm max-w-[250px]">Paid access to Claude, Gemini Ultra, AI video editing, and premium marketing tools from day one.</p>
              </div>
              <div className="flex flex-col items-center">
                <Cpu className="w-8 h-8 text-primary mb-4" />
                <div className="text-xl font-bold text-foreground mb-2">AI-First Company</div>
                <p className="text-muted-foreground text-sm max-w-[250px]">We are optimized for speed. AI is in our DNA, not just a buzzword.</p>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <div className="text-xl font-bold text-foreground mb-2">High Impact</div>
                <p className="text-muted-foreground text-sm max-w-[250px]">Don't be a cog. Build core features that real businesses rely on.</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-primary mb-4" />
                <div className="text-xl font-bold text-foreground mb-2">Ownership</div>
                <p className="text-muted-foreground text-sm max-w-[250px]">Autonomy to lead your projects from concept to deployment.</p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Jobs Section */}
      <Wrapper id="open-roles" className="py-24 bg-muted/30 border-t border-border/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
              <h2 className="text-2xl md:text-3xl font-bold">Open Positions</h2>
              <span className="text-sm font-medium text-muted-foreground bg-background border border-border px-3 py-1 rounded-full">
                {jobs.length} Active Roles
              </span>
            </div>

            {error && (
              <div className="rounded-xl border border-destructive/50 bg-destructive/5 p-6 text-center">
                <p className="text-destructive mb-2 font-medium">Could not load jobs</p>
                <p className="text-muted-foreground text-sm">{error}</p>
              </div>
            )}

            {!error && !hasJobs && (
              <div className="py-20 bg-background border border-dashed border-border rounded-2xl flex flex-col items-center justify-center text-center px-4">
                <p className="text-lg font-medium mb-2">No open positions right now</p>
                <p className="text-muted-foreground mb-8">But we&apos;re always looking for exceptional talent.</p>
                <a 
                  href="mailto:contact@arboraistudio.com" 
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  <Mail className="w-4 h-4" />
                  Send us your CV
                </a>
              </div>
            )}

            {hasJobs && (
              <CareerList 
                jobs={jobs} 
                applyBase={APPLY_BASE} 
                location={LOCATION} 
              />
            )}
          </div>
        </Container>
      </Wrapper>
    </div>
  );
}