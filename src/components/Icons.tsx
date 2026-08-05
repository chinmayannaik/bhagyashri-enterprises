import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function PhoneIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6.5 3.5 9 3l1.8 4-2 1.4a12 12 0 0 0 5.4 5.4L15.5 12l4 1.8-.5 2.5a2 2 0 0 1-2.2 1.6A15.5 15.5 0 0 1 3.4 5.7 2 2 0 0 1 5 3.5z" />
    </svg>
  );
}

export function WhatsAppIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" />
      <path d="M8.5 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.2-.2.4 0 .7a6 6 0 0 0 2.6 2.3c.3.1.5.1.7-.1l.6-.7c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .8-.5 1.6-1.4 1.8-1 .2-2.4 0-4.4-1.3a9 9 0 0 1-3.3-3.7c-.6-1.3-.4-2.4.3-3.1z" />
    </svg>
  );
}

export function DirectionsIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

export function ClockIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function MedalIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="9" r="5" />
      <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />
    </svg>
  );
}

export function BoltIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
    </svg>
  );
}

export function RupeeIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M7 5h10M7 9h10M9 5c4 0 5 4 1 4H7l6 10" />
    </svg>
  );
}

export function ShieldIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.5 3 7.6 7 9 4-1.4 7-4.5 7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function PinIcon(p: IconProps) {
  return <DirectionsIcon {...p} />;
}

export function CraneIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 21h16" />
      <path d="M7 21V5h1l11 3" />
      <path d="M8 5 20 8" />
      <path d="M17 8v3" />
      <path d="M17 11h-2m4 0h-2" />
      <path d="M7 9h3" />
    </svg>
  );
}

export function LiftIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v8" />
      <path d="m8 7 4-4 4 4" />
      <rect x="5" y="13" width="14" height="7" rx="1.5" />
    </svg>
  );
}

export function RecoveryIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 17h11l4-5h3" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
      <path d="M3 17v-4h6l2 2" />
      <path d="M14 7l3 3" />
    </svg>
  );
}

export function TowIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M2 16h9v-4H5L3 15z" />
      <circle cx="6.5" cy="18" r="1.6" />
      <circle cx="16" cy="18" r="1.6" />
      <path d="M11 16h3l1-2h5v4h-2" />
      <path d="M11 12V7l6 3" />
    </svg>
  );
}

export function WrenchIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M15 5a4 4 0 0 0-5 5l-6 6 3 3 6-6a4 4 0 0 0 5-5l-2.5 2.5-2-2z" />
    </svg>
  );
}

export function AlertIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 2 20h20z" />
      <path d="M12 9v5" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function CarIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 15l1.5-5A2 2 0 0 1 7.4 8.5h9.2A2 2 0 0 1 18.5 10L20 15" />
      <path d="M3 15h18v3h-2v-2H5v2H3z" />
      <circle cx="7" cy="17.5" r="1.3" />
      <circle cx="17" cy="17.5" r="1.3" />
    </svg>
  );
}

export function SuvIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 14l1-5a2 2 0 0 1 2-1.5h11L21 12v3" />
      <path d="M3 15h18v3h-2v-2H5v2H3z" />
      <path d="M9 8v4M14 8v4" />
      <circle cx="7" cy="17.5" r="1.3" />
      <circle cx="17" cy="17.5" r="1.3" />
    </svg>
  );
}

export function RoadIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M7 3 4 21M17 3l3 18M12 4v2M12 10v2M12 16v2" />
    </svg>
  );
}

export function MailIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function CopyIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h8" />
    </svg>
  );
}

export function CheckIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function StarIcon(p: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9z" />
    </svg>
  );
}

export function ArrowIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

// Icon registry for string-driven lookups
export const iconMap = {
  clock: ClockIcon,
  medal: MedalIcon,
  bolt: BoltIcon,
  rupee: RupeeIcon,
  shield: ShieldIcon,
  pin: PinIcon,
  crane: CraneIcon,
  lift: LiftIcon,
  recovery: RecoveryIcon,
  tow: TowIcon,
  wrench: WrenchIcon,
  alert: AlertIcon,
  car: CarIcon,
  suv: SuvIcon,
  road: RoadIcon,
} as const;

export type IconName = keyof typeof iconMap;
