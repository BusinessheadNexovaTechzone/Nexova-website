import { ServicePage } from "@/components/templates/ServicePage";

export default function SalesIntelligencePage() {
  return (
    <ServicePage
      eyebrow="Revenue Intelligence"
      title="AI Sales "
      redPart="Intelligence"
      description="Predictive sales analytics that identify opportunities, forecast revenue, and accelerate deal closure."
      stats={[
        { value: "35%", label: "Win Rate Increase" },
        { value: "40%", label: "Sales Cycle Reduction" },
        { value: "2.5x", label: "Revenue Lift" },
      ]}
      heroImage="/assets/dev-dual-monitors.jpg"
      capabilitiesTitle="Sales Intelligence "
      capabilitiesRed="Tools"
      capabilitiesDescription="AI-powered insights that help sales teams identify high-value prospects, predict churn, and optimize deal strategies."
      features={[
        { icon: "Eye", title: "Prospect Scoring", description: "AI scores leads by purchase probability, budget, and intent signals from web behavior." },
        { icon: "TrendingUp", title: "Revenue Forecasting", description: "Predict quarterly revenue with 95%+ accuracy using historical pipeline data." },
        { icon: "BarChart3", title: "Deal Intelligence", description: "Analyze competitor moves, win/loss patterns, and identify similar high-value opportunities." },
        { icon: "Users", title: "Buyer Persona Matching", description: "Match prospects to ideal customer profiles and recommend engagement strategies." },
        { icon: "Zap", title: "Real-time Alerts", description: "Get notified of account changes, buying signals, and engagement opportunities." },
        { icon: "Target", title: "Playbook Recommendations", description: "AI suggests next-best-actions and tailored sales plays for each deal." },
      ]}
    />
  );
}
