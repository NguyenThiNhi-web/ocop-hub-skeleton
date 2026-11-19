import { Dashboard } from "@/components/dashboard";

export default function Page() {
  return <Dashboard title="Khu vực Admin" links={[
  {
    "href": "/admin/products",
    "label": "Duyệt sản phẩm"
  },
  {
    "href": "/admin/workshops",
    "label": "Duyệt workshop"
  },
  {
    "href": "/admin/orders",
    "label": "Đơn hàng đa doanh nghiệp"
  },
  {
    "href": "/admin/payments",
    "label": "Xác nhận chuyển khoản"
  },
  {
    "href": "/admin/settlements",
    "label": "Đối soát đối tác"
  }
]} />;
}
