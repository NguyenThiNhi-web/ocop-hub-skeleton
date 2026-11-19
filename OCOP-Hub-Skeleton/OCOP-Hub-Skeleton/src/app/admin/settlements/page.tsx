import { Dashboard, Records } from "@/components/dashboard";
import { orders, money } from "@/lib/demo";

export default function Page() {
  const rows = orders.flatMap((item) => item.parts).map((part) => ({ name: part.partner, detail: money.format(part.total) }));
  return <Dashboard title="Đối soát đối tác"><Records rows={rows} /></Dashboard>;
}
