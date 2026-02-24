"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

interface PhotoItem {
  path: string;
  filename: string;
  usage: string;
}

interface PhotoGroup {
  label: string;
  photos: PhotoItem[];
}

const PHOTO_GROUPS: PhotoGroup[] = [
  {
    label: "Hero & Bannieres",
    photos: [
      {
        path: "/images/heroes/accueil.jpeg",
        filename: "heroes/accueil.jpeg",
        usage: "Hero page d'accueil",
      },
      {
        path: "/images/heroes/depannage-plomberie.jpeg",
        filename: "heroes/depannage-plomberie.jpeg",
        usage: "Hero page depannage plomberie",
      },
      {
        path: "/images/heroes/plomberie.jpeg",
        filename: "heroes/plomberie.jpeg",
        usage: "Hero page plomberie + page plomberie-tuyauterie",
      },
      {
        path: "/images/heroes/renovation-sdb.jpeg",
        filename: "heroes/renovation-sdb.jpeg",
        usage: "Hero page renovation salle de bain + renovation-complete + realisation sdb-oullins",
      },
      {
        path: "/images/heroes/chauffage.jpeg",
        filename: "heroes/chauffage.jpeg",
        usage: "Hero page chauffage",
      },
      {
        path: "/images/heroes/chauffe-eau.jpeg",
        filename: "heroes/chauffe-eau.jpeg",
        usage: "Hero page chauffe-eau",
      },
      {
        path: "/images/heroes/generique-plombier.jpeg",
        filename: "heroes/generique-plombier.jpeg",
        usage: "Hero blog, avis-clients, contact, a-propos, realisations + CTA bandeau",
      },
    ],
  },
  {
    label: "Sections",
    photos: [
      {
        path: "/images/sections/urgence-card.png",
        filename: "sections/urgence-card.png",
        usage: "Section depannage urgent + realisation depannage-lyon2 (avant)",
      },
      {
        path: "/images/sections/projet-card.jpeg",
        filename: "sections/projet-card.jpeg",
        usage: "Section projets / realisations en accueil",
      },
    ],
  },
  {
    label: "Equipe & A propos",
    photos: [
      {
        path: "/images/pages/a-propos-fondateur.jpeg",
        filename: "pages/a-propos-fondateur.jpeg",
        usage: "Portrait du fondateur — page A propos",
      },
      {
        path: "/images/pages/a-propos-equipe.jpeg",
        filename: "pages/a-propos-equipe.jpeg",
        usage: "Photo equipe — page A propos",
      },
    ],
  },
  {
    label: "Pages services",
    photos: [
      {
        path: "/images/pages/plomberie-robinetterie.jpeg",
        filename: "pages/plomberie-robinetterie.jpeg",
        usage: "Page plomberie — robinetterie",
      },
      {
        path: "/images/pages/plomberie-recherche-fuite.jpeg",
        filename: "pages/plomberie-recherche-fuite.jpeg",
        usage: "Page plomberie — recherche de fuite",
      },
      {
        path: "/images/pages/plomberie-mise-aux-normes.jpeg",
        filename: "pages/plomberie-mise-aux-normes.jpeg",
        usage: "Page plomberie — mise aux normes",
      },
      {
        path: "/images/pages/renovation-douche-italienne.jpeg",
        filename: "pages/renovation-douche-italienne.jpeg",
        usage: "Page douche italienne + realisation douche-lyon7",
      },
      {
        path: "/images/pages/renovation-pmr.jpeg",
        filename: "pages/renovation-pmr.jpeg",
        usage: "Page salle de bain PMR + realisation sdb-pmr-lyon6",
      },
      {
        path: "/images/pages/chauffage-chaudiere-gaz.jpeg",
        filename: "pages/chauffage-chaudiere-gaz.jpeg",
        usage: "Page chaudiere gaz + realisation chaudiere-tassin",
      },
      {
        path: "/images/pages/chauffage-pac.jpeg",
        filename: "pages/chauffage-pac.jpeg",
        usage: "Page pompe a chaleur",
      },
      {
        path: "/images/pages/chauffage-plancher-chauffant.jpeg",
        filename: "pages/chauffage-plancher-chauffant.jpeg",
        usage: "Page plancher chauffant + realisation plancher-ecully",
      },
    ],
  },
  {
    label: "Realisations — Avant",
    photos: [
      {
        path: "/images/realisations/sdb-villeurbanne-before.jpeg",
        filename: "realisations/sdb-villeurbanne-before.jpeg",
        usage: "Salle de bain Villeurbanne — avant travaux",
      },
      {
        path: "/images/realisations/cuisine-lyon3-before.png",
        filename: "realisations/cuisine-lyon3-before.png",
        usage: "Cuisine Lyon 3 — avant travaux",
      },
      {
        path: "/images/realisations/chauffe-eau-caluire-before.png",
        filename: "realisations/chauffe-eau-caluire-before.png",
        usage: "Chauffe-eau Caluire — avant travaux",
      },
      {
        path: "/images/realisations/pac-bron-before.jpeg",
        filename: "realisations/pac-bron-before.jpeg",
        usage: "PAC Bron — avant travaux",
      },
      {
        path: "/images/realisations/sdb-pmr-lyon6-before.jpeg",
        filename: "realisations/sdb-pmr-lyon6-before.jpeg",
        usage: "SDB PMR Lyon 6 — avant travaux",
      },
      {
        path: "/images/realisations/chaudiere-tassin-before.png",
        filename: "realisations/chaudiere-tassin-before.png",
        usage: "Chaudiere Tassin — avant travaux",
      },
      {
        path: "/images/realisations/douche-lyon7-before.png",
        filename: "realisations/douche-lyon7-before.png",
        usage: "Douche Lyon 7 — avant travaux",
      },
      {
        path: "/images/realisations/plancher-chauffant-ecully-before.png",
        filename: "realisations/plancher-chauffant-ecully-before.png",
        usage: "Plancher chauffant Ecully — avant travaux",
      },
      {
        path: "/images/realisations/sdb-complete-oullins-before.png",
        filename: "realisations/sdb-complete-oullins-before.png",
        usage: "SDB complete Oullins — avant travaux",
      },
    ],
  },
  {
    label: "Realisations — Apres",
    photos: [
      {
        path: "/images/realisations/sdb-villeurbanne-after.png",
        filename: "realisations/sdb-villeurbanne-after.png",
        usage: "Salle de bain Villeurbanne — apres travaux",
      },
      {
        path: "/images/realisations/cuisine-lyon3-after.jpeg",
        filename: "realisations/cuisine-lyon3-after.jpeg",
        usage: "Cuisine Lyon 3 — apres travaux",
      },
      {
        path: "/images/realisations/chauffe-eau-caluire-after.png",
        filename: "realisations/chauffe-eau-caluire-after.png",
        usage: "Chauffe-eau Caluire — apres travaux",
      },
      {
        path: "/images/realisations/pac-bron-after.png",
        filename: "realisations/pac-bron-after.png",
        usage: "PAC Bron — apres travaux",
      },
      {
        path: "/images/realisations/depannage-lyon2-after.png",
        filename: "realisations/depannage-lyon2-after.png",
        usage: "Depannage Lyon 2 — apres travaux",
      },
    ],
  },
];

