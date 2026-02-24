"use client";

import { useState } from "react";
import { Save, Eye } from "lucide-react";

export default function SeoTab() {
  const [form, setForm] = useState<Record<string, string>>({
    META_TITLE_ACCUEIL: "",
    META_DESC_ACCUEIL: "",
    DOMAINE: "",
  });
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  const titleLen = form.META_TITLE_ACCUEIL.length;
  const descLen = form.META_DESC_ACCUEIL.length;

  async function handleSave() {
    setSaving(true);
    const res = await fetch("/api/admin/save-client", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(
      res.ok
        ? "Sauvegardé — relancer npm run sync-client pour appliquer"
        : "Erreur lors de la sauvegarde"
    );
    setSaving(false);
    setTimeout(() => setStatus(""), 4000);
  }

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-2 text-2xl font-bold text-neutral-900">
        SEO & Métadonnées
      </h1>
      <p className="mb-6 text-sm text-neutral-500">
        Optimisation pour les moteurs de recherche.
      </p>

      {status && (
        <div
          className={`mb-4 rounded-lg border px-4 py-2 text-sm ${
            status.includes("Erreur")
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-green-200 bg-green-50 text-green-700"
          }`}
        >
          {status}
        </div>
      )}

      {/* Google preview */}
      <div className="mb-6 rounded-xl border border-neutral-200 bg-white p-5">
        <div className="mb-3 flex items-center gap-2 text-xs text-neutral-400">
          <Eye className="h-4 w-4" />
          <span>Aperçu Google</span>
        </div>
        <div className="rounded-lg bg-neutral-50 p-4">
          <p className="mb-1 text-xs text-neutral-400">
            https://{form.DOMAINE || "www.votre-domaine.fr"}
          </p>
          <p className="mb-1 cursor-pointer text-lg font-medium leading-tight text-blue-700 hover:underline">
            {form.META_TITLE_ACCUEIL || "Titre de la page"}
          </p>
          <p className="line-clamp-2 text-sm leading-relaxed text-neutral-600">
            {form.META_DESC_ACCUEIL || "Description de la page..."}
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <div className="mb-1 flex items-center justify-between">
            <label className="text-sm font-medium text-neutral-700">
              Titre de la page (META_TITLE_ACCUEIL)
            </label>
            <span
              className={`text-xs font-medium ${
                titleLen < 30
                  ? "text-yellow-600"
                  : titleLen <= 70
                    ? "text-green-600"
                    : "text-red-600"
              }`}
            >
              {titleLen}/70{" "}
              {titleLen < 30
                ? "— trop court"
                : titleLen > 70
                  ? "— trop long"
                  : "— optimal"}
            </span>
          </div>
          <input
            className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={form.META_TITLE_ACCUEIL}
            onChange={(e) =>
              setForm({ ...form, META_TITLE_ACCUEIL: e.target.value })
            }
            placeholder="Plombier Lyon — Dépannage 7j/7"
          />
        </div>

        <div>
          <div className="mb-1 flex items-center justify-between">
            <label className="text-sm font-medium text-neutral-700">
              Méta-description
            </label>
            <span
              className={`text-xs font-medium ${
                descLen < 120
                  ? "text-yellow-600"
                  : descLen <= 160
                    ? "text-green-600"
                    : "text-red-600"
              }`}
            >
              {descLen}/160{" "}
              {descLen < 120
                ? "— trop court"
                : descLen > 160
                  ? "— trop long"
                  : "— optimal"}
            </span>
          </div>
          <textarea
            rows={3}
            className="w-full resize-none rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={form.META_DESC_ACCUEIL}
            onChange={(e) =>
              setForm({ ...form, META_DESC_ACCUEIL: e.target.value })
            }
            placeholder="Plombier chauffagiste à Lyon. Dépannage urgent 7j/7, installation, rénovation salle de bain. Devis gratuit."
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-700">
            Domaine
          </label>
          <input
            className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={form.DOMAINE}
            onChange={(e) => setForm({ ...form, DOMAINE: e.target.value })}
            placeholder="www.votre-domaine.fr"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 rounded-lg bg-primary-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90 disabled:opacity-50"
        >
          <Save className="h-4 w-4" />
          {saving ? "Sauvegarde..." : "Sauvegarder"}
        </button>
      </div>
    </div>
  );
}
