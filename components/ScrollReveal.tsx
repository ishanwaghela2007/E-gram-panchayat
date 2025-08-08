"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Reveals children when they enter the viewport by toggling Tailwind classes.
 */
export default function ScrollReveal({
  children,
  className = "",
  threshold = 0.18,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={
        `${className} transition-all duration-700 ease-out will-change-transform ` +
        (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")
      }
    >
      {children}
    </div>
  );
}
