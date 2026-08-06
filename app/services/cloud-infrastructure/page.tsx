"use client";

import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/ui/service-hero";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/ui/cta-banner";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function CloudInfrastructurePage() {
  const reducedMotion = useReducedMotion();
  const motionHover = reducedMotion ? {} : { y: -6 };

  return (
    <Layout>
      <ServiceHero
        eyebrow="Cloud Infrastructure"
        title="Build a Future-Ready"
        redPart="IT Infrastructure"
        description="Your business depends on a reliable IT infrastructure to operate efficiently and stay competitive. At Nexova Tech Zone, we provide end-to-end IT Infrastructure & Cloud Solutions that help organizations modernize their technology, improve security, reduce operational costs, and support business growth."
        stats={[
          { value: "200+", label: "Cloud Deployments" },
          { value: "40%", label: "Cost Reduction" },
          { value: "99.99%", label: "Availability" },
        ]}
        visual={
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img
              src="/assets/cloud-infrastructure.png"
              alt="Cloud infrastructure"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        }
      />

      <Section>
        <SectionHeading
          eyebrow="Our Services"
          title="Cloud Infrastructure"
          redPart="Services"
          description="Transform your business with cloud infrastructure designed for flexibility, security, and performance. We help organizations deploy reliable cloud environments that enable seamless collaboration, remote work, disaster recovery, and business continuity."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="group flex flex-col rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-navy">Our Cloud Infrastructure Services</h3>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Public Cloud Deployment</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Private Cloud Solutions</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Hybrid Cloud Architecture</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Cloud Storage Solutions</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Virtual Servers</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Backup & Disaster Recovery</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Cloud Security Configuration</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Performance Monitoring</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="group flex flex-col rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-navy">Benefits</h3>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Reduce infrastructure costs</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Improve scalability</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">High availability</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Better security</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Faster deployment</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Business continuity</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Cloud Migration"
          redPart="Services"
          description="Moving to the cloud doesn't have to be complicated. Our cloud migration experts carefully plan and execute your migration strategy while minimizing downtime and ensuring data security."
        />
        <div className="text-center mx-auto max-w-3xl">
          <h3 className="text-2xl font-semibold text-navy">Migrate to the Cloud with Zero Business Disruption</h3>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            We migrate applications, databases, virtual machines, email systems, and business workloads safely and efficiently.
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={motionHover}
            transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeOut" }}
            className="group flex h-full flex-col rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <h4 className="text-xl font-semibold text-navy">Migration Services</h4>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Cloud Readiness Assessment</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Application Migration</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Database Migration</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Email Migration</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">File Server Migration</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Workload Optimization</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Post-Migration Support</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={motionHover}
            transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeOut" }}
            className="group flex h-full flex-col rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <h4 className="text-xl font-semibold text-navy">Why Choose Us</h4>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Minimal downtime</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Secure data migration</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Reduced migration risks</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Faster deployment</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Performance optimization</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Server Management"
          description="Ensure your business servers operate efficiently with proactive server management services. We monitor, maintain, secure, and optimize your servers to reduce downtime and improve performance."
        />
        <div className="text-center mx-auto max-w-3xl">
          <h4 className="text-xl font-semibold text-navy">Reliable Server Administration & Maintenance</h4>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            Our team ensures your physical and virtual servers stay healthy, secure, and optimized for peak performance.
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, rotate: -4, y: 24 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={motionHover}
            transition={{ duration: reducedMotion ? 0 : 0.7, ease: "easeOut" }}
            className="group flex h-full flex-col rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <h4 className="text-xl font-semibold text-navy">Server Management Includes</h4>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Windows Server Administration</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Linux Server Management</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Server Monitoring</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Security Patch Management</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Backup Configuration</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Performance Optimization</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Storage Management</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Disaster Recovery Planning</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={motionHover}
            transition={{ duration: reducedMotion ? 0 : 0.7, ease: "easeOut" }}
            className="group flex h-full flex-col rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <h4 className="text-xl font-semibold text-navy">Benefits</h4>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Improved uptime</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Enhanced security</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Better server performance</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Reduced maintenance costs</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">24/7 monitoring</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Managed IT Services"
          description="Our Managed IT Services provide proactive monitoring, maintenance, technical support, and cybersecurity to keep your IT infrastructure running smoothly."
        />
        <div className="text-center mx-auto max-w-3xl">
          <h4 className="text-xl font-semibold text-navy">Let Us Manage Your IT While You Focus on Business</h4>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            We become your dedicated IT partner, ensuring maximum productivity and minimal disruptions.
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={motionHover}
            transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeOut" }}
            className="group flex h-full flex-col rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <h4 className="text-xl font-semibold text-navy">Services Include</h4>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Infrastructure Monitoring</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Remote IT Support</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Network Management</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Endpoint Management</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Security Management</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Software Updates</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Backup Monitoring</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Preventive Maintenance</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={motionHover}
            transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeOut" }}
            className="group flex h-full flex-col rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <h4 className="text-xl font-semibold text-navy">Why Businesses Choose Managed IT</h4>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Predictable IT costs</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Reduced downtime</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Expert technical support</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Increased productivity</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Enhanced cybersecurity</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="IT Consulting"
          description="Technology should empower your business—not slow it down. Our IT consultants help you identify the right technologies, optimize IT investments, and create digital transformation strategies aligned with your business goals."
        />
        <div className="text-center mx-auto max-w-3xl">
          <h4 className="text-xl font-semibold text-navy">Strategic Technology Consulting for Business Growth</h4>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={motionHover}
            transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeOut" }}
            className="group flex h-full flex-col rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <h4 className="text-xl font-semibold text-navy">Consulting Services</h4>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">IT Infrastructure Planning</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Cloud Strategy</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Technology Roadmap</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Network Architecture</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Cybersecurity Assessment</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">IT Cost Optimization</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Digital Transformation Consulting</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Business Continuity Planning</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={motionHover}
            transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeOut" }}
            className="group flex h-full flex-col rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <h4 className="text-xl font-semibold text-navy">Benefits</h4>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Better decision-making</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Optimized IT investments</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Reduced business risks</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Future-ready infrastructure</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Improved operational efficiency</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Business Digitalization"
          description="Accelerate business growth with digital transformation solutions that streamline operations, improve customer experiences, and increase productivity."
        />
        <div className="text-center mx-auto max-w-3xl">
          <h4 className="text-xl font-semibold text-navy">Transform Traditional Business into a Digital Enterprise</h4>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            We help businesses adopt modern technologies, automate workflows, and embrace digital innovation.
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={motionHover}
            transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeOut" }}
            className="group flex h-full flex-col rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <h4 className="text-xl font-semibold text-navy">Digital Transformation Services</h4>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Business Process Automation</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Digital Workflow Solutions</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Cloud Collaboration Tools</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Document Management Systems</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Digital Workplace Solutions</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Data Integration</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Software Implementation</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Process Optimization</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={motionHover}
            transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeOut" }}
            className="group flex h-full flex-col rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <h4 className="text-xl font-semibold text-navy">Benefits</h4>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Increased efficiency</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Improved customer experience</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Reduced operational costs</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Faster decision-making</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Greater business agility</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="IT Support & AMC"
          description="Keep your IT systems running smoothly with reliable technical support and preventive maintenance services. Our AMC plans ensure your hardware, software, networks, and IT infrastructure remain secure and operational."
        />
        <div className="text-center mx-auto max-w-3xl">
          <h4 className="text-xl font-semibold text-navy">Comprehensive IT Support & Annual Maintenance Contracts</h4>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={motionHover}
            transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeOut" }}
            className="group flex h-full flex-col rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <h4 className="text-xl font-semibold text-navy">Our Support Services</h4>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Onsite IT Support</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Remote Technical Support</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Hardware Maintenance</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Software Troubleshooting</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Network Support</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Preventive Maintenance</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">System Health Checks</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Emergency Support</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={motionHover}
            transition={{ duration: reducedMotion ? 0 : 0.65, ease: "easeOut" }}
            className="group flex h-full flex-col rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <h4 className="text-xl font-semibold text-navy">Why Choose Our AMC Services</h4>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Fast issue resolution</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Reduced downtime</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Scheduled maintenance</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Expert technical assistance</span>
              </li>
              <li className="flex items-start gap-3 rounded-3xl bg-white/5 p-4 transition-all duration-300 hover:bg-primary/10">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span className="text-foreground/90">Cost-effective support plans</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title="Future-Proof Your IT Infrastructure Today"
          description="Empower your business with secure, scalable, and reliable IT Infrastructure & Cloud solutions from Nexova Tech Zone. Whether you need cloud migration, server management, managed IT services, or ongoing IT support, our experts are here to help. Contact us today for a free consultation and discover how we can optimize your IT environment for growth and success."
          primary={{ label: "Contact Us", to: "/contact" }}
          secondary={{ label: "Talk to an Expert", to: "/contact" }}
        />
      </Section>
    </Layout>
  );
}
