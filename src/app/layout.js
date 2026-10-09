import { Inter, Poppins } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deyukti Labs | Talent, Intelligence & HR Automation",
    template: "%s | Deyukti Labs",
  },
  alternates: { canonical: "/" },
  verification: { google: "fZM4JXklaNdujY6B49PJ2UX3jw5BTjKJAD_DUZSAWeA" },
  description: "Deyukti Labs helps organizations find exceptional talent, understand the market, and make people operations work better with responsible AI.",
  applicationName: "Deyukti Labs",
  openGraph: {
    type: "website",
    siteName: "Deyukti Labs",
    locale: "en_US",
    url: siteUrl,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}