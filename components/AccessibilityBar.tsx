"use client";

import React, { useEffect, useRef, useState } from "react";

export default function AccessibilityBar() {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [baseFontPercent, setBaseFontPercent] = useState(100);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    try {
      const storedContrast = window.localStorage.getItem("a11y:high-contrast");
      const storedFont = window.localStorage.getItem("a11y:font-percent");
      if (storedContrast === "1") {
        document.documentElement.classList.add("high-contrast");
        setIsHighContrast(true);
      }
      if (storedFont) {
        const parsed = Number(storedFont);
        if (!Number.isNaN(parsed) && parsed >= 75 && parsed <= 150) {
          document.documentElement.style.fontSize = `${parsed}%`;
          setBaseFontPercent(parsed);
        }
      }
    } catch {}
  }, []);

  const toggleContrast = () => {
    const next = !isHighContrast;
    setIsHighContrast(next);
    document.documentElement.classList.toggle("high-contrast", next);
    try {
      window.localStorage.setItem("a11y:high-contrast", next ? "1" : "0");
    } catch {}
  };

  const adjustFont = (delta: number) => {
    const next = Math.max(75, Math.min(150, baseFontPercent + delta));
    setBaseFontPercent(next);
    document.documentElement.style.fontSize = `${next}%`;
    try {
      window.localStorage.setItem("a11y:font-percent", String(next));
    } catch {}
  };

  return (
    <div className="mx-auto mt-3 w-full max-w-7xl px-6">
      <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm">
        <span className="mr-2 opacity-80">Accessibility</span>
        <button
          onClick={() => adjustFont(-10)}
          className="rounded-full bg-white/10 px-2 py-1 hover:bg-white/20"
          aria-label="Decrease font size"
        >
          A-
        </button>
        <button
          onClick={() => adjustFont(+10)}
          className="rounded-full bg-white/10 px-2 py-1 hover:bg-white/20"
          aria-label="Increase font size"
        >
          A+
        </button>
        <button
          onClick={toggleContrast}
          className="rounded-full bg-white/10 px-2 py-1 hover:bg-white/20"
          aria-pressed={isHighContrast}
          aria-label="Toggle high contrast"
        >
          {isHighContrast ? "High Contrast: On" : "High Contrast: Off"}
        </button>
      </div>
    </div>
  );
}
