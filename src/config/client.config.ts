// ⚠️ FICHIER AUTO-GÉNÉRÉ — ne pas modifier manuellement
// Modifie CLIENT.md puis relance : npm run sync-client

export const clientConfig = {
  identity: {
    prenomDirigeant: "{PRENOM_DIRIGEANT}",
    nomDirigeant: "{NOM_DIRIGEANT}",
    nomEntreprise: "{NOM_ENTREPRISE}",
    nomLegal: "{NOM_LEGAL}",
    genreDirigeant: "masculin",
    founder: "{PRENOM_DIRIGEANT} {NOM_DIRIGEANT}",
  },
  contact: {
    telephone: "{TELEPHONE}",
    telephoneHref: "tel:{TELEPHONE}",
    telephoneUrgence: "{TELEPHONE_URGENCE}",
    email: "{EMAIL}",
    adresse: "{ADRESSE}",
    ville: "{VILLE}",
    codePostal: "{CODE_POSTAL}",
    departement: "{DEPARTEMENT}",
    region: "{REGION}",
    zoneIntervention: "{VILLE} et {ZONE_KM}km autour",
    zoneKm: "{ZONE_KM}",
  },
  horaires: {
    semaine: "{HORAIRES_SEMAINE}",
    samedi: "{HORAIRES_SAMEDI}",
    dimanche: "{HORAIRES_DIMANCHE}",
    urgence: "{HORAIRES_URGENCE}",
  },
  branding: {
    couleurPrimaireHue: "245",
    couleurAccentHue: "44",
  },
  social: {
    facebook: "{FACEBOOK_URL}",
    instagram: "{INSTAGRAM_URL}",
    google: "{GOOGLE_URL}",
  },
  domaine: "{DOMAINE}",
  url: "https://www.{DOMAINE}",
  legal: {
    siret: "{SIRET}",
    rge: "{RGE}",
    assuranceDecennale: "{ASSURANCE_DECENNALE}",
  },
  chiffres: {
    anneesExperience: 0,
    nombreInterventions: 0,
    noteGoogle: 0,
    nombreAvis: 0,
    anneeCreation: 0,
    delaiIntervention: "{DELAI_INTERVENTION}",
    disponibilite: "{DISPONIBILITE}",
    tauxSatisfaction: "{TAUX_SATISFACTION}",
  },
  geo: {
    latitude: "0",
    longitude: "0",
  },
  communes: [
    { name: "{COMMUNE_1}", postalCode: "{CODE_POSTAL_1}" },
    { name: "{COMMUNE_2}", postalCode: "{CODE_POSTAL_2}" },
    { name: "{COMMUNE_3}", postalCode: "{CODE_POSTAL_3}" },
  ],
  services: [
    { title: "{SERVICE_1_TITRE}", shortDescription: "{SERVICE_1_DESC_COURTE}", description: "{SERVICE_1_DESC_LONGUE}", icon: "Siren", slug: "/depannage-plomberie" },
    { title: "{SERVICE_2_TITRE}", shortDescription: "{SERVICE_2_DESC_COURTE}", description: "{SERVICE_2_DESC_LONGUE}", icon: "Wrench", slug: "/plomberie" },
    { title: "{SERVICE_3_TITRE}", shortDescription: "{SERVICE_3_DESC_COURTE}", description: "{SERVICE_3_DESC_LONGUE}", icon: "Bath", slug: "/renovation-salle-de-bain" },
    { title: "{SERVICE_4_TITRE}", shortDescription: "{SERVICE_4_DESC_COURTE}", description: "{SERVICE_4_DESC_LONGUE}", icon: "Flame", slug: "/chauffage" },
    { title: "{SERVICE_5_TITRE}", shortDescription: "{SERVICE_5_DESC_COURTE}", description: "{SERVICE_5_DESC_LONGUE}", icon: "Droplets", slug: "/chauffe-eau" },
    { title: "{SERVICE_6_TITRE}", shortDescription: "{SERVICE_6_DESC_COURTE}", description: "{SERVICE_6_DESC_LONGUE}", icon: "ClipboardCheck", slug: "/chauffage#entretien" },
  ],
  testimonials: [
    { name: "{TEMOIN_1_NOM}", rating: 5, text: "{TEMOIN_1_TEXTE}", date: "{TEMOIN_1_DATE}", source: "Google" },
    { name: "{TEMOIN_2_NOM}", rating: 5, text: "{TEMOIN_2_TEXTE}", date: "{TEMOIN_2_DATE}", source: "Google" },
    { name: "{TEMOIN_3_NOM}", rating: 5, text: "{TEMOIN_3_TEXTE}", date: "{TEMOIN_3_DATE}", source: "Google" },
    { name: "{TEMOIN_4_NOM}", rating: 4, text: "{TEMOIN_4_TEXTE}", date: "{TEMOIN_4_DATE}", source: "Google" },
    { name: "{TEMOIN_5_NOM}", rating: 5, text: "{TEMOIN_5_TEXTE}", date: "{TEMOIN_5_DATE}", source: "Google" },
    { name: "{TEMOIN_6_NOM}", rating: 5, text: "{TEMOIN_6_TEXTE}", date: "{TEMOIN_6_DATE}", source: "Google" },
    { name: "{TEMOIN_7_NOM}", rating: 5, text: "{TEMOIN_7_TEXTE}", date: "{TEMOIN_7_DATE}", source: "Google" },
    { name: "{TEMOIN_8_NOM}", rating: 4, text: "{TEMOIN_8_TEXTE}", date: "{TEMOIN_8_DATE}", source: "Google" },
    { name: "{TEMOIN_9_NOM}", rating: 5, text: "{TEMOIN_9_TEXTE}", date: "{TEMOIN_9_DATE}", source: "Google" },
    { name: "{TEMOIN_10_NOM}", rating: 5, text: "{TEMOIN_10_TEXTE}", date: "{TEMOIN_10_DATE}", source: "Google" },
  ],
  admin: {
    password: "{ADMIN_PASSWORD}",
  },
  seo: {
    metaTitleAccueil: "Plombier {VILLE} — {NOM_ENTREPRISE} | Dépannage 7j/7",
    metaDescAccueil: "Plombier chauffagiste à {VILLE}. Dépannage urgent 7j/7, installation, rénovation salle de bain, chauffage. Devis gratuit.",
    descriptionEntreprise: "Plombier chauffagiste à {VILLE}. Dépannage urgent 7j/7, installation, rénovation salle de bain, chauffage. Devis gratuit.",
    slogan: "Votre plombier à {VILLE} — Dépannage {DISPONIBILITE}, intervention rapide",
  },
} as const;

export type ClientConfig = typeof clientConfig;
