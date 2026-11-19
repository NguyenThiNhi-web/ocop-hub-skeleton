import { Dashboard, Records } from "@/components/dashboard";
import { orders, money } from "@/lib/demo";

export default function Page() {
  const rows = orders.map((item) => ({ name: item.name, detail: `${item.status} · ${money.format(item.total)}` }));
  return <Dashboard title="Đơn hàng đa doanh nghiệp"><Records rows={rows} /></Dashboard>;
}
