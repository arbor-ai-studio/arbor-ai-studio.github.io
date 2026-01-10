"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FluidSimulationClient = dynamic(
  () => import("./fluid-simulation-client").then((mod) => mod.FluidSimulationClient),
  { ssr: false }
);

export function FluidSimulationLoader() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only load on screens larger than 768px (Desktop/Tablet)
    const checkScreen = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isDesktop) return null;

  return <FluidSimulationClient />;
}
