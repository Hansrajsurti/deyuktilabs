"use client";

import { useRef, useState } from "react";

const principles = [
  ["P", "Perceive", "Understand the business, growth plans and talent problem."],
  ["A", "Assess", "Diagnose capability, hiring and workforce gaps."],
  ["R", "Roadmap", "Create an executable talent strategy."],
  ["T", "Transform", "Execute hiring and improve talent processes."],
  ["N", "Nurture", "Build stronger candidate and stakeholder relationships."],
  ["E", "Elevate", "Strengthen organisational capability."],
  ["R", "Reinforce", "Build repeatable systems, intelligence and automation."],
];

export default function PartnerFrameworkLetters() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const detailRef = useRef(null);
  const [letter, title, description] = principles[selectedIndex];

  function selectPrinciple(index) {
    setSelectedIndex(index);
    detailRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "nearest",
    });
  }

  return (
    <div className="partner-signature">
      <div className="partner-signature-word" role="group" aria-label="Select a PARTNER framework principle">
        {principles.map(([principleLetter, principleTitle], index) => (
          <button
            className={`partner-letter${index === selectedIndex ? " is-active" : ""}`}
            type="button"
            key={`${principleLetter}-${principleTitle}`}
            aria-label={`Show ${principleLetter}: ${principleTitle}`}
            aria-pressed={index === selectedIndex}
            aria-controls="partner-signature-detail"
            onClick={() => selectPrinciple(index)}
          >
            {principleLetter}
          </button>
        ))}
      </div>
      <span className="partner-signature-label">PARTNER FRAMEWORK · SELECT A LETTER</span>
      <div className="partner-signature-detail" id="partner-signature-detail" ref={detailRef} aria-live="polite" tabIndex={-1}>
        <span className="eyebrow">{letter} / {title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
