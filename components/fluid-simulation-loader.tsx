"use client";

import dynamic from "next/dynamic";

const FluidSimulationClient = dynamic(
  () => import("./fluid-simulation-client").then((mod) => mod.FluidSimulationClient),
  { ssr: false }
);

export function FluidSimulationLoader() {
  return <FluidSimulationClient />;
}
