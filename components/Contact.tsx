export default function Contact() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Contact Us
        </h2>

        <div className="space-y-4 text-lg">
          <p>📞 Phone: +91 8766009352</p>
          <p>📧 Email: info@plotselling.com</p>
          <p>📍 Address: Nashik, Maharashtra, India</p>
        </div>

        <a
          href="https://wa.me/918766009352"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
            Chat on WhatsApp
          </button>
        </a>
      </div>
    </section>
  );
}