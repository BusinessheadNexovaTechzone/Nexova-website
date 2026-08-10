import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";
import { PageMotion } from "@/components/ui/motion-system";

import "./globals.css";
import "./styles.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexovatechzone.com"),

  title: {
    default:
      "IT Services Company | IT Services & Consulting | Nexova Tech Zone",
    template: "%s | Nexova Tech Zone",
  },

  description:
    "Nexova Tech Zone is a trusted IT Services Company providing innovative IT Services and Consulting, software development, AI automation, cloud infrastructure, IT staffing, digital marketing, cyber security, and customized IT Solutions for businesses.",

  alternates: {
    canonical: "https://www.nexovatechzone.com/",
  },

  icons: {
    icon: "/assets/nexova-icon.jpeg",
  },

  openGraph: {
    title:
      "IT Services Company | IT Services & Consulting | Nexova Tech Zone",

    description:
      "Nexova Tech Zone is a trusted IT Services Company providing innovative IT Services and Consulting, software development, AI automation, cloud infrastructure, IT staffing, digital marketing, cyber security, and customized IT Solutions for businesses.",

    url: "https://www.nexovatechzone.com/",

    siteName: "Nexova Tech Zone",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: "/assets/nexova-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexova Tech Zone",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "IT Services Company | IT Services & Consulting | Nexova Tech Zone",
    description:
      "Nexova Tech Zone is a trusted IT Services Company providing innovative IT Services and Consulting, software development, AI automation, cloud infrastructure, IT staffing, digital marketing, cyber security, and customized IT Solutions for businesses.",
    images: ["/assets/nexova-og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <head>
        {/* GOOGLE ANALYTICS */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W45LYRHWTM"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W45LYRHWTM');
          `}
        </Script>

        {/* META PIXEL */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {
              if(f.fbq)return;
              n=f.fbq=function(){
                n.callMethod
                  ? n.callMethod.apply(n,arguments)
                  : n.queue.push(arguments);
              };

              if(!f._fbq)f._fbq=n;

              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];

              t=b.createElement(e);
              t.async=!0;
              t.src=v;

              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s);

            }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '2199917547514080');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* LINKEDIN INSIGHT TAG */}
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            window._linkedin_partner_id = "9488028";

            window._linkedin_data_partner_ids =
              window._linkedin_data_partner_ids || [];

            window._linkedin_data_partner_ids.push(
              window._linkedin_partner_id
            );

            (function(l) {
              if (!l) {
                window.lintrk = function(a, b) {
                  window.lintrk.q.push([a, b]);
                };
                window.lintrk.q = [];
              }

              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");

              b.type = "text/javascript";
              b.async = true;
              b.src =
                "https://snap.licdn.com/li.lms-analytics/insight.min.js";

              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
      </head>

      <body className="font-sans antialiased bg-background text-foreground">
        {/* META PIXEL NOSCRIPT */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1986156378733572&ev=PageView&noscript=1"
            alt="meta-pixel"
          />
        </noscript>

        {/* LINKEDIN NOSCRIPT */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=9488028&fmt=gif"
          />
        </noscript>

        <PageMotion>{children}</PageMotion>

        <WhatsAppCTA />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}