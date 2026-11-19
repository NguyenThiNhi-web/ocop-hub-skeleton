import { workshops } from "@/lib/demo";

export function GET() {
  return Response.json({ data: workshops, demo: true });
}
