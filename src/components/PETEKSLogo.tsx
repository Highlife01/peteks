import { HTMLAttributes, useId } from "react";
import { cn } from "@/lib/utils";

interface PETEKSLogoProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const PETEKSLogo = ({
  className,
  variant = "default",
  size = "md",
  ...props
}: PETEKSLogoProps) => {
  const uniqueId = useId().replace(/:/g, "");

  const sizeClasses = {
    sm: "h-9 w-9",
    md: "h-11 w-11",
    lg: "h-16 w-16",
  };

  const textSizeClasses = {
    sm: "text-xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-4xl",
  };

  const subtextSizeClasses = {
    sm: "text-[8px]",
    md: "text-[10px]",
    lg: "text-xs",
  };

  const isLight = variant === "light";

  return (
    <div className={cn("flex items-center gap-3 select-none", className)} {...props}>
      {/* Luxury Architectural Hexagon Emblem */}
      <div className="relative flex items-center justify-center flex-shrink-0">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(sizeClasses[size], "transition-transform duration-300")}
        >
          <defs>
            <linearGradient id={`goldGrad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id={`goldStroke-${uniqueId}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B45309" />
              <stop offset="50%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Outer Hexagon Frame */}
          <path
            d="M50 8 L86 29 L86 71 L50 92 L14 71 L14 29 Z"
            stroke={`url(#goldStroke-${uniqueId})`}
            strokeWidth="5"
            strokeLinejoin="round"
            fill="rgba(245, 158, 11, 0.08)"
          />

          {/* Architectural Right Wing Solid Accent */}
          <path
            d="M50 8 L86 29 L86 71 L50 92 L50 68 L68 58 L68 42 L50 32 Z"
            fill={`url(#goldGrad-${uniqueId})`}
          />

          {/* Inner Geometric Pillar */}
          <path
            d="M32 38 L50 28 L50 72 L32 62 Z"
            fill={`url(#goldGrad-${uniqueId})`}
            fillOpacity="0.45"
          />
        </svg>
      </div>

      {/* PETEKS Brand Typography */}
      <div className="flex flex-col">
        <span
          className={cn(
            "font-heading font-black leading-none tracking-tight",
            textSizeClasses[size],
            isLight ? "text-white" : "text-slate-900 dark:text-white"
          )}
        >
          PETEKS
        </span>
        <span
          className={cn(
            "font-bold uppercase tracking-[0.14em] mt-1 leading-none",
            subtextSizeClasses[size],
            isLight
              ? "text-amber-400"
              : "bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 dark:from-amber-400 dark:to-amber-300 bg-clip-text text-transparent"
          )}
        >
          MİMARLIK • İNŞAAT • TASARIM
        </span>
      </div>
    </div>
  );
};

export default PETEKSLogo;
