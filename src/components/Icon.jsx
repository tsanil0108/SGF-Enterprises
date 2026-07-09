const ICONS = {
  home: 'M3 11l9-8 9 8 M5 10v10h14V10',
  pin: 'M12 22s7-7.58 7-12a7 7 0 10-14 0c0 4.42 7 12 7 12z M12 13a3 3 0 100-6 3 3 0 000 6z',
  rupee: 'M6 4h12 M6 9h12 M6 4c4 0 7 2 7 5s-3 5-7 5h9 M9 14l6 6',
  download: 'M12 3v12 M8 11l4 4 4-4 M4 19h16',
  shield: 'M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z',
  car: 'M4 16V9l2-5h12l2 5v7 M2 16h20 M6 16a2 2 0 104 0 M14 16a2 2 0 104 0',
  lift: 'M8 8l4-4 4 4 M8 16l4 4 4-4 M12 4v16',
  rooftop: 'M4 20V10l8-6 8 6v10 M9 20v-6h6v6',
  drop: 'M12 3s6 7 6 11a6 6 0 11-12 0c0-4 6-11 6-11z',
  cctv: 'M4 6h13l3 3-3 3H4z M7 12v8 M4 20h10',
  wifi: 'M2 9a15 15 0 0120 0 M5 12.5a10 10 0 0114 0 M8.5 16a5 5 0 017 0 M12 20h.01',
  podium: 'M4 20V13h16v7 M8 13V6h8v7 M11 6V3h2v3',
  marble: 'M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21 8 13.5 2.5 9h7z',
  amenity: 'M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21 8 13.5 2.5 9h7z',
  connectivity: 'M4 20l6-16 4 10 3-6 3 12 M4 20h16',
  floorplan: 'M3 3h18v18H3z M3 12h18 M12 3v18',
  play: 'M8 5l12 7-12 7z',
  check: 'M5 13l4 4L19 7',
  phone: 'M4 5c0 8 7 15 15 15l3-4-6-3-2 2c-3-1.5-5-3.5-6-6l2-2-3-6z',
  chevronDown: 'M6 9l6 6 6-6',
  solar: 'M12 8a4 4 0 100 8 4 4 0 000-8z M12 2v2 M12 20v2 M4 12H2 M22 12h-2 M4.9 4.9l1.4 1.4 M17.7 17.7l1.4 1.4 M4.9 19.1l1.4-1.4 M17.7 6.3l1.4-1.4',
  ev: 'M13 2L4 14h6l-1 8 9-12h-6l1-8z',
  waste: 'M4 7h16 M8 7V4h8v3 M6 7l1 13h10l1-13',
  // Added — used by QuickFactsBar / FeatureStrip / FloorPlanCard for
  // "best value" callouts and the "View Plan" / "Enquire" link arrows.
  diamond: 'M3.5 9h17 M8 3h8l4.5 6L12 21 3.5 9 8 3z',
  arrow: 'M5 12h14 M13 6l6 6-6 6',
};

export default function Icon({ name, size = 20, className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={ICONS[name] || ICONS.home} />
    </svg>
  );
}