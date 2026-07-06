export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold">🏡 Plot Selling Website</h2>

        <p className="mt-3 text-gray-400">
          Helping you find the perfect plot at the best price.
        </p>

        <div className="mt-5 flex justify-center gap-6">
          <a href="#projects" className="hover:text-green-400">
            Projects
          </a>

          <a
            href="https://wa.me/918766009352"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            Contact
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          © 2026 Plot Selling Website. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}