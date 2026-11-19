import { Dashboard } from "@/components/dashboard";

export default function Page() {
  return <Dashboard title="Khu vực Doanh nghiệp" links={[
  {
    "href": "/partner/products",
    "label": "Sản phẩm của doanh nghiệp"
  },
  {
    "href": "/partner/workshops",
    "label": "Workshop của doanh nghiệp"
  },
  {
    "href": "/partner/orders",
    "label": "Phần đơn của doanh nghiệp"
  },
  {
    "href": "/partner/settlements",
    "label": "Đối soát doanh nghiệp"
  }
]} />;
}
