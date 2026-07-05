import Image from "next/image";
import { plots } from "@/lib/plots";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Available Plots
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {plots.map((plot) => (
          <div
            key={plot.id}
            className="border rounded-xl p-5 shadow-sm hover:shadow-lg transition bg-white"
          >
            <Image
              src={plot.image}
              alt={plot.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover rounded-lg"
            />

            <h3 className="text-xl font-semibold mt-4">{plot.title}</h3>

            <p className="text-gray-600 mt-2">📍 {plot.location}</p>
            <p className="text-gray-600">💰 {plot.price}</p>
            <p className="text-gray-600">📏 {plot.size}</p>

            <a href={`/plot/${plot.id}`}>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                View Details
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}