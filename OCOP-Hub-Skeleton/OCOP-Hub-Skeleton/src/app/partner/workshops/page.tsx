import { Dashboard, Records } from "@/components/dashboard";
import { workshops } from "@/lib/demo";

export default function Page() {
  const rows = workshops.map((item) => ({ name: item.name, detail: `${item.location} · ${item.sessions.length} buổi`, href: `/workshops/${item.slug}` }));
  return <Dashboard title="Workshop của doanh nghiệp"><Records rows={rows} /></Dashboard>;
}
