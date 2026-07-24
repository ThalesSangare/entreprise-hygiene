# Site web — GBEREDOU Hygiène et Assainissement (GHA)

Site vitrine pour l'entreprise GBEREDOU Hygiène et Assainissement,
construit avec **React**, **Vite** et **Tailwind CSS v4**.

## Démarrer le projet

```bash
npm install
npm run dev
```

Le site est alors disponible sur http://localhost:5173

## Construire la version finale (à mettre en ligne)

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/` : c'est ce dossier qu'il
faut déposer chez un hébergeur (Vercel, Netlify, Hostinger, etc.).

## Où modifier le contenu du site ?

Presque tous les textes (services, engagements, coordonnées, secteurs...)
sont regroupés dans **`src/data/content.js`**. C'est le premier fichier à
ouvrir pour :

- changer le numéro de téléphone, l'e-mail ou l'adresse (objet `company`)
- ajouter/retirer un service
- corriger un texte de présentation

## Structure du projet

```
src/
  components/   -> un composant par section (Header, Hero, Services...)
  data/         -> content.js, le contenu du site
  index.css     -> couleurs, polices, styles globaux
  App.jsx       -> assemble toutes les sections
public/
  favicon.svg   -> icône de l'onglet du navigateur
```

## Ce qui reste à faire

- [ ] Remplir les vraies coordonnées dans `src/data/content.js` (téléphone, e-mail, adresse)
- [ ] Remplacer le favicon par le vrai logo de l'entreprise si disponible
- [ ] Brancher le formulaire de contact à un service d'envoi réel
      (ex. [Formspree](https://formspree.io) ou [EmailJS](https://www.emailjs.com/)) —
      pour l'instant il affiche juste un message de confirmation sans
      envoyer d'e-mail
- [ ] Réserver un nom de domaine et choisir un hébergeur
