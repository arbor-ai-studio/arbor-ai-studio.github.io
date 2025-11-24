"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
export default function CareerPage() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const dayRows = [
    [0, 1, 2, 3],
    [4, 5, 6],
  ]

  return (
    <div className="flex flex-col min-h-screen w-full bg-neutral-50 dark:bg-neutral-950">
      <Navbar />

      <div className="flex-grow flex items-center justify-center p-4 md:p-8">
        {/* The Poster Card - Designed to be screenshotted */}
        <div className="relative w-full max-w-[600px] aspect-[3/4] bg-white dark:bg-neutral-900 rounded-none overflow-hidden border border-black/5 dark:border-white/10 flex flex-col">
          
          {/* Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-[#86a447]/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] bg-[#31593a]/20 rounded-full blur-[100px]" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col p-8 md:p-12 justify-between">
            
            {/* Header */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#31593a]/5 dark:bg-[#86a447]/10 border border-[#31593a]/10 dark:border-[#86a447]/20 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#86a447] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#31593a] dark:bg-[#86a447]"></span>
                  </span>
                  <span className="text-xs font-bold tracking-widest text-[#31593a] dark:text-[#86a447] uppercase">Hiring Now</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img 
                    src="/logo.png" 
                    alt="Arbor AI Studio" 
                    className="h-10 w-auto object-contain dark:brightness-0 dark:invert"
                  />
                  <div className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 leading-tight tracking-wider text-center">
                    ARBOR AI<br/>STUDIO
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-black text-neutral-900 dark:text-white leading-[0.9] tracking-tight">
                  FULL STACK<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31593a] to-[#86a447]">
                    AI ENGINEER
                  </span><br />
                  INTERN
                </h1>
                <div className="space-y-2 pt-1">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Join a studio that ships fast, learns fast, and treats AI as a force multiplier across the stack.
                  </p>
                  <ul className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed list-disc pl-5 space-y-1">
                    <li>Pair every build with top-tier AI tooling to sketch, prototype, and iterate.</li>
                    <li>Own end-to-end features with mentorship from senior engineers and product thinkers.</li>
                    <li>Work on real releases that ship to users—not just internal demos.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Middle Section: Details */}
            <div className="grid gap-4 md:grid-cols-2">
              {/* Schedule */}
              <div className="flex flex-col gap-3 h-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Work Schedule</h3>
                  <div className="flex gap-3 text-xs font-medium">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
                      <span className="text-neutral-400 dark:text-neutral-500">Off</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#31593a] dark:bg-[#86a447]"></div>
                      <span className="text-[#31593a] dark:text-[#86a447]">Work</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {dayRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex items-center justify-between gap-1.5">
                      {row.map((index) => {
                        const day = days[index];
                        const isActive = index >= 0 && index <= 3;
                        return (
                          <div key={index} className="flex flex-col items-center">
                            <div 
                              className={`
                                w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all
                                ${isActive 
                                  ? 'bg-[#31593a] dark:bg-[#86a447] text-white shadow-lg shadow-[#31593a]/20 dark:shadow-[#86a447]/20 ring-2 ring-[#86a447]/20 dark:ring-[#31593a]/20 scale-105' 
                                  : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500'}
                              `}
                            >
                              {day}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-col gap-3 h-full">
                <h3 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Ship With Elite AI Partners</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  Build alongside the strongest AI tooling—fewer roadblocks, faster launches, and cleaner code.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {/* Claude Code */}
                  <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-black/5 dark:border-white/5 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                    <img 
                      src="/claude-code.png" 
                      alt="Claude Code" 
                      className="w-7 h-7 object-contain"
                    />
                    <span className="text-xs font-bold text-neutral-600 dark:text-neutral-400">Claude Code</span>
                  </div>

                  {/* ChatGPT */}
                  <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-black/5 dark:border-white/5 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                    <img 
                      src="https://cdn.simpleicons.org/openai/000000"
                      alt="Codex"
                      className="w-7 h-7 dark:invert"
                    />
                    <span className="text-xs font-bold text-neutral-600 dark:text-neutral-400">Codex</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="flex items-baseline justify-between pt-2">
              <div className="flex flex-col gap-1">
                <p className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Salary Range</p>
                <p className="text-lg font-bold text-[#31593a] dark:text-[#86a447]">10k - 15k</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Apply at</p>
                <p className="text-sm font-bold text-neutral-900 dark:text-white">arboraistudio.com/career</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
