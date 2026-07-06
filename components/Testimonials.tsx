export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Patil",
      review: "Excellent service and smooth plot registration process.",
    },
    {
      name: "Priya Sharma",
      review: "Very professional team with clear legal documentation.",
    },
    {
      name: "Amit Joshi",
      review: "Affordable prices and great customer support.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Customer Testimonials
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="text-yellow-500 text-2xl mb-3">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-700 italic">
              "{review.review}"
            </p>

            <h3 className="mt-4 font-bold">
              — {review.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}