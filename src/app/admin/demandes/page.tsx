import { getSubmissions } from "@/lib/storage";
import { DemandesClient } from "./DemandesClient";

export const dynamic = "force-dynamic";

export default async function DemandesPage() {
  const submissions = await getSubmissions();
  return <DemandesClient initialSubmissions={submissions} />;
}
