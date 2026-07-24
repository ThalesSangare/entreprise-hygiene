import { sectors } from "../data/content";

// ============================================================================
// Sectors.jsx — publics cibles de l'entreprise (Article 6)
// ============================================================================
// Présenté comme une liste de "badges" plutôt qu'une grille de cartes :
// ce sont des catégories de clients, pas des contenus à détailler chacun.
export default function Sectors() {
  return (
    <section id="secteurs" className="bg-ivory py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal mb-4">
            Qui accompagnons-nous
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-forest-dark">
            Nos services s'adressent à
          </h2>
        </div>

        <ul className="flex flex-wrap gap-3">
          {sectors.map((sector) => (
            <li
              key={sector}
              className="border border-forest/15 bg-white text-forest-dark text-sm px-5 py-2.5 rounded-full"
            >
              {sector}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
