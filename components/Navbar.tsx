export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <h2 className="font-bold text-xl">Plot Selling</h2>

      <div className="space-x-4 text-gray-600">
        <a href="#projects" className="hover:text-black">
          Projects
        </a>

        <a
          href="https://wa.me/91"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 font-medium"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}