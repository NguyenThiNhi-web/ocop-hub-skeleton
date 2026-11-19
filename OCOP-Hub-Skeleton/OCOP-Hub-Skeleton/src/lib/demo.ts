export const products = [
  { slug: "nuoc-mam", name: "Nước mắm truyền thống", partner: "Đặc sản miền Trung", price: 85000 },
  { slug: "ca-phe", name: "Cà phê rang xay", partner: "Nông sản Tây Nguyên", price: 125000 },
];

export const workshops = [
  {
    slug: "lam-gom", name: "Trải nghiệm làm gốm", partner: "Làng gốm Thanh Hà", location: "Hội An",
    sessions: [
      { id: "gom-sang", label: "Buổi sáng · 09:00", booked: 8, capacity: 12 },
      { id: "gom-chieu", label: "Buổi chiều · 14:00", booked: 5, capacity: 10 },
    ],
  },
];

export const orders = [
  { id: "DH-001", name: "Đơn hàng DH-001", status: "Chờ xác nhận chuyển khoản", total: 210000,
    parts: [{ partner: "Đặc sản miền Trung", total: 85000 }, { partner: "Nông sản Tây Nguyên", total: 125000 }] },
];

export const money = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" });
