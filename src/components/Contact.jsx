import { useState } from "react";
import { company } from "../data/content";
import Icon from "./Icon";

// ============================================================================
// Contact.jsx — coordonnées + formulaire de contact
// ============================================================================
// NOTE IMPORTANTE : ce formulaire ne fait qu'afficher un message de
// confirmation côté client (il n'envoie pas encore d'e-mail réel).
// Pour le rendre fonctionnel, il faudra le relier à un service comme
// Formspree, EmailJS, ou une petite API côté serveur.
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "715a16e9-1cb2-44f0-b8cd-fd9fb44cdfbd", // remplace par ta vraie Access Key
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Nouveau message de ${form.name} — site GHA`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" }); // vide le formulaire
      } else {
        alert("Une erreur est survenue, réessaie plus tard.");
      }
    } catch (error) {
      alert("Une erreur est survenue, réessaie plus tard.");
    }
  };

  return (
    <section id="contact" className="bg-ivory py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">
        {/* Colonne coordonnées */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal mb-4">
            Nous contacter
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-forest-dark mb-6">
            Discutons de votre besoin
          </h2>
          <p className="text-ink/70 leading-relaxed mb-8 max-w-md">
            Une administration, une entreprise, un particulier : décrivez-nous
            votre besoin en hygiène ou en assainissement, nous revenons vers
            vous rapidement.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-ink/80">
              <Icon name="phone" className="w-5 h-5 text-teal" />
              {company.phone}
            </li>
            <li className="flex items-center gap-3 text-ink/80">
              <Icon name="mail" className="w-5 h-5 text-teal" />
              {company.email}
            </li>
            <li className="flex items-center gap-3 text-ink/80">
              <Icon name="pin" className="w-5 h-5 text-teal" />
              {company.address}
            </li>
          </ul>
        </div>

        {/* Colonne formulaire */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-sm space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-forest-dark mb-1.5"
            >
              Nom complet
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Thales Sangare"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-forest/15 px-4 py-2.5 outline-none focus:border-teal transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-forest-dark mb-1.5"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="thales@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-forest/15 px-4 py-2.5 outline-none focus:border-teal transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-forest-dark mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-forest/15 px-4 py-2.5 outline-none focus:border-teal transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-forest hover:bg-forest-light text-ivory font-medium py-3 rounded-lg transition-colors"
          >
            Envoyer le message
          </button>

          {sent && (
            <p className="text-teal text-sm text-center" role="status">
              Merci, votre message a bien été pris en compte.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
