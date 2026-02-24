"use client";

import { useState } from "react";
import { X, ZoomIn, Info, ImageIcon } from "lucide-react";

interface PhotoItem {
  path: string;
  filename: string;
  usage: string;
  category: string;
}

const PHOTOS: PhotoItem[] = [
  { path: "/images/heroes/hero-accueil.jpg", filename: "hero-accueil.jpg", usage: "Bannière page d'accueil", category: "Heroes" },
  { path: "/images/heroes/hero-services.jpg", filename: "hero-services.jpg", usage: "Bannière page services", category: "Heroes" },
  { path: "/images/heroes/hero-realisations.jpg", filename: "hero-realisations.jpg", usage: "Bannière page réalisations", category: "Heroes" },
  { path: "/images/heroes/hero-contact.jpg", filename: "hero-contact.jpg", usage: "Bannière page contact", category: "Heroes" },
  { path: "/images/heroes/hero-about.jpg", filename: "hero-about.jpg", usage: "Bannière page à propos", category: "Heroes" },
  { path: "/images/sections/section-urgence.jpg", filename: "section-urgence.jpg", usage: "Section dépannage urgent", category: "Sections" },
  { path: "/images/sections/section-confiance.jpg", filename: "section-confiance.jpg", usage: "Section confiance / stats", category: "Sections" },
  { path: "/images/sections/section-cta.jpg", filename: "section-cta.jpg", usage: "Section appel à l'action", category: "Sections" },
  { path: "/images/pages/page-about-atelier.jpg", filename: "page-about-atelier.jpg", usage: "Page à propos — atelier", category: "Pages" },
  { path: "/images/pages/page-about-equipe.jpg", filename: "page-about-equipe.jpg", usage: "Page à propos — équipe", category: "Pages" },
  ...Array.from({ length: 6 }, (_, i) => ({
    path: `/images/realisations/realisation-${i + 1}-avant.jpg`,
    filename: `realisation-${i + 1}-avant.jpg`,
    usage: `Projet ${i + 1} — photo avant travaux`,
    category: "Réalisations",
  })),
  ...Array.from({ length: 6 }, (_, i) => ({
    path: `/images/realisations/realisation-${i + 1}-apres.jpg`,
    filename: `realisation-${i + 1}-apres.jpg`,
    usage: `Projet ${i + 1} — photo après travaux`,
    category: "Réalisations",
  })),
];

const CATEGORIES = ["Tous", "Heroes", "Sections", "Pages", "Réalisations"];

export default function PhotosTab() {
  const [filter, setFilter] = useState("Tous");
  const [preview, setPreview] = useState<PhotoItem | null>(null);

  const filtered = filter === "Tous" ? PHOTOS : PHOTOS.filter((p) => p.category === filter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold text-neutral-900">Bibliothèque photos</h1>
        <p className="mt-1 text-neutral-500">{PHOTOS.length} images utilisées sur le site</p>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-primary-200 bg-primary-50 px-4 py-3">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" />
        <p className="text-sm text-primary-800">
          Les photos sont stockées dans <code className="rounded bg-primary-100 px-1">public/images/</code>.
          Les chemins sont référencés dans <code className="rounded bg-primary-100 px-1">src/config/images.ts</code>.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === cat
                ? "bg-primary-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((photo) => (
          <div
            key={photo.path}
            className="group cursor-pointer overflow-hidden rounded-xl border border-neutral-200 bg-white transition-colors hover:border-primary-900"
            onClick={() => setPreview(photo)}
          >
            <div className="relative flex aspect-video items-center justify-center bg-neutral-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.path}
                alt={photo.filename}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-8 w-8 text-neutral-300" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                <ZoomIn size={20} className="text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
            <div className="p-3">
              <span className="mb-1.5 inline-block rounded-full bg-primary-100 px-2 py-0.5 text-[10px] font-semibold text-primary-800">
                {photo.category}
              </span>
              <p className="truncate text-xs font-medium text-neutral-700">{photo.filename}</p>
              <p className="truncate text-xs text-neutral-400">{photo.usage}</p>
            </div>
          </div>
        ))}
      </div>

      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPreview(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPreview(null)}
              className="absolute -top-10 right-0 flex items-center gap-1.5 text-sm text-white/70 hover:text-white"
            >
              <X size={16} />
              Fermer
            </button>
            <div className="overflow-hidden rounded-xl bg-neutral-900">
              <div className="relative flex aspect-video w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview.path}
                  alt={preview.filename}
                  className="max-h-full max-w-full object-contain"
                />
                <ImageIcon className="absolute h-16 w-16 text-neutral-700" />
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
