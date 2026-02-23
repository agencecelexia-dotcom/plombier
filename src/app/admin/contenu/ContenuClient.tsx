"use client";

import { Settings, Info } from "lucide-react";
import { siteConfig } from "@/config/site";

// --- Read-only field ---

function ReadOnlyField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-400 mb-1.5">
        {label}
      </label>
      <div className="w-full px-4 py-2.5 bg-[#0f172a] border border-slate-700 rounded-lg text-white text-sm">
        {value || <span className="text-slate-500">Non renseigne</span>}
      </div>
    </div>
  );
}

// --- Section wrapper ---

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700/50">
      <h2 className="text-base font-semibold text-white mb-4">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

// --- Main ---

export function ContenuClient() {
  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`;

  // Extract first name and last name from founder
  const founderParts = siteConfig.founder.split(" ");
  const founderFirstName = founderParts[0] || "";
  const founderLastName = founderParts.slice(1).join(" ") || "";

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-400" />
            Contenu du site
          </h1>
        </div>

        <div className="space-y-6">
          {/* Identite */}
          <Section title="Identite">
            <ReadOnlyField label="Nom entreprise" value={siteConfig.name} />
            <ReadOnlyField label="Nom legal" value={siteConfig.legalName} />
            <ReadOnlyField label="Prenom dirigeant" value={founderFirstName} />
            <ReadOnlyField label="Nom dirigeant" value={founderLastName} />
          </Section>

          {/* Contact */}
          <Section title="Contact">
            <ReadOnlyField label="Telephone" value={siteConfig.phone} />
            <ReadOnlyField label="Email" value={siteConfig.email} />
            <div className="sm:col-span-2">
              <ReadOnlyField label="Adresse complete" value={`${fullAddress}, ${siteConfig.address.region}, ${siteConfig.address.country}`} />
            </div>
          </Section>

          {/* Horaires */}
          <Section title="Horaires">
            <ReadOnlyField label="Semaine" value={siteConfig.openingHours.weekdays} />
            <ReadOnlyField label="Samedi" value={siteConfig.openingHours.saturday} />
            <ReadOnlyField label="Dimanche" value={siteConfig.openingHours.sunday} />
            <ReadOnlyField label="Urgences" value={siteConfig.openingHours.emergency} />
          </Section>

          {/* Chiffres */}
          <Section title="Chiffres">
            <ReadOnlyField
              label="Annees d'experience"
              value={String(siteConfig.yearsExperience)}
            />
            <ReadOnlyField
              label="Interventions"
              value={String(siteConfig.interventionsCount)}
            />
            <ReadOnlyField
              label="Note Google"
              value={String(siteConfig.googleRating)}
            />
            <ReadOnlyField
              label="Nombre d'avis"
              value={String(siteConfig.googleReviewCount)}
            />
          </Section>

          {/* Reseaux */}
          <Section title="Reseaux sociaux">
            <ReadOnlyField label="Facebook" value={siteConfig.social.facebook} />
            <ReadOnlyField label="Instagram" value={siteConfig.social.instagram} />
            <div className="sm:col-span-2">
              <ReadOnlyField label="Google Business" value={siteConfig.social.google} />
            </div>
          </Section>

          {/* Legal */}
          <Section title="Legal">
            <ReadOnlyField label="SIRET" value={siteConfig.siret} />
            <ReadOnlyField label="RGE" value={siteConfig.rge} />
            <div className="sm:col-span-2">
              <ReadOnlyField label="Assurance decennale" value={siteConfig.assuranceDecennale} />
            </div>
          </Section>

          {/* SEO */}
          <Section title="SEO">
            <div className="sm:col-span-2">
              <ReadOnlyField label="Domaine" value={siteConfig.url} />
            </div>
            <div className="sm:col-span-2">
              <ReadOnlyField label="Meta description" value={siteConfig.description} />
            </div>
          </Section>

          {/* Info note */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium text-sm">Mode lecture seule</p>
              <p className="text-sm text-slate-400 mt-0.5">
                Pour modifier ces valeurs, editez le fichier{" "}
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
    </div>
  );
}
