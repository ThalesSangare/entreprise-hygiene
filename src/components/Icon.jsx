// ============================================================================
// Icon.jsx — petites icônes SVG "faites maison"
// ============================================================================
// Plutôt que d'ajouter une librairie externe pour quelques icônes, on les
// dessine nous-mêmes en SVG. `currentColor` fait que chaque icône prend
// automatiquement la couleur du texte définie par Tailwind (text-teal, etc.)
// ============================================================================

// Chaque tracé correspond à une clé "icon" utilisée dans src/data/content.js
const paths = {
  truck: "M2 7h11v8H2V7zm11 3h4l3 3v2h-2m-9-5v5m-3 0a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0z",
  sparkles: "M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2zM5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15zm14-1l.6 1.7L21 16l-1.4.6L19 18l-.6-1.4L17 16l1.4-.3L19 14z",
  drop: "M12 2s7 7.5 7 12a7 7 0 11-14 0c0-4.5 7-12 7-12z",
  tank: "M4 8h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8zm2-4h12v4H6V4zm3 8v6m6-6v6",
  shield: "M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z",
  leaf: "M20 4c-8 0-14 6-14 14 8 0 14-6 14-14zM6 18C6 12 10 8 16 6",
  building: "M4 21V7l8-4 8 4v14M9 21v-6h6v6M9 11h.01M15 11h.01M9 15h.01M15 15h.01",
  cross: "M12 3v18M3 12h18M6 6l12 12M18 6L6 18",
  megaphone: "M3 10v4h3l6 4V6l-6 4H3zm14-2a4 4 0 010 8m2-11a8 8 0 010 14",
  box: "M3 8l9-5 9 5-9 5-9-5zm0 0v9l9 5 9-5V8M12 13v9",
  compass: "M12 2a10 10 0 100 20 10 10 0 000-20zm3.5 6.5l-2 5-5 2 2-5 5-2z",
  menu: "M3 6h18M3 12h18M3 18h18",
  close: "M6 6l12 12M18 6L6 18",
  mail: "M3 6h18v12H3V6zm0 0l9 7 9-7",
  phone: "M4 4h4l2 5-2.5 1.5a12 12 0 006 6L15 14l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  pin: "M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13zm0-10a3 3 0 100-6 3 3 0 000 6z",
};

export default function Icon({ name, className = "w-6 h-6" }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
