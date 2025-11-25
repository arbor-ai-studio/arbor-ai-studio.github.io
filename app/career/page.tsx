"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface JobPost {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  applyLink: string;
  description: {
    role: string;
    company: string;
    location: string;
    requirements: string[];
    responsibilities: string[];
    schedule: {
      time: string;
      days: string;
      probation: string;
    };
    benefits: string[];
    salary: string;
  };
}

const jobs: JobPost[] = [
  {
    id: "1",
    title: "Full Stack AI Engineer Intern",
    company: "Arbor AI Studio",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "10k - 15k Taka",
    applyLink: "https://app.dover.com/apply/22029207-c38c-4586-99f2-91c12a57475d/966e2a5a-05e2-4f89-91ec-1d6d80be2374/?rs=15190316",
    description: {
      role: "Full Stack AI Engineer Intern",
      company: "Arbor AI Studio",
      location: "Dhanmondi Garden City, Dhaka",
      requirements: [
        "Add cover letter and your resume in a single pdf while uploading.",
        "Please only apply if you have at least some basic working knowledge of the tasks listed below.",
        "We are looking for someone who already understands the basics and can start building with us.",
      ],
      responsibilities: [
        "Build and manage full stack web applications.",
        "Connect AI features to apps using LLM APIs like Claude or Gemini.",
        "Create smart AI agents using frameworks like CrewAI or LangChain.",
        "Use MCP (Model Context Protocol) to connect AI models to real data.",
        "Build custom MCP tools for our team to use.",
        "Work closely with our active team to release new features quickly.",
      ],
      schedule: {
        time: "8:00 AM – 2:00 PM",
        days: "4 Days a Week (Sunday, Monday, Tuesday, Wednesday)",
        probation: "3 Month Probation Period",
      },
      benefits: [
        "World Class Tools: We provide paid subscriptions to the best AI coding tools (like Claude Code and ChatGPT Codex) starting from day one to help you work.",
      ],
      salary: "10k - 15k Taka",
    },
  },
];

export default function CareerPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (id: string) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

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
            <span className="text-sm text-muted-foreground">{jobs.length} active role(s)</span>
          </div>

          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-200 hover:border-primary/50"
            >
              <div
                onClick={() => toggleJob(job.id)}
                className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="font-medium text-primary">
                      {job.salary}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button asChild className="hidden sm:flex">
                    <Link href={job.applyLink} target="_blank" rel="noopener noreferrer">
                      Apply Now
                    </Link>
                  </Button>
                  <Button variant="outline" className="hidden sm:flex">
                    {expandedJob === job.id ? "View Less" : "View Details"}
                  </Button>
                  {expandedJob === job.id ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </div>

              {expandedJob === job.id && (
                <div className="px-6 pb-6 border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="pt-6 space-y-8">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Job Role</h4>
                        <p className="text-muted-foreground">{job.description.role}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Location</h4>
                        <p className="text-muted-foreground">{job.description.location}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Important Requirement</h4>
                      <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {job.description.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">What You Will Do</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {job.description.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Work Schedule</h4>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="bg-muted/30 p-3 rounded-lg text-center">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Time</div>
                          <div className="font-medium">{job.description.schedule.time}</div>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg text-center">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Days</div>
                          <div className="font-medium">{job.description.schedule.days}</div>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg text-center">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Probation</div>
                          <div className="font-medium">{job.description.schedule.probation}</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {job.description.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/50">
                      <div>
                        <span className="text-muted-foreground">Salary: </span>
                        <span className="font-semibold text-foreground">{job.description.salary}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
