"use client";

import { ImageIcon, ExternalLink } from "lucide-react";
import { heroImages, sectionImages, pageImages, realisationImages } from "@/config/images";

function ImageGrid({
  title,
  images,
}: {
  title: string;
  images: Record<string, string>;
}) {
  const entries = Object.entries(images);

  return (
    <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700/50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">{title}</h2>
        <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-medium">
          {entries.length} images
        </span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {entries.map(([key, path]) => (
          <div
            key={key}
            className="bg-[#0f172a] rounded-lg border border-slate-700 overflow-hidden group"
          >
            {/* Image preview */}
            <div className="aspect-video bg-slate-800 relative overflow-hidden">
              {path ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={path}
                  alt={key}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-600">
                  <ImageIcon className="w-8 h-8" />
                </div>
              )}
            </div>
            {/* Info */}
            <div className="p-3">
              <p className="text-sm font-medium text-white truncate">{key}</p>
              <p className="text-xs text-slate-500 truncate mt-0.5">{path}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PhotosClient() {
  const totalImages =
    Object.keys(heroImages).length +
    Object.keys(sectionImages).length +
    Object.keys(pageImages).length +
    Object.keys(realisationImages).length;

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-blue-400" />
            Photos du site
          </h1>
          <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-medium">
            {totalImages} au total
          </span>
        </div>

        {/* Info */}
        <div className="mb-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-start gap-3">
          <ExternalLink className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-white font-medium text-sm">Gestion des images</p>
            <p className="text-sm text-slate-400 mt-0.5">
              Les images sont stockees dans{" "}
              <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300 text-xs">
                public/images/
              </code>{" "}
              et referancees dans{" "}
              <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300 text-xs">
                src/config/images.ts
              </code>
              . Remplacez les fichiers dans le dossier correspondant pour mettre a jour.
            </p>
          </div>
        </div>

        {/* Image grids */}
        <div className="space-y-6">
          <ImageGrid title="Heroes (bannieres)" images={heroImages} />
          <ImageGrid title="Sections" images={sectionImages} />
          <ImageGrid title="Pages" images={pageImages} />
          <ImageGrid title="Realisations (avant/apres)" images={realisationImages} />
        </div>
      </div>
    </div>
  );
}
