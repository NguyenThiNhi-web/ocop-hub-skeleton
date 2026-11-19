import { Dashboard, Records } from "@/components/dashboard";
import { products, money } from "@/lib/demo";

export default function Page() {
  const rows = products.map((item) => ({ name: item.name, detail: money.format(item.price), href: `/products/${item.slug}` }));
  return <Dashboard title="Duyệt sản phẩm"><Records rows={rows} /></Dashboard>;
}
