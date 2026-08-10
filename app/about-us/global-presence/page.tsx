
import { Layout } from "@/components/layout/Layout";
import { MapPin, Users, Globe, Building2 } from "lucide-react";


export default function GlobalPresencePage() {
  const offices = [
    {
      region: "Asia",
      locations: [
        { city: "Chennai", country: "India", role: "Global Headquarters", employees: "150+" },
        { city: "Bangalore", country: "India", role: "Tech Hub", employees: "80+" },
        { city: "Singapore", country: "Singapore", role: "Regional Center", employees: "45+" },
      ],
    },
    {
      region: "Americas",
      locations: [
        { city: "New York", country: "USA", role: "North America Hub", employees: "60+" },
        { city: "San Francisco", country: "USA", role: "Innovation Center", employees: "40+" },
        { city: "Toronto", country: "Canada", role: "Regional Office", employees: "30+" },
      ],
    },
    {
      region: "Europe & Middle East",
      locations: [
        { city: "London", country: "UK", role: "EMEA Hub", employees: "50+" },
        { city: "Dubai", country: "UAE", role: "Middle East Center", employees: "40+" },
        { city: "Berlin", country: "Germany", role: "European Office", employees: "35+" },
      ],
    },
  ];

  return (
    <Layout>
      <section className="pt-12 pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Global <span className="text-gradient-red">Presence</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Delivering excellence across continents with local expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-navy mb-2">9</h3>
              <p className="text-foreground/80">Offices Worldwide</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg p-8 text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-navy mb-2">200+</h3>
              <p className="text-foreground/80">Team Members Globally</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg p-8 text-center">
              <MapPin className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-navy mb-2">40+</h3>
              <p className="text-foreground/80">Countries Served</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy mb-8">Our Offices</h2>
            <div className="space-y-8">
              {offices.map((region, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-primary" />
                    {region.region}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {region.locations.map((location, lIdx) => (
                      <div key={lIdx} className="bg-muted/40 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-2 mb-3">
                          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-navy">{location.city}</h4>
                            <p className="text-sm text-foreground/70">{location.country}</p>
                          </div>
                        </div>
                        <div className="border-t border-border/40 pt-3 mt-3">
                          <p className="text-sm font-semibold text-primary mb-1">{location.role}</p>
                          <p className="text-xs text-foreground/60">{location.employees} employees</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/40 rounded-lg p-12 mb-16">
            <h2 className="text-2xl font-bold text-navy mb-8">Global Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  24/7 Global Support
                </h3>
                <p className="text-foreground/80 mb-6">
                  Round-the-clock support across all time zones ensuring your business never misses a beat.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Local Expertise
                </h3>
                <p className="text-foreground/80 mb-6">
                  Deep understanding of regional markets, regulations, and business practices.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Distributed Teams
                </h3>
                <p className="text-foreground/80 mb-6">
                  Access to talent pools across multiple continents for optimal resource allocation.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Compliance Standards
                </h3>
                <p className="text-foreground/80 mb-6">
                  Adherence to international standards and local regulatory requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy mb-8">Regional Strengths</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  region: "Asia-Pacific",
                  strengths: ["Cost-effective solutions", "Tech talent pool", "E-commerce expertise", "Rapid deployment"],
                },
                {
                  region: "Americas",
                  strengths: ["Enterprise clients", "Innovation hub", "Market expertise", "Advanced tech"],
                },
                {
                  region: "Europe & Middle East",
                  strengths: ["Compliance expertise", "Enterprise solutions", "Regional knowledge", "Security focus"],
                },
              ].map((area, idx) => (
                <div key={idx} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
                  <h4 className="font-bold text-navy mb-4">{area.region}</h4>
                  <ul className="space-y-2">
                    {area.strengths.map((strength, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-sm text-foreground/70">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 mb-16">
            <h2 className="text-2xl font-bold text-navy mb-6">Why Choose Our Global Network?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Seamless global service delivery across time zones",
                "Local expertise with global standards",
                "Cost optimization through distributed operations",
                "Access to diverse talent and perspectives",
                "Compliance with regional and international regulations",
                "Risk mitigation through geographical diversification",
              ].map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="bg-navy text-white rounded-lg p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Connect with Us Globally</h2>
            <p className="text-white/80 mb-8">
              Whether you're in Asia, Americas, or Europe, we're ready to support your digital transformation journey.
            </p>
            <button className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-red)]">
              Contact Your Local Office
            </button>
          </div> */}

          <div className="mt-16">
            <img src="/images/global-presence.jpg" alt="Global Presence" className="rounded-lg w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
