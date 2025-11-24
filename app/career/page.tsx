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
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h1 className="text-5xl md:text-6xl font-black text-neutral-900 dark:text-white leading-[0.9] tracking-tight">
                    FULL STACK<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31593a] to-[#86a447]">
                      AI ENGINEER
                    </span><br />
                    INTERN
                  </h1>
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

              <div className="space-y-3 pt-1 rounded-2xl border border-black/5 dark:border-white/5 bg-neutral-50/70 dark:bg-neutral-900/50 p-4 md:p-5 shadow-sm">
                <h2 className="text-xs font-bold tracking-[0.12em] text-neutral-500 dark:text-neutral-400 uppercase">
                  What You Will Do
                </h2>
                  <div className="grid gap-3 md:grid-cols-2">
                    {[
                      "Build and maintain full-stack web applications.",
                      "Integrate AI features using APIs like OpenAI and Anthropic.",
                      "Create smart agents with frameworks such as CrewAI or LangChain.",
                      "Use MCP (Model Context Protocol) to connect AI models to real data.",
                      "Collaborate with a very active team to ship features fast.",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="mt-0.5 h-5 w-[2px] rounded-full bg-gradient-to-b from-[#31593a] to-[#86a447]" />
                        <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            {/* Middle Section: Details */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
              {/* Schedule */}
              <div className="flex flex-col gap-3 h-full">
                <h3 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Work Schedule</h3>
                
                <div className="space-y-2">
                  {dayRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex items-center gap-2">
                      {row.map((index) => {
                        const day = days[index];
                        const isActive = index >= 0 && index <= 3;
                        return (
                          <div key={index} className="flex flex-col items-center">
                            <div 
                              className={`
                                w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all
                                ${isActive 
                                  ? 'bg-[#31593a] dark:bg-[#86a447] text-white shadow-md shadow-[#31593a]/15 dark:shadow-[#86a447]/20 ring-1 ring-[#86a447]/30 dark:ring-[#31593a]/30' 
                                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 border border-black/5 dark:border-white/5'}
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

                <div className="flex gap-4 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#31593a] dark:bg-[#86a447]"></div>
                    <span className="text-[#31593a] dark:text-[#86a447]">Work</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
                    <span className="text-neutral-400 dark:text-neutral-500">Off</span>
                  </div>
                </div>
              </div>

              <div
                className="hidden md:block h-full w-px bg-[#31593a]/30 dark:bg-[#86a447]/40 self-stretch"
                aria-hidden="true"
              />

              {/* Stack */}
              <div className="flex flex-col gap-3 h-full">
                <h3 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">Ship With Elite AI Partners</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  Build alongside the strongest AI tooling—fewer roadblocks, faster launches, and cleaner code.
                </p>
                <div className="flex gap-3">
                  {/* Claude Code */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-50 dark:bg-neutral-800/50 border border-black/5 dark:border-white/5 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                    <img 
                      src="/claude-code.png" 
                      alt="Claude Code" 
                      className="w-7 h-7 object-contain"
                    />
                    <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-200">Claude Code</span>
                  </div>

                  {/* ChatGPT */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-50 dark:bg-neutral-800/50 border border-black/5 dark:border-white/5 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                    <img 
                      src="https://cdn.simpleicons.org/openai/000000"
                      alt="ChatGPT Codex"
                      className="w-7 h-7 dark:invert"
                    />
                    <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-200">ChatGPT Codex</span>
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
