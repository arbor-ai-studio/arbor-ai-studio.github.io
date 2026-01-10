import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Case Studies & Success Stories | Arbor AI Studio",
  description: "Explore our portfolio of successful Agentic AI implementations. See how we've helped businesses automate workflows, predict trends, and launch successful SaaS products.",
  openGraph: {
    title: "AI Case Studies & Success Stories | Arbor AI Studio",
    description: "Explore our portfolio of successful Agentic AI implementations. See how we've helped businesses automate workflows, predict trends, and launch successful SaaS products.",
  }
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
