"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/site";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Deyukti Labs home" onClick={() => setMenuOpen(false)}>
          <span className="wordmark-mark" aria-hidden="true">D</span>
          <span>DEYUKTI<span className="wordmark-light">LABS</span></span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <div className="nav-item" key={item.href}>
              <Link href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
              {item.children && (
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setMenuOpen(false)}>{child.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <Link className="header-contact" href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}