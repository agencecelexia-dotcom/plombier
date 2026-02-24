"use client";

import { useState } from "react";
import { AdminSidebar, type AdminTab } from "@/components/admin/AdminSidebar";
import DashboardTab from "@/components/admin/DashboardTab";
import ContenuTab from "@/components/admin/ContenuTab";
import PhotosTab from "@/components/admin/PhotosTab";
import SeoTab from "@/components/admin/SeoTab";
import ServicesTab from "@/components/admin/ServicesTab";
import TemoignagesTab from "@/components/admin/TemoignagesTab";
import ProjetsTab from "@/components/admin/ProjetsTab";

const TABS: Record<AdminTab, React.ComponentType> = {
  dashboard: DashboardTab,
  contenu: ContenuTab,
  photos: PhotosTab,
  seo: SeoTab,
  services: ServicesTab,
  temoignages: TemoignagesTab,
  projets: ProjetsTab,
};

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const ActiveComponent = TABS[activeTab];

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto pt-14 lg:pt-0">
        <div className="mx-auto max-w-7xl p-6">
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
}
