import { commitments } from "../data/content";

// ============================================================================
// Commitments.jsx — engagements de l'entreprise (Article 7)
// ============================================================================
// Ici, l'ordre n'a pas de sens particulier non plus : on garde une liste
// simple avec une puce en forme de trait, dans l'esprit d'une charte
// d'engagements plutôt qu'une checklist numérotée.
export default function Commitments() {
  return (
    <section id="engagements" className="bg-forest text-ivory py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal-light mb-4">
            Notre charte
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl">
            Nos engagements
          </h2>
        </div>

        <ul className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {commitments.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span className="mt-2.5 h-px w-6 bg-gold shrink-0" aria-hidden="true" />
              <span className="text-ivory/85 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
