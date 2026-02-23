"use client";

import { FolderOpen, Info, MapPin } from "lucide-react";
import { realisations } from "@/config/realisations";
import { realisationImages } from "@/config/images";

const categoryColors: Record<string, string> = {
  "Salle de bain": "bg-blue-500/20 text-blue-300",
  "Plomberie": "bg-emerald-500/20 text-emerald-300",
  "Chauffe-eau": "bg-amber-500/20 text-amber-300",
  "Chauffage": "bg-red-500/20 text-red-300",
};

export function ProjetsClient() {
  const categories = [...new Set(realisations.map((r) => r.category))];

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-blue-400" />
            Projets / Realisations
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-medium">
              {realisations.length} projets
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-medium">
              {categories.length} categories
            </span>
          </div>
        </div>

        {/* Stats by category */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {categories.map((cat) => {
            const count = realisations.filter((r) => r.category === cat).length;
            return (
              <div
                key={cat}
                className="bg-[#1e293b] rounded-xl p-4 border border-slate-700/50"
              >
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    categoryColors[cat] || "bg-slate-700 text-slate-300"
                  }`}
                >
                  {cat}
                </span>
                <p className="text-2xl font-bold text-white mt-2">{count}</p>
                <p className="text-sm text-slate-400">projet{count > 1 ? "s" : ""}</p>
              </div>
            );
          })}
        </div>

        {/* Projects list */}
        <div className="space-y-4">
          {realisations.map((project) => {
            const beforeImg = realisationImages[`${project.id}-before`];
            const afterImg = realisationImages[`${project.id}-after`];

            return (
              <div
                key={project.id}
                className="bg-[#1e293b] rounded-xl border border-slate-700/50 overflow-hidden"
              >
                {/* Before/After images */}
                <div className="grid grid-cols-2 gap-px bg-slate-700">
                  <div className="bg-slate-800 relative">
                    {beforeImg ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={beforeImg}
                        alt={`${project.title} - avant`}
                        className="w-full aspect-video object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-video flex items-center justify-center text-slate-600 text-sm">
                        Pas d&apos;image
                      </div>
                    )}
                    <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded bg-red-500/80 text-white font-medium">
                      AVANT
                    </span>
                  </div>
                  <div className="bg-slate-800 relative">
                    {afterImg ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={afterImg}
                        alt={`${project.title} - apres`}
                        className="w-full aspect-video object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-video flex items-center justify-center text-slate-600 text-sm">
                        Pas d&apos;image
                      </div>
                    )}
                    <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded bg-emerald-500/80 text-white font-medium">
                      APRES
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-semibold text-white">{project.title}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                        categoryColors[project.category] || "bg-slate-700 text-slate-300"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mb-2">
                    <MapPin className="w-3 h-3" />
                    {project.city}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info note */}
        <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-white font-medium text-sm">Mode lecture seule</p>
            <p className="text-sm text-slate-400 mt-0.5">
              Les projets sont definis dans{" "}
              <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300 text-xs">
                src/config/realisations.ts
              </code>{" "}
              et les images dans{" "}
              <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300 text-xs">
                src/config/images.ts
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
