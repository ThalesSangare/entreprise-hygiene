import { useEffect, useState } from "react";
import { company, navLinks } from "../data/content";
import Icon from "./Icon";

// ============================================================================
// Header.jsx — barre de navigation fixe en haut de page
// ============================================================================
export default function Header() {
  // `scrolled` sert à assombrir légèrement le fond du header une fois que
  // l'utilisateur a commencé à défiler, pour le détacher visuellement du Hero.
  const [scrolled, setScrolled] = useState(false);
  // `menuOpen` gère l'affichage du menu mobile (hamburger).
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile puis fait défiler jusqu'à la section ciblée.
  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-forest-dark/95 backdrop-blur shadow-lg shadow-black/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo texte simple : à remplacer par une image si le client a un logo */}
        <button
          onClick={() => goTo("accueil")}
          className="font-display font-semibold text-ivory text-lg tracking-tight"
        >
          {company.shortName}
          <span className="hidden sm:inline text-ivory/60 font-normal text-sm ml-2">
            {company.name}
          </span>
        </button>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className="text-sm text-ivory/80 hover:text-teal-light transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => goTo("contact")}
            className="text-sm font-medium bg-gold hover:bg-gold-dark text-forest-dark px-4 py-2 rounded-full transition-colors"
          >
            Demander un devis
          </button>
        </nav>

        {/* Bouton hamburger (mobile uniquement) */}
        <button
          className="md:hidden text-ivory"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <Icon name={menuOpen ? "close" : "menu"} className="w-6 h-6" />
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <nav className="md:hidden bg-forest-dark px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className="text-left text-ivory/90 py-1"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => goTo("contact")}
            className="text-sm font-medium bg-gold text-forest-dark px-4 py-2 rounded-full w-fit"
          >
            Demander un devis
          </button>
        </nav>
      )}
    </header>
  );
}
