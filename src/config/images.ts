/**
 * Mapping des images du site (46 images au total).
 *
 * Pour remplacer un placeholder par une vraie image :
 * 1. Deposez votre image dans public/images/ (heroes/, sections/, pages/, realisations/)
 * 2. Renseignez le chemin ci-dessous (ex: "/images/heroes/accueil.webp")
 * 3. L'image remplace automatiquement le placeholder
 *
 * Laissez "" (vide) pour garder le placeholder avec le prompt.
 * Voir PROMPTS-IMAGES.md pour la liste complete des prompts et ratios.
 */

// --- Hero pages (11 images) ---
export const heroImages: Record<string, string> = {
  "accueil":              "", // /images/heroes/accueil.webp — 16:9
  "depannage-plomberie":  "", // /images/heroes/depannage-plomberie.webp — 16:9
  "plomberie":            "", // /images/heroes/plomberie.webp — 16:9
  "renovation-sdb":       "", // /images/heroes/renovation-sdb.webp — 16:9
  "chauffage":            "", // /images/heroes/chauffage.webp — 16:9
  "chauffe-eau":          "", // /images/heroes/chauffe-eau.webp — 16:9
  "blog":                 "", // /images/heroes/blog.webp — 21:9
  "avis-clients":         "", // /images/heroes/avis-clients.webp — 21:9
  "contact":              "", // /images/heroes/contact.webp — 21:9
  "a-propos":             "", // /images/heroes/a-propos.webp — 21:9
  "realisations":         "", // /images/heroes/realisations.webp — 21:9
};

// --- Sections (3 images) ---
export const sectionImages: Record<string, string> = {
  "cta-bandeau":          "", // /images/sections/cta-bandeau.webp — 21:9
  "urgence-card":         "", // /images/sections/urgence-card.webp — 4:3
  "projet-card":          "", // /images/sections/projet-card.webp — 4:3
};

// --- Pages specifiques (12 images) ---
export const pageImages: Record<string, string> = {
  // A propos
  "a-propos-fondateur":          "", // /images/pages/a-propos-fondateur.webp — 2:3
  "a-propos-equipe":             "", // /images/pages/a-propos-equipe.webp — 3:2
  // Plomberie
  "plomberie-robinetterie":      "", // /images/pages/plomberie-robinetterie.webp — 3:2
  "plomberie-tuyauterie":        "", // /images/pages/plomberie-tuyauterie.webp — 3:2
  "plomberie-recherche-fuite":   "", // /images/pages/plomberie-recherche-fuite.webp — 3:2
  "plomberie-mise-aux-normes":   "", // /images/pages/plomberie-mise-aux-normes.webp — 3:2
  // Renovation salle de bain
  "renovation-douche-italienne": "", // /images/pages/renovation-douche-italienne.webp — 4:3
  "renovation-complete":         "", // /images/pages/renovation-complete.webp — 4:3
  "renovation-pmr":              "", // /images/pages/renovation-pmr.webp — 4:3
  // Chauffage
  "chauffage-chaudiere-gaz":     "", // /images/pages/chauffage-chaudiere-gaz.webp — 3:2
  "chauffage-pac":               "", // /images/pages/chauffage-pac.webp — 3:2
  "chauffage-plancher-chauffant": "", // /images/pages/chauffage-plancher-chauffant.webp — 3:2
};

// --- Realisations avant/apres (20 images, toutes en 4:3) ---
// Cle = id de la realisation + "-before" ou "-after"
export const realisationImages: Record<string, string> = {
  "sdb-villeurbanne-before":       "", // /images/realisations/sdb-villeurbanne-before.webp
  "sdb-villeurbanne-after":        "", // /images/realisations/sdb-villeurbanne-after.webp
  "cuisine-lyon3-before":          "", // /images/realisations/cuisine-lyon3-before.webp
  "cuisine-lyon3-after":           "", // /images/realisations/cuisine-lyon3-after.webp
  "chauffe-eau-caluire-before":    "", // /images/realisations/chauffe-eau-caluire-before.webp
  "chauffe-eau-caluire-after":     "", // /images/realisations/chauffe-eau-caluire-after.webp
  "pac-bron-before":               "", // /images/realisations/pac-bron-before.webp
  "pac-bron-after":                "", // /images/realisations/pac-bron-after.webp
  "sdb-pmr-lyon6-before":          "", // /images/realisations/sdb-pmr-lyon6-before.webp
  "sdb-pmr-lyon6-after":           "", // /images/realisations/sdb-pmr-lyon6-after.webp
  "chaudiere-tassin-before":       "", // /images/realisations/chaudiere-tassin-before.webp
  "chaudiere-tassin-after":        "", // /images/realisations/chaudiere-tassin-after.webp
  "douche-lyon7-before":           "", // /images/realisations/douche-lyon7-before.webp
  "douche-lyon7-after":            "", // /images/realisations/douche-lyon7-after.webp
  "plancher-chauffant-ecully-before": "", // /images/realisations/plancher-chauffant-ecully-before.webp
  "plancher-chauffant-ecully-after":  "", // /images/realisations/plancher-chauffant-ecully-after.webp
  "depannage-lyon2-before":        "", // /images/realisations/depannage-lyon2-before.webp
  "depannage-lyon2-after":         "", // /images/realisations/depannage-lyon2-after.webp
  "sdb-complete-oullins-before":   "", // /images/realisations/sdb-complete-oullins-before.webp
  "sdb-complete-oullins-after":    "", // /images/realisations/sdb-complete-oullins-after.webp
};
