import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = { title: "OCOP Hub", description: "Đặc sản OCOP và workshop làng nghề" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <header>
          <div className="header-inner">
            <Link className="brand" href="/">OCOP <span>Hub</span></Link>
            <nav aria-label="Khu vực">
              <Link href="/">Khách hàng</Link>
              <Link href="/partner">Doanh nghiệp</Link>
              <Link href="/admin">Admin</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>OCOP Hub · Dữ liệu minh họa</footer>
      </body>
    </html>
  );
}
