import { Dashboard, Records } from "@/components/dashboard";
import { products, money } from "@/lib/demo";

export default function Page() {
  const rows = products.slice(0, 1).map((item) => ({ name: item.name, detail: money.format(item.price) }));
  return <Dashboard title="Giỏ hàng mẫu"><Records rows={rows} /></Dashboard>;
}
