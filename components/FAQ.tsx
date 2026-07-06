export default function FAQ() {
  const faqs = [
    {
      question: "Are all plots legally verified?",
      answer: "Yes, every plot has clear legal documentation.",
    },
    {
      question: "Can I visit the plot before buying?",
      answer: "Yes, site visits can be arranged anytime.",
    },
    {
      question: "Do you provide EMI options?",
      answer: "Yes, flexible payment plans are available for selected projects.",
    },
    {
      question: "How do I contact the seller?",
      answer: "You can use the WhatsApp button or call directly.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h3 className="font-bold text-lg">
              {faq.question}
            </h3>

            <p className="text-gray-600 mt-2">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}