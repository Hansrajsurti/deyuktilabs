import Link from "next/link";
import { contactEmail, navigation } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="wordmark footer-wordmark" href="/">
            <span className="wordmark-mark" aria-hidden="true">D</span>
            <span>DEYUKTI<span className="wordmark-light">LABS</span></span>
          </Link>
          <p>People decisions for what comes next.</p>
        </div>
        <div className="footer-links">
          {navigation.filter((item) => !item.children).map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
          <Link href="/services">Services</Link>
          <Link href="/how-we-work/partner-framework">PARTNER Framework™</Link>
        </div>
        <div className="footer-contact">
          <span className="eyebrow">Start a conversation</span>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Deyukti Labs</span>
        <span>Thoughtful talent work. Practical technology.</span>
      </div>
    </footer>
  );
}