// ../components/icons/AboutIcons.jsx

export const FireIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2c-1.5 3-4 6-4 9 0 2.5 2 4.5 4.5 4.5S17 13.5 17 11c0-3-4-7-5-9z"/>
    <path d="M12 14c-1.5 0-2.5-1-2.5-2.5 0-1.5 1-3 2.5-4.5 1.5 1.5 2.5 3 2.5 4.5 0 1.5-1 2.5-2.5 2.5z"/>
    <path d="M12 22c-3 0-5-2-5-4.5 0-1.5 1-3 2.5-4 .5 1 1.5 1.5 2.5 1.5s2-.5 2.5-1.5c1.5 1 2.5 2.5 2.5 4 0 2.5-2 4.5-5 4.5z"/>
  </svg>
);

export const LeafIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2C8 6 4 10 4 14c0 4 4 8 8 8s8-4 8-8c0-4-4-8-8-8z"/>
    <path d="M12 2v20"/>
    <path d="M4 14h16"/>
    <path d="M8 6c2 2 4 4 4 8"/>
    <path d="M16 6c-2 2-4 4-4 8"/>
  </svg>
);

export const CommunityIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export const ChefHatIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 13.5V19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5.5"/>
    <path d="M8 3v3a4 4 0 0 0 8 0V3"/>
    <path d="M9 3h6"/>
    <path d="M12 6v10"/>
    <path d="M9 9h6"/>
    <circle cx="12" cy="13" r="2"/>
  </svg>
);

export const TimelineIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
    <path d="M8 2L5 5"/>
    <path d="M16 2l3 3"/>
  </svg>
);

export const LocationIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const StarIcon = ({ className = "w-6 h-6", filled = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export const CalendarIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <path d="M8 14h.01"/>
    <path d="M12 14h.01"/>
    <path d="M16 14h.01"/>
    <path d="M8 18h.01"/>
    <path d="M12 18h.01"/>
    <path d="M16 18h.01"/>
  </svg>
);

export const AwardIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    <path d="M8.5 14.5L6 22"/>
    <path d="M15.5 14.5L18 22"/>
  </svg>
);

export const UtensilsIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
    <path d="M7 2v20"/>
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
  </svg>
);

export const MusicIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </svg>
);

export const DrinkIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10 13v7"/>
    <path d="M14 13v7"/>
    <path d="M4 3h16l-2 10H6L4 3z"/>
    <path d="M8 3l1 7"/>
    <path d="M16 3l-1 7"/>
    <path d="M12 10v10"/>
    <path d="M9 20h6"/>
  </svg>
);

export const PartyIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12h6"/>
    <path d="M12 9v6"/>
    <circle cx="12" cy="12" r="10"/>
    <path d="M4 4l2 2"/>
    <path d="M20 4l-2 2"/>
    <path d="M4 20l2-2"/>
    <path d="M20 20l-2-2"/>
  </svg>
);

export const QuoteIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10 11h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10"/>
    <path d="M19 11h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10"/>
    <path d="M6 21l4-4"/>
    <path d="M18 21l-4-4"/>
  </svg>
);

export const SmokeIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 12c0-3 2-5 5-5s5 2 5 5"/>
    <path d="M18 12c0-3-2-5-5-5"/>
    <path d="M12 6V3"/>
    <path d="M8 3h8"/>
    <path d="M4 18c0 2 2 3 4 3h8c2 0 4-1 4-3"/>
    <path d="M16 15c2 0 4 1 4 3"/>
    <path d="M8 15c-2 0-4 1-4 3"/>
  </svg>
);