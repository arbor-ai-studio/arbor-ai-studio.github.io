import { LucideIcon } from "lucide-react";

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
        title: "E-commerce Order Agent",
        description: "Connects to Shopify/WooCommerce to check order status, handle returns, and issue refunds automatically within policy limits."
      },
      {
        title: "HR Internal Helpdesk",
        description: "Ingests company handbooks and wikis to answer employee questions like 'What is the dental policy?' or 'How do I request PTO?' immediately."
      },
      {
        title: "Tech Support Diagnostics",
        description: "Walks customers through complex troubleshooting steps (e.g., router reset) and escalates to human agents with full context if needed."
      }
    ]
  },
  "SaaS Product Engineering": {
    title: "SaaS Product Engineering",
    coreValue: "From napkin sketch to production-ready scalable product.",
    examples: [
      {
        title: "AI Legal Document Reviewer",
        description: "A subscription-based SaaS where users upload contracts to get instant risk analysis and clause highlighting."
      },
      {
        title: "Generative Design Tool",
        description: "For interior designers: Upload a room photo, describe a style, and get 3D rendered redesigns in seconds."
      },
      {
        title: "Voice-First CRM for Sales",
        description: "Mobile-first app where field reps dictate meeting notes, and AI automatically updates Salesforce fields."
      }
    ]
  },
  "Business Process Automation": {
    title: "Business Process Automation",
    coreValue: "Connecting isolated tools to remove manual grunt work.",
    examples: [
      {
        title: "Invoice Processing Pipeline",
        description: "Watches email for invoices, extracts data (PDF to JSON), matches with ERP purchase orders, and drafts payments in QuickBooks."
      },
      {
        title: "Smart Lead Qualification",
        description: "Enriches new leads with LinkedIn data, scores them based on ICP match, and notifies sales teams of high-priority prospects via Slack."
      },
      {
        title: "Automated Content Repurposing",
        description: "Takes a YouTube video URL and automatically generates a blog post, 5 tweets, and a LinkedIn article, drafting them in your CMS."
      }
    ]
  },
  "Predictive Business Insights": {
    title: "Predictive Business Insights",
    coreValue: "Turning 'what happened' into 'what will happen'.",
    examples: [
      {
        title: "Inventory Demand Forecasting",
        description: "Predicts stockouts 2 weeks in advance based on seasonal trends and marketing spend to optimize supply chain."
      },
      {
        title: "Customer Churn Prediction",
        description: "Analyzes usage patterns to flag at-risk accounts and triggers automatic retention campaigns before they leave."
      },
      {
        title: "Dynamic Pricing Model",
        description: "Adjusts service or product pricing in real-time based on competitor rates, demand, and inventory levels."
      }
    ]
  },
  "Custom AI Solutions": {
    title: "Custom AI Solutions",
    coreValue: "Solving unique problems that off-the-shelf tools can't.",
    examples: [
      {
        title: "Quality Control Vision System",
        description: "Computer vision on manufacturing lines that detects defects in real-time and automatically rejects faulty items."
      },
      {
        title: "Resume Matching Engine",
        description: "For recruiters: Scores candidate resumes against job descriptions using semantic understanding rather than simple keyword matching."
      },
      {
        title: "Sports Performance Analysis",
        description: "Analyzes game footage to track player movement, speed, and positioning to suggest tactical improvements."
      }
    ]
  },
  "Enterprise Security & Support": {
    title: "Enterprise Security & Support",
    coreValue: "Keeping AI safe, compliant, and operational.",
    examples: [
      {
        title: "PII Redaction Proxy",
        description: "Middleware that automatically strips names, credit cards, and SSNs from prompts before data helps leave your secure server."
      },
      {
        title: "Model Monitoring Dashboard",
        description: "Real-time alerts if your AI starts hallucinating, drifting from its training, or if user sentiment drops below a threshold."
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description: "Ensures marketing staff can only query marketing data, while HR has exclusive access to sensitive personnel files."
      }
    ]
  },
  "Legacy System Modernization": {
    title: "Legacy System Modernization",
    coreValue: "Bringing AI benefits to old infrastructure.",
    examples: [
      {
        title: "Talk to Your SQL Database",
        description: "Natural language interface for legacy ERPs, allowing executives to ask 'Show sales by region' without knowing SQL."
      },
      {
        title: "Mainframe Log Anomaly Detection",
        description: "AI that monitors noisy system logs from legacy servers to predict hardware failures before they cause downtime."
      },
      {
        title: "Automated API Wrapper",
        description: "Turns old SOAP services into modern REST APIs with AI-generated documentation for easier integration."
      }
    ]
  },
  "Data Warehousing & ETL": {
    title: "Data Warehousing & ETL",
    coreValue: "Cleaning the mess so AI can actually work.",
    examples: [
      {
        title: "Multi-Source Data Lake",
        description: "Combines data from Facebook Ads, Google Analytics, and Shopify into a single BigQuery warehouse for unified reporting."
      },
      {
        title: "Unstructured Data Parsing",
        description: "Scrapes and structures messy data from thousands of competitor websites to enable automated price comparison."
      },
      {
        title: "Real-Time Streaming Pipeline",
        description: "Processes high-volume IoT sensor data instantly for live dashboard reporting and alert triggers."
      }
    ]
  },
  "Mobile App AI Features": {
    title: "Mobile App AI Features",
    coreValue: "Making mobile experiences smarter.",
    examples: [
      {
        title: "On-Device Offline AI",
        description: "Language translation or object detection models optimized to run locally on the phone without internet access."
      },
      {
        title: "Biometric Authentication",
        description: "Secure, frictionless login implementation using modern face or voice recognition standards."
      },
      {
        title: "Personalized Feed Algorithm",
        description: "Netflix-style recommendation engine running locally to suggest content users will love based on interaction history."
      }
    ]
  }
};
