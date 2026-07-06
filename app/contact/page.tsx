'use client';

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Layout } from "@/components/layout/Layout";

const MAP_URL = "https://maps.app.goo.gl/N7Kmqg9zEDvNrh1VA";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7445645435567!2d80.2171876!3d13.0077394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f7c8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sNEXOVA%20TECH%20ZONE%20GLOBAL%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1234567890";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      email: form.email,
      service: form.service,
      message: form.message,
    };

    emailjs
      .send(
        "service_wti755t",     
        "template_nz60wci",     
        templateParams,
        "2rkpAvsHsJpz3Is8m"     
      )
      .then(
        () => {
          setSent(true);
          alert("✅ Message sent successfully!");

          setForm({
            name: "",
            email: "",
            service: " ",
            message: "",
          });
        },
        (error) => {
          console.error("Email send error:", error);
          alert("❌ Failed to send message");
        }
      );
  };

  return (
    <Layout>
      <section className="pt-12 pb-6 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl text-navy md:text-6xl">
            Get in <span className="text-gradient-red italic">Touch</span>
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          
          {/* FORM */}
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <h2 className="text-2xl font-bold text-navy">Send us a message</h2>

            <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
              
              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="rounded-lg border px-4 py-3"
                />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="rounded-lg border px-4 py-3"
                />
              </div>

              {/* Service */}
              <input
                name="service"
                value={form.service}
                onChange={handleChange}
                className="rounded-lg border px-4 py-3"
                placeholder="Service of Interest"
              />

              {/* Message */}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="rounded-lg border px-4 py-3"
              />

              {/* Button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 text-white"
              >
                <Send className="h-4 w-4" />
                {sent ? "Message Sent" : "Send Message"}
              </button>
            </form>
          </div>

          {/* CONTACT DETAILS */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-accent p-8">
              <h3 className="text-xl font-bold text-navy">Contact Details</h3>

              <ul className="mt-6 space-y-5">
                <li className="flex gap-3">
                  <Phone /> +91 7810001706
                </li>

                <li className="flex gap-3">
                  <Mail /> businesshead@nexovatechzone.com
                </li>

                <li className="flex gap-3">
                  <MapPin />
                 NexovaTechzone,
Head Office No1/2 Dharmambal Palaniappan Complex, First Floor, Mount Poonamallee Rd, Near A2B Restaurant, Ramapuram, Nandambakkam, Chennai, 
Tamil Nadu - 600089.
                </li>
              </ul>

              <a
                href={MAP_URL}
                target="_blank"
                className="text-red-500 text-sm mt-2 block"
              >
                Open directions →
              </a>
            </div>

            {/* MAP */}
            <iframe
              src={MAP_EMBED}
              className="w-full h-72 rounded-3xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
