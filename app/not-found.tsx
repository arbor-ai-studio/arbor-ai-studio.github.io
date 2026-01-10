import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Arbor AI Studio",
  description: "The page you are looking for does not exist. Return to Arbor AI Studio home to explore our Agentic AI solutions.",
};

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-8">
        We couldn&apos;t find the page you were looking for.
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </Container>
  );
}
