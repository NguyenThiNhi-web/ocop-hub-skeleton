import { notFound } from "next/navigation";
import { Dashboard } from "@/components/dashboard";
import { money, products } from "@/lib/demo";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return <Dashboard title={product.name}><p>{product.partner} · {money.format(product.price)}</p></Dashboard>;
}
