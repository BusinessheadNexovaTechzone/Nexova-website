import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="04 Networking Solutions"
      title="Fabric for the"
      redPart="Ethereal Enterprise."
      description="Reliable, high-performance network infrastructure for modern enterprises that demand zero-latency connectivity and architectural elegance."
      stats={[
        { value: "99.99%", label: "Network Uptime" },
        { value: "<1ms", label: "Latency Targets" },
        { value: "Wi-Fi 6E", label: "Next-Gen Ready" },
      ]}
      heroImage="/assets/network-tablet.jpg"
      capabilitiesEyebrow="Capabilities"
      capabilitiesTitle="Core Infrastructure "
      capabilitiesRed="Pillars"
      capabilitiesDescription="Comprehensive engineering services that transform traditional connectivity into a competitive business asset."
      features={[
        { icon: "Network", title: "Network Design & Architecture", description: "Designing scalable, resilient and optimized LAN/WAN environments." },
        { icon: "Cog", title: "SD-WAN Implementation", description: "Deployment and management of Software-Defined WAN to enhance performance and cost-efficiency." },
        { icon: "Shield", title: "Network Security", description: "Securing your network with firewalls, VPNs, IDS/IPS and zero-trust frameworks." },
        { icon: "Wifi", title: "Wireless Networking", description: "High-performance wireless solutions supporting Wi-Fi 6/6E for high-density environments." },
        { icon: "BarChart3", title: "Monitoring & Management", description: "Proactive monitoring services to ensure maximum uptime and rapid issue resolution." },
        { icon: "Server", title: "Automation & DevNetOps", description: "Streamlining operations through infrastructure-as-code and network automation tools." },
        { icon: "Network", title: "Data Centre Networking", description: "High-bandwidth, low-latency switching and routing for modern data centres." },
        { icon: "Phone", title: "VoIP & Unified Comms", description: "Integrating voice, video and collaboration tools over your network infrastructure." },
      ]}
      cols={3}
    />
  );
}
