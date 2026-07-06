import { ServicePage } from "@/components/templates/ServicePage";

export default function RAGPage() {
  return (
    <ServicePage
      eyebrow="Document Processing"
      title="RAG "
      redPart="Document Intelligence"
      description="Retrieve and generate accurate answers by combining your enterprise documents with advanced AI models."
      stats={[
        { value: "99%", label: "Accuracy" },
        { value: "<5s", label: "Query Response" },
        { value: "Unlimited", label: "Documents" },
      ]}
      heroImage="/assets/laptop-glow.jpg"
      capabilitiesTitle="RAG "
      capabilitiesRed="Capabilities"
      capabilitiesDescription="Extract insights from your proprietary documents, PDFs, databases, and knowledge bases with retrieval-augmented generation."
      features={[
        { icon: "FileText", title: "Document Ingestion", description: "Ingest PDFs, Word docs, spreadsheets, and databases with intelligent chunking and indexing." },
        { icon: "Search", title: "Semantic Search", description: "Find relevant documents using semantic understanding, not just keyword matching." },
        { icon: "Brain", title: "Answer Generation", description: "Generate accurate, cited answers grounded in your source documents." },
        { icon: "Database", title: "Multi-source Integration", description: "Connect multiple data sources: S3, SharePoint, databases, web content." },
        { icon: "Zap", title: "Real-time Updates", description: "Automatically index new documents as they're added to your systems." },
        { icon: "CheckCircle2", title: "Citation & Tracking", description: "Every answer includes source citations and audit trails for compliance." },
      ]}
    />
  );
}
