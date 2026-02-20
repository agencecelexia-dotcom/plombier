import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Dépannage urgent",
    shortDescription: "Intervention rapide en moins de 2h pour toutes vos urgences plomberie.",
    description:
      "Fuite d'eau, canalisation bouchée, dégât des eaux, panne de chaudière... Notre équipe intervient en urgence 7j/7 dans un rayon de 30 km autour de Lyon. Diagnostic sur place et réparation immédiate dans la majorité des cas.",
    icon: "Siren",
    slug: "/depannage-plomberie",
  },
  {
    title: "Plomberie générale",
    shortDescription: "Installation, remplacement et mise aux normes de vos équipements.",
    description:
      "Robinetterie, tuyauterie, raccordements, WC, éviers, recherche de fuite... Nous intervenons pour tous vos travaux de plomberie, de l'installation neuve à la mise aux normes de vos installations existantes.",
    icon: "Wrench",
    slug: "/plomberie",
  },
  {
    title: "Salle de bain",
    shortDescription: "Rénovation complète, douche italienne, adaptation PMR.",
    description:
      "De la conception à la réalisation, nous prenons en charge votre projet de rénovation de salle de bain. Douche italienne, remplacement baignoire, accessibilité PMR, meuble vasque... Un interlocuteur unique du début à la fin.",
    icon: "Bath",
    slug: "/renovation-salle-de-bain",
  },
  {
    title: "Chauffage",
    shortDescription: "Chaudière, pompe à chaleur, plancher chauffant, entretien annuel.",
    description:
      "Installation et remplacement de chaudière gaz condensation, pompe à chaleur air-eau, plancher chauffant, radiateurs. Entretien annuel obligatoire et dépannage de votre système de chauffage.",
    icon: "Flame",
    slug: "/chauffage",
  },
  {
    title: "Chauffe-eau",
    shortDescription: "Remplacement, ballon thermodynamique, détartrage.",
    description:
      "Remplacement de chauffe-eau électrique ou gaz, installation de ballon thermodynamique pour réduire votre facture énergétique. Détartrage et entretien pour prolonger la durée de vie de votre équipement.",
    icon: "Droplets",
    slug: "/chauffe-eau",
  },
  {
    title: "Entretien",
    shortDescription: "Contrats d'entretien chaudière et maintenance préventive.",
    description:
      "L'entretien annuel de votre chaudière est obligatoire. Nous proposons des contrats d'entretien incluant la visite annuelle, le dépannage prioritaire et les pièces d'usure.",
    icon: "ClipboardCheck",
    slug: "/chauffage#entretien",
  },
];
