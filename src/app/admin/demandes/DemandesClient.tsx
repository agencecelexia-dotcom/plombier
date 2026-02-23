"use client";

import { useState } from "react";
import {
  FileText,
  RefreshCw,
  Mail,
  Phone,
  Clock,
  Wrench,
  Trash2,
  CheckCircle,
  BookOpen,
} from "lucide-react";
import type { Submission } from "@/lib/storage";

// --- Utility ---

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// --- Submissions Table ---

function SubmissionsTable({
  submissions,
  onUpdateStatus,
  onDelete,
}: {
  submissions: Submission[];
  onUpdateStatus: (id: string, status: Submission["status"]) => void;
  onDelete: (id: string) => void;
}) {
  const statusColors: Record<string, string> = {
    new: "bg-blue-500/20 text-blue-300",
    read: "bg-amber-500/20 text-amber-300",
    done: "bg-emerald-500/20 text-emerald-300",
  };

  const statusLabels: Record<string, string> = {
    new: "Nouveau",
    read: "Lu",
    done: "Traite",
  };

  if (submissions.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <Mail className="w-12 h-12 mx-auto mb-4 opacity-30" />
        <p>Aucune demande de contact pour le moment</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {submissions.map((sub) => (
        <div
          key={sub.id}
          className="bg-[#1e293b] rounded-xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-colors"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-white">{sub.nom}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[sub.status]}`}>
                  {statusLabels[sub.status]}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  {sub.telephone}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  {sub.email}
                </span>
              </div>
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-1 shrink-0">
              <Clock className="w-3 h-3" />
              {formatDate(sub.date)}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3 text-sm">
            <Wrench className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-300">{sub.service}</span>
          </div>

          {sub.message && (
            <p className="text-sm text-slate-400 mb-3 bg-slate-800/50 rounded-lg p-3">
              {sub.message}
            </p>
          )}

          <div className="flex items-center gap-2">
            {sub.status === "new" && (
              <button
                onClick={() => onUpdateStatus(sub.id, "read")}
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 transition-colors"
              >
                <BookOpen className="w-3 h-3" />
                Marquer lu
              </button>
            )}
            {sub.status !== "done" && (
              <button
                onClick={() => onUpdateStatus(sub.id, "done")}
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition-colors"
              >
                <CheckCircle className="w-3 h-3" />
                Traite
              </button>
            )}
            <button
              onClick={() => onDelete(sub.id)}
              className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-red-500/10 text-red-300 hover:bg-red-500/20 transition-colors ml-auto"
            >
              <Trash2 className="w-3 h-3" />
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Main Demandes Page ---

interface DemandesClientProps {
  initialSubmissions: Submission[];
}

export function DemandesClient({ initialSubmissions }: DemandesClientProps) {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [refreshing, setRefreshing] = useState(false);

  const newCount = submissions.filter((s) => s.status === "new").length;

  async function handleRefresh() {
    setRefreshing(true);
    try {
      const res = await fetch("/api/admin/submissions");
      if (res.ok) setSubmissions(await res.json());
    } finally {
      setRefreshing(false);
    }
  }

  async function handleUpdateStatus(id: string, status: Submission["status"]) {
    const res = await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) {
      setSubmissions((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status } : s))
      );
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer cette demande ?")) return;
    const res = await fetch("/api/admin/submissions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
    }
  }

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              Demandes de contact
            </h1>
            <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-medium">
              {submissions.length} total
            </span>
            {newCount > 0 && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">
                {newCount} nouvelle{newCount > 1 ? "s" : ""}
              </span>
            )}
          </div>

          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">Actualiser</span>
          </button>
        </div>

        {/* Submissions list */}
        <SubmissionsTable
          submissions={submissions}
          onUpdateStatus={handleUpdateStatus}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
