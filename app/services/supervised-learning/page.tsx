import { ServicePage } from "@/components/templates/ServicePage";

export default function SupervisedLearningPage() {
  return (
    <ServicePage
      eyebrow="Machine Learning"
      title="Supervised Learning "
      redPart="Models"
      description="Classification and regression models trained on your labeled data to predict business outcomes."
      stats={[
        { value: "97%", label: "Accuracy" },
        { value: "<100ms", label: "Inference" },
        { value: "Real-time", label: "Predictions" },
      ]}
      heroImage="/assets/ai-globe.jpg"
      capabilitiesTitle="Model "
      capabilitiesRed="Capabilities"
      capabilitiesDescription="Train, validate, and deploy supervised learning models for classification, regression, and anomaly detection tasks."
      features={[
        { icon: "Brain", title: "Model Training", description: "Train models on your labeled data with automatic hyperparameter tuning and cross-validation." },
        { icon: "Zap", title: "Feature Engineering", description: "Automated feature extraction and selection to maximize model performance." },
        { icon: "CheckCircle2", title: "Model Validation", description: "Comprehensive testing including hold-out sets, cross-validation, and A/B testing." },
        { icon: "TrendingUp", title: "Performance Monitoring", description: "Track model drift, accuracy degradation, and retraining triggers in production." },
        { icon: "Eye", title: "Explainability", description: "Understand model predictions with SHAP values, feature importance, and decision trees." },
        { icon: "Shield", title: "Bias Detection", description: "Identify and mitigate bias across demographics, geographies, and segments." },
      ]}
    />
  );
}
