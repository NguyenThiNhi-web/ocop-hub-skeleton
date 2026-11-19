import { products } from "@/lib/demo";

export function GET() {
  return Response.json({ data: products, demo: true });
}
