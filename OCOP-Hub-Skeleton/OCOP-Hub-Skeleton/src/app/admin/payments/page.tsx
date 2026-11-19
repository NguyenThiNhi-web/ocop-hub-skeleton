import { Dashboard, Records } from "@/components/dashboard";
import { orders } from "@/lib/demo";

export default function Page() {
  const rows = orders.map((item) => ({ name: item.name, detail: item.status }));
  return <Dashboard title="Xác nhận chuyển khoản"><Records rows={rows} /></Dashboard>;
}
