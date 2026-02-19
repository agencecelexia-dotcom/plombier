/**
 * Mapping des images du site.
 *
 * Pour remplacer un placeholder par une vraie image :
 * 1. Deposez votre image dans public/images/ (heroes/, realisations/, sections/)
 * 2. Renseignez le chemin ci-dessous (ex: "/images/heroes/accueil.webp")
 * 3. L'image remplace automatiquement le placeholder
 *
 * Laissez "" (vide) pour garder le placeholder avec le prompt.
 */

// --- Hero pages ---
export const heroImages: Record<string, string> = {
  "accueil":              "", // /images/heroes/accueil.webp
  "depannage-plomberie":  "", // /images/heroes/depannage.webp
  "plomberie":            "", // /images/heroes/plomberie.webp
  "renovation-sdb":       "", // /images/heroes/renovation-sdb.webp
  "chauffage":            "", // /images/heroes/chauffage.webp
  "chauffe-eau":          "", // /images/heroes/chauffe-eau.webp
  "blog":                 "", // /images/heroes/blog.webp
  "avis-clients":         "", // /images/heroes/avis-clients.webp
  "contact":              "", // /images/heroes/contact.webp
  "a-propos":             "", // /images/heroes/a-propos.webp
  "realisations":         "", // /images/heroes/realisations.webp
};

// --- Sections ---
export const sectionImages: Record<string, string> = {
  "cta-bandeau":          "", // /images/sections/cta-bandeau.webp
  "urgence-card":         "", // /images/sections/urgence-card.webp
  "projet-card":          "", // /images/sections/projet-card.webp
};

// --- Realisations avant/apres ---
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
