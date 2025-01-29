import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "Plans & Pricing", href: "#pricing" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="./" className="shrink-0">
              <img src="/Zoom_logo.svg" alt="Zoom" className="h-8 w-auto" />
            </a>
            <nav className="hidden lg:ml-10 md:flex flex-row justify-center items-center lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-500 hover:text-blue-600 px-3 py-2 text-base font-medium transition duration-150 ease-in-out"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-full px-4 py-2 text-sm font-medium transition duration-150 ease-in-out"
            >
              Contact Sales
            </a>
            <a
              href="#signup"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 text-sm font-medium transition duration-150 ease-in-out"
            >
              Sign Up Free
            </a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FiX className="h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <a
                href="#contact"
                className="text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-full px-4 py-2 text-sm font-medium w-full text-center mb-2"
              >
                Contact Sales
              </a>
            </div>
            <div className="flex items-center px-5">
              <a
                href="#signup"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 text-sm font-medium w-full text-center"
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
