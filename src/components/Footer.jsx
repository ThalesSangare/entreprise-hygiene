import { company, navLinks } from "../data/content";

// ============================================================================
// Footer.jsx — pied de page
// ============================================================================
export default function Footer() {
  const year = new Date().getFullYear();

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-dark text-ivory/60 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {year} {company.name}. Tous droits réservés.
        </p>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className="hover:text-ivory transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
