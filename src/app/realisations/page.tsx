import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import RealisationsClient from "./RealisationsClient";

export const metadata: Metadata = generatePageMetadata({
  title: "Nos réalisations plomberie et salle de bain à Lyon",
  description: "Découvrez nos réalisations : rénovation salle de bain, dépannage plomberie, installation chauffage. Photos avant/après de nos chantiers à Lyon.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return <RealisationsClient />;
}
