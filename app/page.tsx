import { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Arbor AI Studio | Agentic AI Solutions & SaaS Development",
  description: "Transform your business with autonomous AI agents. Arbor AI Studio specializes in custom Agentic AI solutions, business automation, and high-quality SaaS.",
  openGraph: {
    title: "Arbor AI Studio | Agentic AI Solutions & SaaS Development",
    description: "Transform your business with autonomous AI agents. Arbor AI Studio specializes in custom Agentic AI solutions, business automation, and high-quality SaaS.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbor AI Studio | Agentic AI Solutions & SaaS Development",
    description: "Transform your business with autonomous AI agents. Arbor AI Studio specializes in custom Agentic AI solutions, business automation, and high-quality SaaS.",
    images: ["/logo.png"],
  },
};

export default function Home() {
  return <HomePage />;
}