"use client";

import { useState } from "react";
import {
  BarChart3,
  FileText,
  ImageIcon,
  MessageSquareQuote,
  Wrench,
  FolderOpen,
  Search,
  LogOut,
  Droplets,
  Menu,
  X,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export type AdminTab =
  | "dashboard"
  | "contenu"
  | "photos"
  | "seo"
  | "services"
  | "temoignages"
  | "projets";

const navItems: { label: string; tab: AdminTab; icon: React.ElementType }[] = [
  { label: "Dashboard", tab: "dashboard", icon: BarChart3 },
  { label: "Contenu", tab: "contenu", icon: FileText },
  { label: "Photos", tab: "photos", icon: ImageIcon },
  { label: "SEO", tab: "seo", icon: Search },
  { label: "Services", tab: "services", icon: Wrench },
  { label: "Temoignages", tab: "temoignages", icon: MessageSquareQuote },
  { label: "Projets", tab: "projets", icon: FolderOpen },
];

interface AdminSidebarProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
}

export function AdminSidebar({ activeTab, onTabChange }: AdminSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  const sidebarContent = (
    <>
      {/* Logo */}
      <div className="border-b border-neutral-200 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-900">
            <Droplets className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-neutral-900">Administration</p>
            <p className="text-xs text-neutral-500">{siteConfig.name}</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const isActive = activeTab === item.tab;
          const Icon = item.icon;
          return (
            <button
              key={item.tab}
              onClick={() => {
                onTabChange(item.tab);
                setMobileOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary-900 text-white"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-neutral-200 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <LogOut className="h-4 w-4" />
          Deconnexion
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <div className="fixed left-0 right-0 top-0 z-40 flex items-center gap-3 border-b border-neutral-200 bg-white px-4 py-3 lg:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-600 hover:bg-neutral-100"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          <Droplets className="h-4 w-4 text-primary-900" />
          <span className="text-sm font-bold text-neutral-900">Administration</span>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <aside
            className="flex h-full w-72 flex-col bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-2">
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {sidebarContent}
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden w-64 flex-col border-r border-neutral-200 bg-white lg:flex">
        {sidebarContent}
      </aside>
    </>
  );
}
