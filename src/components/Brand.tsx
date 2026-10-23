import Image from "next/image";
import logoMark from "@/assets/images/logo-cropped.jpg";
import { site } from "@/content/content";

export function FaceLine({ className = "", color = "#E6007E" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 220 180"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M28 118c18-6 32-28 36-52 3-18 12-34 30-42 14-6 32-4 44 8 10 10 16 26 14 42-2 18 4 34 18 44 8 6 20 10 32 8"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M52 92c8 4 14 14 12 26-8 22-32 28-46 14"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M96 48c10 2 16 10 18 20M118 86c10 2 16 12 14 22"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LogoLockup({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative block h-14 w-[93px] shrink-0 overflow-hidden rounded-xl bg-black sm:h-[60px] sm:w-[100px] ${className}`}
    >
      <span className="absolute inset-[7px] sm:inset-2">
        <Image
          src={logoMark}
          alt={site.name}
          fill
          sizes="100px"
          className="object-contain object-center"
          priority
        />
      </span>
    </span>
  );
}

export function RotatingBadge({ className = "" }: { className?: string }) {
  const text = "RBS MAKE-OVER · UNISEX · RBS MAKE-OVER · UNISEX · ";
  return (
    <div
      className={`relative grid place-items-center ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="spin-slow h-full w-full">
        <defs>
          <path
            id="badge-circle"
            d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
          />
        </defs>
        <text fill="currentColor" fontSize="13.5" letterSpacing="3.4">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="absolute font-display text-2xl italic text-pink">RBS</span>
    </div>
  );
}
