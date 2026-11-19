import Link from "next/link";
import type { ReactNode } from "react";

export function Dashboard({ title, children, links }: {
  title: string;
  children?: ReactNode;
  links?: { href: string; label: string }[];
}) {
  return (
    <>
      {title === "Khách hàng" ? <h2>{title}</h2> : <h1>{title}</h1>}
      {links && (
        <nav className="sections" aria-label={title}>
          {links.map(({ href, label }) => <Link key={href} href={href}>{label} <span aria-hidden="true">↗</span></Link>)}
        </nav>
      )}
      {children}
    </>
  );
}

export function Records({ rows }: { rows: { name: string; detail: string; href?: string }[] }) {
  return (
    <ul className="records">
      {rows.map(({ name, detail, href }) => (
        <li key={name}>{href ? <Link href={href}>{name}</Link> : <strong>{name}</strong>}<span>{detail}</span></li>
      ))}
    </ul>
  );
}
