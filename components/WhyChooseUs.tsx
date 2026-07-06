export default function WhyChooseUs() {
  const features = [
    {
      title: "Trusted Property Dealer",
      description: "100+ happy customers across Maharashtra.",
      icon: "🏆",
    },
    {
      title: "Prime Locations",
      description: "Plots available in fast-growing areas.",
      icon: "📍",
    },
    {
      title: "Affordable Prices",
      description: "Best prices with flexible payment options.",
      icon: "💰",
    },
    {
      title: "Legal Documentation",
      description: "100% verified plots with clear titles.",
      icon: "📄",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose Us
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="border rounded-xl p-6 text-center shadow hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>

            <h3 className="text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="text-gray-600 mt-3">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}