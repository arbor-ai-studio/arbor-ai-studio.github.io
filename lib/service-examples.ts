export interface ServiceExampleItem {
  title: string;
  description: string;
}

export interface ServiceDetail {
  title: string; // Matches the title in constants.ts
  coreValue: string;
  examples: ServiceExampleItem[];
}

export const serviceExamples: Record<string, ServiceDetail> = {
  "Intelligent Support Agents": {
    title: "Intelligent Support Agents",
    coreValue: "24/7 instant resolution, not just deflection.",
    examples: [
      {
        title: "The Instant Refund Agent",
        description: "Connects to Shopify. When a customer asks 'Where is my order?', it checks real-time tracking. If they need a refund, it processes it instantly within your policy limits."
      },
      {
        title: "The HR Policy Bot",
        description: "Instead of emailing HR, employees ask 'Is dental covered?'. The agent reads your 50-page handbook and gives the exact answer and form link instantly."
      },
      {
        title: "Tech Support Copilot",
        description: "It listens to your support calls in real-time. When a customer mentions 'Error 505', it instantly pops up the correct solution on your agent's screen."
      }
    ]
  },
  "SaaS Product Engineering": {
    title: "SaaS Product Engineering",
    coreValue: "From napkin sketch to production-ready scalable product.",
    examples: [
      {
        title: "The AI Compliance Officer",
        description: "A RegTech app that scans global regulations (GDPR, HIPAA) 24/7 and alerts you instantly if your new company policy violates a rule."
      },
      {
        title: "The Instant Interior Designer",
        description: "Users upload a photo of their living room, click 'Modern Style', and get a photorealistic 3D redesign in seconds."
      },
      {
        title: "The Hands-Free CRM",
        description: "Field sales reps just speak: 'Met with John, he wants 50 units.' The app listens, understands, and updates Salesforce fields automatically."
      }
    ]
  },
  "Business Process Automation": {
    title: "Business Process Automation",
    coreValue: "Your 24/7 digital workforce for the boring stuff.",
    examples: [
      {
        title: "The Invoice Clerk",
        description: "It watches your inbox for bills, reads the PDFs (even scanned ones), and enters the details into your accounting software. You just click 'Pay'."
      },
      {
        title: "The Instant Sales Responder",
        description: "When a customer fills your contact form at 2 AM, this agent researches them on LinkedIn, drafts a personalized reply, and alerts your sales team only if it's a big deal."
      },
      {
        title: "The Social Media Manager",
        description: "Paste a link to your latest video. The agent watches it, writes a blog post, creates 5 tweets, and schedules them all to post throughout the week."
      }
    ]
  },
  "Predictive Business Insights": {
    title: "Predictive Business Insights",
    coreValue: "Turning 'what happened' into 'what will happen'.",
    examples: [
      {
        title: "The Inventory Forecaster",
        description: "Analyzes 3 years of sales history and warns you: 'Order more winter coats now or you'll run out by November 15th.'"
      },
      {
        title: "Churn Prevention Radar",
        description: "Watches user activity patterns. If a VIP client stops logging in, it alerts your sales team: 'Call John Doe, he might cancel soon.'"
      },
      {
        title: "Dynamic Pricing Engine",
        description: "Watches competitor prices 24/7. If they drop their price, it automatically adjusts yours to stay competitive (while keeping your margin safe)."
      }
    ]
  },
  "Custom AI Solutions": {
    title: "Custom AI Solutions",
    coreValue: "Solving unique problems that off-the-shelf tools can't.",
    examples: [
      {
        title: "The Manufacturing Eye",
        description: "A camera watches your assembly line. If a bottle cap is loose, the AI spots it (faster than a human) and ejects the bottle instantly."
      },
      {
        title: "The Bias-Free Recruiter",
        description: "Instead of just keywords, this agent reads the whole resume. It tells you: 'Jane is perfect because she led a similar project in 2019.'"
      },
      {
        title: "The Virtual Coach",
        description: "Analyzes game footage. It tells the coach: 'Player #10 is 5% slower when moving left—fix that training drill.'"
      }
    ]
  },
  "AI Security & Management": {
    title: "AI Security & Management",
    coreValue: "Sleep soundly knowing your AI is safe.",
    examples: [
      {
        title: "The Data Bodyguard",
        description: "A secure filter that sits between your staff and the AI. It automatically blacks out credit card numbers and names before they leave your server."
      },
      {
        title: "The 24/7 Watchdog",
        description: "We set up an automated monitor that checks every AI answer. If the AI starts 'making things up' (hallucinating), it alerts us instantly."
      },
      {
        title: "The Fraud Detective",
        description: "Watches every transaction 24/7. If someone logs in from two countries at once, it freezes the account instantly to prevent theft."
      }
    ]
  },
  "Legacy System Modernization": {
    title: "Legacy System Modernization",
    coreValue: "Don't rewrite. Just reconnect.",
    examples: [
      {
        title: "Chat with Your Old Database",
        description: "We add a secure AI layer over your 20-year-old ERP. You type 'Show sales by region' and get a chart instantly, no SQL needed."
      },
      {
        title: "Mainframe Crash Predictor",
        description: "An AI agent watches your system logs 24/7. It spots weird patterns and alerts you: 'Hard drive failing in Server 3' before it crashes."
      },
      {
        title: "Instant Modern API",
        description: "Want to build a mobile app but your data is stuck in an old system? We use AI to wrap your old code so new apps can talk to it immediately."
      }
    ]
  },
  "Unified Business Intelligence": {
    title: "Unified Business Intelligence",
    coreValue: "Stop wrestling with spreadsheets. Let AI unify your data.",
    examples: [
      {
        title: "Centralized Sales Dashboard",
        description: "AI connects to Shopify, Google Ads, and Facebook. You simply ask, 'Which ad campaign gave the best ROI yesterday?' to get an instant answer."
      },
      {
        title: "Automated Market Research",
        description: "An agent scrapes thousands of competitor sites daily. You ask, 'Show me who lowered prices on sneakers this week,' and get a summarized report."
      },
      {
        title: "Live Operations Monitor",
        description: "Connects to your IoT sensors or fleet GPS. You ask, 'Are any trucks delayed?' and the AI checks real-time locations to alert you."
      }
    ]
  },
  "Mobile App AI Features": {
    title: "Mobile App AI Features",
    coreValue: "Making mobile experiences smarter.",
    examples: [
      {
        title: "The App That Reads Minds",
        description: "Netflix-style algorithms that don't just show 'popular items', but predict exactly what this specific user wants to buy right now based on their mood and time of day."
      },
      {
        title: "Talk to Your App",
        description: "Forget buttons. Users just say 'Order my usual coffee' or 'Show me blue sneakers in size 10', and the app navigates itself instantly."
      },
      {
        title: "The AR Shopping Assistant",
        description: "Users point their phone camera at their feet to 'try on' shoes virtually, or at their wall to see how a new painting fits perfectly."
      }
    ]
  }
};
