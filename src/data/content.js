// ============================================================================
// CONTENU DU SITE — GBEREDOU HYGIÈNE ET ASSAINISSEMENT
// ============================================================================
// Toutes les informations "métier" (textes, listes, coordonnées) sont
// regroupées ici plutôt que dispersées dans les composants.
// -> Pour modifier un texte du site, c'est presque toujours ICI que ça se
//    passe, pas besoin de toucher au code des composants React.
// ============================================================================

// Informations générales sur l'entreprise (utilisées dans le Header, le
// Footer et la section Contact). À COMPLÉTER avec les vraies coordonnées.
export const company = {
  name: "GBEREDOU Hygiène et Assainissement",
  shortName: "GHA",
  tagline: "Un cadre de vie plus sain, un environnement mieux protégé.",
  country: "République de Guinée",
  // TODO: remplacer par les vraies coordonnées de l'entreprise
  phone: "+224 XX XX XX XX",
  email: "contact@gha-guinee.com",
  address: "Siège social — République de Guinée",
};

// Liens de la navigation principale (Header) — l'"id" correspond à
// l'attribut id="..." posé sur chaque <section> dans les composants.
export const navLinks = [
  { label: "Accueil", id: "accueil" },
  { label: "À propos", id: "a-propos" },
  { label: "Services", id: "services" },
  { label: "Secteurs", id: "secteurs" },
  { label: "Engagements", id: "engagements" },
  { label: "Contact", id: "contact" },
];

// Article 5 : champ d'intervention -> présenté comme une grille de services.
// "icon" fait référence à un symbole défini dans src/components/Icon.jsx
export const services = [
  {
    icon: "truck",
    title: "Collecte et gestion des déchets",
    description:
      "Collecte, transport et gestion des déchets solides pour collectivités, entreprises et particuliers.",
  },
  {
    icon: "sparkles",
    title: "Nettoyage industriel & administratif",
    description:
      "Nettoyage de locaux industriels, administratifs et domestiques selon les normes en vigueur.",
  },
  {
    icon: "drop",
    title: "Curage des ouvrages d'assainissement",
    description:
      "Curage de caniveaux, fossés et ouvrages d'assainissement pour prévenir les inondations et l'insalubrité.",
  },
  {
    icon: "tank",
    title: "Vidange de fosses septiques",
    description:
      "Intervention rapide et sécurisée pour la vidange des fosses septiques.",
  },
  {
    icon: "shield",
    title: "Désinfection, désinsectisation, dératisation",
    description:
      "Traitements sanitaires pour éliminer les nuisibles et les risques de contamination.",
  },
  {
    icon: "leaf",
    title: "Entretien des espaces verts",
    description:
      "Aménagement et entretien régulier des espaces verts pour un cadre agréable et sain.",
  },
  {
    icon: "building",
    title: "Nettoyage après chantier",
    description:
      "Remise en état complète des sites après travaux de construction ou de rénovation.",
  },
  {
    icon: "cross",
    title: "Déchets hospitaliers",
    description:
      "Gestion des déchets hospitaliers dans le strict respect des normes sanitaires en vigueur.",
  },
  {
    icon: "megaphone",
    title: "Sensibilisation à l'hygiène",
    description:
      "Campagnes de sensibilisation à l'hygiène et à la protection de l'environnement.",
  },
  {
    icon: "box",
    title: "Fourniture de matériel d'hygiène",
    description:
      "Fourniture de matériels et d'équipements d'hygiène adaptés à chaque besoin.",
  },
  {
    icon: "compass",
    title: "Conseil & accompagnement",
    description:
      "Études, conseil et accompagnement en matière d'assainissement et d'environnement.",
  },
];

// Article 6 : public cible.
export const sectors = [
  "Administrations publiques",
  "Collectivités locales",
  "Entreprises publiques et privées",
  "Sociétés minières et industrielles",
  "Établissements scolaires et universitaires",
  "Centres de santé et hôpitaux",
  "Organisations nationales et internationales",
  "ONG et associations",
  "Hôtels, restaurants et commerces",
  "Particuliers",
];

// Article 7 : engagements de l'entreprise.
export const commitments = [
  "Fournir des prestations de haute qualité",
  "Respecter les normes de sécurité, d'hygiène et d'environnement",
  "Protéger la santé des travailleurs, des clients et des communautés",
  "Promouvoir l'innovation et l'amélioration continue",
  "Garantir la transparence, l'intégrité et le professionnalisme",
  "Contribuer au développement durable de la République de Guinée",
];

// Article 3 : historique / présentation (section "À propos").
export const about = {
  intro:
    "GBEREDOU Hygiène et Assainissement est née de la volonté de contribuer à l'amélioration du cadre de vie des populations à travers des services modernes, efficaces et durables.",
  body:
    "Face aux défis liés à l'insalubrité, à la mauvaise gestion des déchets et à la dégradation de l'environnement, ses fondateurs ont décidé de créer une entreprise capable d'offrir des solutions innovantes, fiables et adaptées aux besoins des collectivités, des entreprises et des particuliers. Depuis sa création, GHA œuvre pour promouvoir une culture de la propreté, de la prévention sanitaire et de la protection de l'environnement.",
  nature:
    "GBEREDOU Hygiène et Assainissement est une entreprise de droit guinéen qui exerce ses activités dans les domaines de l'hygiène publique, de l'assainissement, de la gestion des déchets, de la protection de l'environnement, du nettoyage industriel et de la prestation de services, dans le respect des lois de la République de Guinée et des principes du développement durable.",
};
