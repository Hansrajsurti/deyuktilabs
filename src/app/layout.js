import { DM_Sans, Manrope } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deyukti Labs | Talent, Intelligence & HR Automation",
    template: "%s | Deyukti Labs",
  },
  alternates: { canonical: "/" },
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
      <body className={`${manrope.variable} ${dmSans.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}