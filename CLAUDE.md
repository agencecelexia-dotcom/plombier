# Plombier - Site Web Professionnel

## Projet
Site web pour un plombier professionnel. Repository: `agencecelexia-dotcom/plombier`.

## Stack technique
- **Framework**: Next.js 14+ (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icones**: Lucide React
- **Deploiement**: Vercel
- **Package manager**: npm

## Structure du projet
```
src/
  app/              # Pages et routes (App Router)
    layout.tsx      # Layout racine
    page.tsx        # Page d'accueil
    (routes)/       # Groupes de routes
  components/       # Composants reutilisables
    ui/             # Composants shadcn/ui
    sections/       # Sections de pages (Hero, Services, etc.)
    layout/         # Header, Footer, Navigation
  lib/              # Utilitaires et helpers
  styles/           # Styles globaux
  config/           # Configuration site (textes, metadata, etc.)
  assets/           # Images, fonts
public/             # Fichiers statiques
```

## Conventions de code
- Composants React : PascalCase (`ServiceCard.tsx`)
- Fichiers utilitaires : camelCase (`formatPhone.ts`)
- CSS classes : Tailwind utility-first, pas de CSS custom sauf necessite
- Pas de `any` en TypeScript - typer correctement
- Composants serveur par defaut, `"use client"` uniquement si necessaire
- Imports absolus avec `@/` (ex: `@/components/ui/button`)

## Conventions Git
- Commits en francais, concis et descriptifs
- Branches : `feature/nom`, `fix/nom`, `style/nom`
- Ne jamais push sur `main` directement sans confirmation

## Design
- Mobile-first responsive design
- Palette de couleurs definie dans le PRD
- Accessibilite WCAG 2.1 AA minimum
- Performance : Lighthouse score > 90 sur toutes les metriques
- Images optimisees (next/image, WebP/AVIF)
- Fonts optimisees (next/font)

## Images — IMPORTANT
**NE PAS inserer d'images reelles.** A la place :
1. Utiliser le composant `ImagePlaceholder` qui affiche un placeholder avec le prompt
2. Pour chaque image, fournir un **prompt detaille** pour la generation d'image
3. **Mentionner le ratio dans le prompt** (ex: "...photo realiste, ratio 16:9")
4. Choisir le ratio parmi : `1:1` | `4:3` | `3:4` | `16:9` | `9:16` | `2:3` | `3:2` | `21:9`
5. Lister toutes les images dans `PROMPTS-IMAGES.md` avec : nom du fichier, dossier, ratio, prompt
6. Declarer chaque image dans `src/config/images.ts` (vide = placeholder, chemin = image reelle)
7. Le client depose ses images dans `public/images/` (heroes/, sections/, pages/, realisations/) et renseigne le chemin dans `images.ts`

## SEO
- Metadata dynamiques par page
- Schema.org (LocalBusiness, Service, FAQPage)
- Sitemap.xml et robots.txt automatiques
- Open Graph et Twitter Cards

## Regles importantes
- Ne jamais committer de fichiers `.env` ou credentials
- Toujours tester le responsive avant de valider
- Privilegier les Server Components pour le SEO
- Utiliser les skills disponibles (frontend-design, webapp-testing) pour la qualite
- Demander confirmation avant tout push ou action irreversible
