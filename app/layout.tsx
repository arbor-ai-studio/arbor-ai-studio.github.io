import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BookingWidget } from "@/components/booking-widget";
import { FluidSimulationLoader } from "@/components/fluid-simulation-loader";

import { Navbar } from "@/components/navbar";
import { SmoothScroll } from "@/components/smooth-scroll";
import { JsonLd } from "@/components/json-ld";
import { Analytics } from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arboraistudio.com"),
  title: "Arbor AI Studio | Agentic AI Solutions & SaaS Development",
  description: "Transform your business with autonomous AI agents. Arbor AI Studio specializes in custom Agentic AI solutions, AI-powered business automation, and high-quality SaaS development.",
  alternates: {
    canonical: "./",
  },
  icons: {
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    title: "Arbor AI Studio | Agentic AI Solutions & SaaS Development",
    description: "Transform your business with autonomous AI agents. Arbor AI Studio specializes in custom Agentic AI solutions, AI-powered business automation, and high-quality SaaS development.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbor AI Studio | Agentic AI Solutions & SaaS Development",
    description: "Transform your business with autonomous AI agents. Arbor AI Studio specializes in custom Agentic AI solutions, AI-powered business automation, and high-quality SaaS development.",
    images: ["/logo.png"],
    creator: "@arbor_ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <JsonLd />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6L2GL9C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <FluidSimulationLoader />
            <BookingWidget />
            <Analytics />
            <Navbar />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
