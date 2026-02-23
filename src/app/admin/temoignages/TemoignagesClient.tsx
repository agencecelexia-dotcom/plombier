"use client";

import { MessageSquareQuote, Star, Info, User } from "lucide-react";
import { testimonials } from "@/config/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-amber-400 fill-amber-400"
              : "text-slate-600"
          }`}
        />
      ))}
    </div>
  );
}

export function TemoignagesClient() {
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <MessageSquareQuote className="w-5 h-5 text-blue-400" />
            Temoignages clients
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-medium">
              {testimonials.length} avis
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-medium flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-300" />
              {avgRating.toFixed(1)} moyenne
            </span>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 text-center">
            <p className="text-2xl font-bold text-white">{testimonials.length}</p>
            <p className="text-sm text-slate-400">Total avis</p>
          </div>
          <div className="bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 text-center">
            <p className="text-2xl font-bold text-amber-400">{avgRating.toFixed(1)}</p>
            <p className="text-sm text-slate-400">Note moyenne</p>
          </div>
          <div className="bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 text-center">
            <p className="text-2xl font-bold text-emerald-400">
              {testimonials.filter((t) => t.rating === 5).length}
            </p>
            <p className="text-sm text-slate-400">Avis 5 etoiles</p>
          </div>
        </div>

        {/* Testimonials list */}
        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#1e293b] rounded-xl p-5 border border-slate-700/50"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <User className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.date} — {t.source}</p>
                  </div>
                </div>
                <StarRating rating={t.rating} />
              </div>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Info note */}
        <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-white font-medium text-sm">Mode lecture seule</p>
            <p className="text-sm text-slate-400 mt-0.5">
              Pour modifier les temoignages, editez la section{" "}
              <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300 text-xs">
                TEMOIGNAGES
              </code>{" "}
              dans{" "}
              <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300 text-xs">
                CLIENT.md
              </code>{" "}
              puis relancez{" "}
              <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300 text-xs">
                npm run sync-client
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
