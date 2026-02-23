"use client";

import {
  Wrench,
  Info,
  ExternalLink,
  Siren,
  Bath,
  Flame,
  Droplets,
  ClipboardCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/config/services";

const iconMap: Record<string, LucideIcon> = {
  Siren,
  Wrench,
  Bath,
  Flame,
  Droplets,
  ClipboardCheck,
};

export function ServicesClient() {
  return (
    <div className="min-h-screen text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <Wrench className="w-5 h-5 text-blue-400" />
            Services
          </h1>
          <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-medium">
            {services.length} services
          </span>
        </div>

        {/* Services grid */}
        <div className="space-y-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <div
                key={i}
                className="bg-[#1e293b] rounded-xl p-5 border border-slate-700/50"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-white">{service.title}</h3>
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        {service.icon}
                      </span>
                    </div>
                    <p className="text-sm text-blue-300 mb-2">{service.shortDescription}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                      <ExternalLink className="w-3 h-3" />
                      <span>{service.slug}</span>
                    </div>
                  </div>
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
              Pour modifier les services, editez la section{" "}
              <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300 text-xs">
                SERVICES
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
