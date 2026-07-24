import { about } from "../data/content";

// ============================================================================
// About.jsx — section "À propos" (historique + nature de l'entreprise)
// ============================================================================
export default function About() {
  return (
    <section id="a-propos" className="bg-ivory py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
        {/* Colonne de gauche : titre + étiquette, reste "collée" en haut au scroll */}
        <div className="md:sticky md:top-28">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal mb-4">
            Qui sommes-nous
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-forest-dark leading-tight">
            Une entreprise née d'une conviction
          </h2>
        </div>

        {/* Colonne de droite : le texte */}
        <div className="space-y-6 text-ink/80 text-lg leading-relaxed">
          <p className="text-xl text-ink font-medium leading-relaxed">
            {about.intro}
          </p>
          <p>{about.body}</p>
          <p>{about.nature}</p>
        </div>
      </div>
    </section>
  );
}
