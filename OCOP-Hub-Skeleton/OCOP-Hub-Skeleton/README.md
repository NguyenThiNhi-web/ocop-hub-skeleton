# OCOP Hub Skeleton

Bộ khung minh họa dựa trên báo cáo và mã nguồn OCOP Hub của Nhóm 8.
Bản demo dùng Next.js App Router, React, TypeScript và dữ liệu mẫu trong mã nguồn.

## Chạy trong VS Code

1. Giải nén ZIP và mở thư mục `OCOP-Hub-Skeleton` trong VS Code.
2. Cài Node.js 24 LTS. Mở terminal tại thư mục có `package.json`.
3. Chạy lần lượt:

   ```bash
   npm ci
   npm run dev
   ```

4. Mở http://localhost:3000. Bản demo chạy ngay sau khi cài thư viện, không cần cấu hình Supabase.

## Các khu vực và API mẫu

| Khu vực | Đường dẫn | Nội dung |
| --- | --- | --- |
| Khách hàng | `/`, `/products`, `/workshops`, `/cart`, `/orders` | Danh mục, chi tiết sản phẩm, số chỗ theo từng buổi workshop, giỏ và đơn mẫu |
| Doanh nghiệp | `/partner` | Sản phẩm, workshop, phần đơn và đối soát của một doanh nghiệp mẫu |
| Admin | `/admin` | Sản phẩm và workshop chờ xử lý, đơn hàng, chuyển khoản và đối soát |
| API mẫu | `GET /api/products`, `GET /api/workshops`, `GET /api/health` | Dữ liệu JSON và trạng thái khởi chạy |

Nhóm có thể dùng cấu trúc URL cùng dạng với mã nguồn gốc để mở rộng từng trang.
`src/app` chứa trang và API. `src/components` chứa bố cục và danh sách dùng chung.
`src/lib/demo.ts` chứa dữ liệu mẫu dùng chung cho trang và API.

Các màn hình hiện chỉ đọc dữ liệu mẫu. Các mục đăng nhập, phân quyền, đăng ký giữ chỗ, thanh toán và ghi dữ liệu cần triển khai khi kết nối Supabase. Với đơn đa doanh nghiệp, bản demo minh họa đơn chung và số tiền của từng phần đơn. Với workshop nhiều buổi, số chỗ được hiển thị riêng theo buổi.

## Kiểm tra

```bash
npm run lint
npm run typecheck
npm run build
```
