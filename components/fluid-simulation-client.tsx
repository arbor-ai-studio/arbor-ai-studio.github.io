"use client";

import dynamic from "next/dynamic";

const FluidSimulation = dynamic(
  () => import("@/components/ui/fluid-simulation").then((mod) => mod.FluidSimulation),
  { ssr: false }
);

export function FluidSimulationClient() {
  return <FluidSimulation />;
}
