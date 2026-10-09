"use client";

import Link from "next/link";
import { useState } from "react";
import { headerNavigation } from "@/lib/site";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  function closeMenu() {
    setMenuOpen(false);
    setExpandedItem(null);
  }

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
          onClick={() => {
            setMenuOpen(!menuOpen);
            if (menuOpen) setExpandedItem(null);
          }}
        >
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <ul className="primary-nav-list">
            {headerNavigation.map((item) => {
              const submenuId = `submenu-${item.label.toLowerCase().replaceAll(" ", "-")}`;
              const isExpanded = expandedItem === item.label;

              return (
                <li className={`nav-item${item.children ? " has-children" : ""}`} key={item.label}>
                  <div className="nav-item-row">
                    <Link className="nav-link" href={item.href} onClick={closeMenu}>{item.label}</Link>
                    {item.children && (
                      <button
                        className="nav-disclosure"
                        type="button"
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label} submenu`}
                        aria-expanded={isExpanded}
                        aria-controls={submenuId}
                        onClick={() => setExpandedItem(isExpanded ? null : item.label)}
                      >
                        <span aria-hidden="true" />
                      </button>
                    )}
                  </div>
                  {item.children && (
                    <ul id={submenuId} className={`nav-dropdown${isExpanded ? " is-expanded" : ""}`}>
                      {item.children.map((child) => (
                        <li key={`${item.label}-${child.label}`}>
                          <Link href={child.href} onClick={closeMenu}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <Link className="header-contact" href="/contact" onClick={closeMenu}>Let&apos;s Talk <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}