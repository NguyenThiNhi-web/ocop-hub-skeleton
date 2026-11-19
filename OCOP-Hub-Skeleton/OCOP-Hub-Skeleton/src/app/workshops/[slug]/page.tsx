import { notFound } from "next/navigation";
import { Dashboard, Records } from "@/components/dashboard";
import { workshops } from "@/lib/demo";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const workshop = workshops.find((item) => item.slug === slug);
  if (!workshop) notFound();

  return (
    <Dashboard title={workshop.name}>
      <p>{workshop.partner} · {workshop.location}</p>
      <h2>Lịch workshop</h2>
      <Records rows={workshop.sessions.map(({ label, booked, capacity }) => ({
        name: label, detail: `${booked}/${capacity} chỗ đã đăng ký · còn ${capacity - booked} chỗ`,
      }))} />
    </Dashboard>
  );
}
