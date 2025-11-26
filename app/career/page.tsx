import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

interface ApiJob {
  id: string;
  title: string;
}

const JOBS_ENDPOINT = "https://cover-gen-user-data.vercel.app/api/jobs";
const APPLY_BASE = "https://app.dover.com/apply/22029207-c38c-4586-99f2-91c12a57475d";
const LOCATION = "Dhanmondi Garden City, Dhaka";

async function getJobs(): Promise<{ jobs: ApiJob[]; error: string | null }> {
  try {
    const response = await fetch(JOBS_ENDPOINT);
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
  const rolesLabel = `${jobs.length} active role${jobs.length === 1 ? "" : "s"}`;

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground">
            Build the future of AI with us at Arbor AI Studio.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Open Positions</h2>
            <span className="text-sm text-muted-foreground">{rolesLabel}</span>
          </div>

          {error && (
            <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
              {error}
            </div>
          )}

          {!error && jobs.length === 0 && (
            <div className="rounded-lg border border-border bg-card p-6 text-muted-foreground">
              No open roles right now. Check back soon!
            </div>
          )}

          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors hover:border-primary/60"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {LOCATION}
                </div>
              </div>
              <Button asChild>
                <Link
                  href={`${APPLY_BASE}/${job.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
