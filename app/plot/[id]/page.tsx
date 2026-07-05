import Image from "next/image";
import { plots } from "@/lib/plots";

export default async function PlotDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const plot = plots.find((p) => p.id === Number(id));

  if (!plot) {
    return <h1 style={{ padding: "40px" }}>Plot not found</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Image
        src={plot.image}
        alt={plot.title}
        width={800}
        height={500}
        className="w-full h-96 object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">{plot.title}</h1>

      <p className="text-lg mt-4">📍 {plot.location}</p>
      <p className="text-lg">💰 {plot.price}</p>
      <p className="text-lg">📏 {plot.size}</p>

      <a
  href="https://wa.me/918766009352"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
    Contact on WhatsApp
  </button>
</a>
    </div>
  );
}