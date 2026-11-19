import { Dashboard, Records } from "@/components/dashboard";
import { orders, money } from "@/lib/demo";

export default function Page() {
  const rows = orders.map((item) => ({ name: item.name, detail: money.format(item.parts[0].total) }));
  return <Dashboard title="Phần đơn của doanh nghiệp"><Records rows={rows} /></Dashboard>;
}
