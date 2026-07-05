"use client";

export default function Hero() {
  return (
    <section className="text-center py-20 px-4 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Find Your Dream Plot 🏡
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Buy verified plots at best locations and best prices
      </p>

      <button
        onClick={() => {
          const section = document.getElementById("projects");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        View Projects
      </button>
    </section>
  );
}