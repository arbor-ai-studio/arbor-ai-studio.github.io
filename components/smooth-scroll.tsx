"use client";

import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Lerp 0.07 gives a heavy, premium feel. Duration 2.0 softens the stop.
  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.5, smoothWheel: true }}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {children as any}
    </ReactLenis>
  );
}
