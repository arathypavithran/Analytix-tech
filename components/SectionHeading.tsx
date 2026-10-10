"use client";

import Reveal from "./Reveal";

interface SectionHeadingProps {
  tag?: string;
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  tag,
  badge,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const displayTag = tag || badge;

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"
      } ${className}`}
    >
      {displayTag && (
        <Reveal delay={0.05}>
          <div className={`mb-4 ${isCenter ? "flex justify-center" : ""}`}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(72,139,255,0.3)] bg-[#0A1930]/70 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-wider text-[#168BFF] uppercase shadow-[0_0_15px_rgba(22,139,255,0.2)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#168BFF] animate-pulse" />
              {displayTag}
            </span>
          </div>
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F8FF] leading-[1.15]">
          <span className="text-gradient-blue">{title}</span>
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.15}>
          <p className="mt-4 text-base sm:text-lg text-[#96A8C2] leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
