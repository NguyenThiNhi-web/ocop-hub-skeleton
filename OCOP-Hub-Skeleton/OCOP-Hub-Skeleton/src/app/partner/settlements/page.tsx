import { Dashboard, Records } from "@/components/dashboard";
import { orders, money } from "@/lib/demo";

export default function Page() {
  const rows = orders.flatMap((item) => item.parts).filter((part) => part.partner === "Đặc sản miền Trung").map((part) => ({ name: part.partner, detail: money.format(part.total) }));
  return <Dashboard title="Đối soát doanh nghiệp"><Records rows={rows} /></Dashboard>;
}
