import Link from "next/link";
import { Dashboard } from "@/components/dashboard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>Khám phá đặc sản và làng nghề</h1>
          <p>Tìm sản phẩm OCOP và trải nghiệm workshop cùng các doanh nghiệp địa phương.</p>
          <Link href="/workshops">Xem workshop</Link>
        </div>
      </section>
      <section className="customer">
        <Dashboard title="Khách hàng" links={[
          { href: "/products", label: "Sản phẩm OCOP" },
          { href: "/workshops", label: "Workshop" },
          { href: "/cart", label: "Giỏ hàng" },
          { href: "/orders", label: "Đơn hàng" },
        ]} />
      </section>
    </>
  );
}
