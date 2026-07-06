import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

// import { ChatbotWidget } from "@/components/ui/chatbot-widget";
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta";

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
  title: "Nexova Tech Zone - Strategic Software Engineering",
  description:
    "We architect intelligent software, secure infrastructure, and high-impact digital experiences for ambitious enterprises.",
  icons: {
    icon: "/assets/nexova-icon.jpeg",
  },
  openGraph: {
    title: "Nexova Tech Zone",
    description:
      "Bespoke software, cybersecurity, AI/ML, cloud, and mobile experiences built for scale.",
    url: "https://nexova.tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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

            function gtag() {
              dataLayer.push(arguments);
            }

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

        {/* Chatbot plugin stylesheet */}
        <link
          rel="stylesheet"
          href="https://wonderful-desert-092abd300.7.azurestaticapps.net/style.css"
        />
      </head>

      <body className="font-sans antialiased bg-background text-foreground">
        {/* META PIXEL NOSCRIPT */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2199917547514080&ev=PageView&noscript=1"
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

        {/* <ChatbotWidget /> */}

        {children}

        <WhatsAppCTA />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
