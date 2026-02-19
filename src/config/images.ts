/**
 * Mapping des images du site — 33 images uniques pour 46 emplacements.
 *
 * Pour remplacer un placeholder par une vraie image :
 * 1. Deposez votre image dans public/images/ (heroes/, sections/, pages/, realisations/)
 * 2. Renseignez le chemin dans la CONSTANTE PARTAGEE correspondante
 *    (ex: const HERO_GENERIQUE = "/images/heroes/generique-plombier.webp")
 * 3. Toutes les pages qui reutilisent cette image se mettent a jour automatiquement
 *
 * Laissez "" (vide) pour garder le placeholder avec le prompt.
 * Voir PROMPTS-IMAGES.md pour la liste complete des prompts et ratios.
 */

// ============================================================
// Images partagees (1 fichier → plusieurs emplacements)
// Modifiez la constante UNE SEULE FOIS, tous les doublons suivent.
// ============================================================

/** #7 — 21:9 — heroes blog, avis-clients, contact, a-propos, realisations + section cta-bandeau */
const HERO_GENERIQUE = "";          // /images/heroes/generique-plombier.webp

/** #3 — 16:9 — hero plomberie + page plomberie-tuyauterie */
const IMG_PLOMBERIE_HERO = "";      // /images/heroes/plomberie.webp

/** #4 — 16:9 — hero renovation-sdb + page renovation-complete + realisation sdb-oullins-after */
const IMG_RENOVATION_SDB = "";      // /images/heroes/renovation-sdb.webp

/** #15 — 4:3 — page douche-italienne + realisation douche-lyon7-after */
const IMG_DOUCHE_ITALIENNE = "";    // /images/pages/renovation-douche-italienne.webp

/** #16 — 4:3 — page PMR + realisation sdb-pmr-lyon6-after */
const IMG_SDB_PMR = "";             // /images/pages/renovation-pmr.webp

/** #17 — 3:2 — page chaudiere-gaz + realisation chaudiere-tassin-after */
const IMG_CHAUDIERE_GAZ = "";       // /images/pages/chauffage-chaudiere-gaz.webp

/** #19 — 3:2 — page plancher-chauffant + realisation plancher-ecully-after */
const IMG_PLANCHER_CHAUFFANT = "";  // /images/pages/chauffage-plancher-chauffant.webp

/** #8 — 4:3 — section urgence-card + realisation depannage-lyon2-before */
const IMG_FUITE_EAU = "";           // /images/sections/urgence-card.webp

// ============================================================
// Hero pages (11 emplacements → 7 images uniques)
// ============================================================
export const heroImages: Record<string, string> = {
  "accueil":              "", // #1 — /images/heroes/accueil.webp — 16:9
  "depannage-plomberie":  "", // #2 — /images/heroes/depannage-plomberie.webp — 16:9
  "plomberie":            IMG_PLOMBERIE_HERO,
  "renovation-sdb":       IMG_RENOVATION_SDB,
  "chauffage":            "", // #5 — /images/heroes/chauffage.webp — 16:9
  "chauffe-eau":          "", // #6 — /images/heroes/chauffe-eau.webp — 16:9
  "blog":                 HERO_GENERIQUE,
  "avis-clients":         HERO_GENERIQUE,
  "contact":              HERO_GENERIQUE,
  "a-propos":             HERO_GENERIQUE,
  "realisations":         HERO_GENERIQUE,
};

// ============================================================
// Sections (3 emplacements → 2 images uniques)
// ============================================================
export const sectionImages: Record<string, string> = {
  "cta-bandeau":          HERO_GENERIQUE,
  "urgence-card":         IMG_FUITE_EAU,
  "projet-card":          "", // #9 — /images/sections/projet-card.webp — 4:3
};

// ============================================================
// Pages specifiques (12 emplacements → 10 images uniques)
// ============================================================
export const pageImages: Record<string, string> = {
  // A propos
  "a-propos-fondateur":          "", // #10 — /images/pages/a-propos-fondateur.webp — 2:3
  "a-propos-equipe":             "", // #11 — /images/pages/a-propos-equipe.webp — 3:2
  // Plomberie
  "plomberie-robinetterie":      "", // #12 — /images/pages/plomberie-robinetterie.webp — 3:2
  "plomberie-tuyauterie":        IMG_PLOMBERIE_HERO,
  "plomberie-recherche-fuite":   "", // #13 — /images/pages/plomberie-recherche-fuite.webp — 3:2
  "plomberie-mise-aux-normes":   "", // #14 — /images/pages/plomberie-mise-aux-normes.webp — 3:2
  // Renovation salle de bain
  "renovation-douche-italienne": IMG_DOUCHE_ITALIENNE,
  "renovation-complete":         IMG_RENOVATION_SDB,
  "renovation-pmr":              IMG_SDB_PMR,
  // Chauffage
  "chauffage-chaudiere-gaz":     IMG_CHAUDIERE_GAZ,
  "chauffage-pac":               "", // #18 — /images/pages/chauffage-pac.webp — 3:2
  "chauffage-plancher-chauffant": IMG_PLANCHER_CHAUFFANT,
};

// ============================================================
// Realisations avant/apres (20 emplacements → 14 images uniques)
// ============================================================
export const realisationImages: Record<string, string> = {
  "sdb-villeurbanne-before":        "", // #20
  "sdb-villeurbanne-after":         "", // #21
  "cuisine-lyon3-before":           "", // #22
  "cuisine-lyon3-after":            "", // #23
  "chauffe-eau-caluire-before":     "", // #24
  "chauffe-eau-caluire-after":      "", // #25
  "pac-bron-before":                "", // #26
  "pac-bron-after":                 "", // #27
  "sdb-pmr-lyon6-before":           "", // #28
  "sdb-pmr-lyon6-after":            IMG_SDB_PMR,
  "chaudiere-tassin-before":        "", // #29
  "chaudiere-tassin-after":         IMG_CHAUDIERE_GAZ,
  "douche-lyon7-before":            "", // #30
  "douche-lyon7-after":             IMG_DOUCHE_ITALIENNE,
  "plancher-chauffant-ecully-before": "", // #31
  "plancher-chauffant-ecully-after":  IMG_PLANCHER_CHAUFFANT,
  "depannage-lyon2-before":         IMG_FUITE_EAU,
  "depannage-lyon2-after":          "", // #32
  "sdb-complete-oullins-before":    "", // #33
  "sdb-complete-oullins-after":     IMG_RENOVATION_SDB,
};
