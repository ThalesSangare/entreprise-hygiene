import { services } from "../data/content";
import Icon from "./Icon";

// ============================================================================
// Services.jsx — grille des domaines d'intervention (Article 5)
// ============================================================================
// On utilise une simple grille (pas de numérotation 01/02/03) car ces
// services ne forment pas une séquence : ce sont des activités parallèles,
// donc une numérotation aurait laissé croire à un ordre qui n'existe pas.
export default function Services() {
  return (
    <section id="services" className="bg-forest-dark text-ivory py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal-light mb-4">
            Nos domaines d'intervention
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl">
            Des solutions complètes, du terrain au conseil
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10 rounded-2xl overflow-hidden">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-forest-dark p-8 hover:bg-forest transition-colors"
            >
              <Icon name={service.icon} className="w-8 h-8 text-teal-light mb-5" />
              <h3 className="font-display font-semibold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-ivory/65 text-sm leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
