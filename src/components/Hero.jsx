import { company } from "../data/content";

// ============================================================================
// Hero.jsx — première section, celle que l'on voit en arrivant sur le site
// ============================================================================
// Élément signature du design : une "ligne de collecte" pointillée et animée
// qui traverse le fond, comme le trajet d'un camion en tournée. C'est un
// pur SVG décoratif (aria-hidden), léger, pas d'image ni de librairie.
export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-forest text-ivory pt-32 pb-28 md:pt-44 md:pb-40"
    >
      {/* --- Fond décoratif : dégradé + ligne de collecte animée --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest to-forest-dark" />
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="route-line"
          d="M-50 480 C 200 380, 350 520, 550 400 S 900 200, 1250 260"
          fill="none"
          stroke="#2A9D8F"
          strokeWidth="2"
          strokeDasharray="10 14"
        />
        <path
          d="M-50 480 C 200 380, 350 520, 550 400 S 900 200, 1250 260"
          fill="none"
          stroke="#2A9D8F"
          strokeWidth="2"
          strokeOpacity="0.15"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Étiquette "eyebrow" en police mono, comme une étiquette de dossier officiel */}
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal-light mb-6">
          {company.country} — Hygiène · Assainissement · Environnement
        </p>

        <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.08] max-w-3xl">
          Un cadre de vie plus sain, un environnement mieux protégé.
        </h1>

        <p className="mt-6 max-w-xl text-ivory/75 text-lg leading-relaxed">
          {company.name} accompagne collectivités, entreprises et particuliers
          dans la collecte des déchets, l'assainissement et la protection de
          l'environnement, partout en République de Guinée.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#services"
            className="bg-gold hover:bg-gold-dark text-forest-dark font-medium px-6 py-3 rounded-full transition-colors"
          >
            Découvrir nos services
          </a>
          <a
            href="#contact"
            className="border border-ivory/30 hover:border-ivory/60 text-ivory px-6 py-3 rounded-full transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