export default function PhotosTab() {
  const [preview, setPreview] = useState<PhotoItem | null>(null);

  const totalPhotos = PHOTO_GROUPS.reduce((sum, g) => sum + g.photos.length, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold text-neutral-900">Bibliotheque photos</h1>
        <p className="mt-1 text-neutral-500">{totalPhotos} images utilisees sur le site</p>
      </div>

      {PHOTO_GROUPS.map((group) => (
        <div key={group.label} className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="border-b border-neutral-100 px-6 py-4">
            <h2 className="font-heading text-base font-semibold text-neutral-900">{group.label}</h2>
            <p className="mt-0.5 text-xs text-neutral-500">{group.photos.length} photo{group.photos.length > 1 ? "s" : ""}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4">
            {group.photos.map((photo) => (
              <div
                key={photo.path}
                className="group cursor-pointer overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 transition-colors hover:border-primary-900"
                onClick={() => setPreview(photo)}
              >
                <div className="relative aspect-video bg-neutral-100">
                  <Image
                    src={photo.path}
                    alt={photo.filename}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                    <ZoomIn size={20} className="text-white opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
                <div className="p-2.5">
                  <p className="truncate font-mono text-xs text-neutral-600">{photo.filename}</p>
                  <p className="mt-0.5 line-clamp-2 text-xs text-neutral-400">{photo.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreview(null)}
              className="absolute -top-10 right-0 flex items-center gap-1.5 text-sm text-white/70 hover:text-white"
            >
              <X size={16} />
              Fermer
            </button>
            <div className="relative overflow-hidden rounded-xl bg-neutral-900">
              <div className="relative aspect-video w-full">
                <Image
                  src={preview.path}
                  alt={preview.filename}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
              <p className="font-mono text-sm text-white/90">{preview.path}</p>
              <p className="mt-0.5 text-xs text-white/60">{preview.usage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
