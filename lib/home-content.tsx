import { ReactNode } from "react";

export interface UseCaseItem {
  problem: string;
  fix: ReactNode;
}

export interface McpShowcaseItem {
  title: string;
  scenario: string;
  action: string;
  result: string;
}

export const useCases: UseCaseItem[] = [
  {
    problem: "Support team overwhelmed?",
    fix: "24/7 Intelligent Support Agents that resolve 80% of queries instantly, letting your team focus on complex issues."
  },
  {
    problem: "Great idea but no engineering team?",
    fix: "Full-cycle SaaS building. We take you from napkin sketch to MVP with final quality checks and production deployment."
  },
  {
    problem: "Employees wasting time?",
    fix: "AI Chat with Company Data (RAG). Instant answers from your PDF policies, documentation, and internal wikis."
  },
  {
    problem: "Tired of manual data entry?",
    fix: (<span><strong className="text-foreground">MCP Tools</strong>: Secure, direct connections that let your AI agents read/write to your CRM and Calendar—<span className="text-primary font-medium">bypassing browser clicking</span> for maximum speed and convenience.</span>)
  }
];

export const mcpShowcase: McpShowcaseItem[] = [
  {
    title: "The CRM Commander",
    scenario: "Update John's deal to Closed-Won.",
    action: "The AI instantly updates HubSpot, calculates the new commission, and pings the sales team on Slack.",
    result: "Done in seconds. No login screens. No manual data entry."
  },
  {
    title: "The Ticket Dispatcher",
    scenario: "My server is down!",
    action: "AI recognizes the sender as a VIP client, creates a 'High Priority' Zendesk ticket, and alerts the on-call engineer.",
    result: "Zero manual triage. Critical issues handled instantly."
  },
  {
    title: "Inventory Sync",
    scenario: "Can we fulfill the 500 unit order?",
    action: "AI checks your warehouse stock in real-time and cross-references pending shipments to give you a definitive 'Yes'.",
    result: "Instant answer. No more dashboard surfing."
  },
  {
    title: "Smart Collections Agent",
    scenario: "Who is late on payments?",
    action: "AI scans QuickBooks, identifies at-risk accounts, and drafts personalized payment reminders for you to approve.",
    result: "Accelerated cash flow. Automated AR."
  },
  {
    title: "Executive Briefing",
    scenario: "Prep me for the meeting with Acme Corp.",
    action: "AI pulls emails, Jira tickets, and LinkedIn data to generate automated insights and a summary doc for your next meeting.",
    result: "30 minutes of research done in 10 seconds."
  },
  {
    title: "Automated Onboarding",
    scenario: "Onboard Sarah (new developer).",
    action: "AI handles IT provisioning: creates her Google Workspace account, invites her to Slack channels, and assigns training tasks.",
    result: "Zero IT admin tickets. Day 1 ready."
  }
];
