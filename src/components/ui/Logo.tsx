// src/components/ui/Logo.tsx
import React from 'react';

interface LogoProps {
  className?: string;
  dotColor?: string; // წერტილის ფერის შესაცვლელად (სურვილისამებრ)
}

export function Logo({ className = "", dotColor = "text-blue-500" }: LogoProps) {
  return (
    <span className={`font-bold text-2xl tracking-tighter transition-colors duration-300 ${className}`}>
      Esti<span className={dotColor}>.</span>ge
    </span>
  );
}