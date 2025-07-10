// src/components/Header.tsx
import React, { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ← mobil menü state’i

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent shadow-none"
      }`}
    >
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Tarot Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Taratonic
            </span>
          </a>

          {/* Sağdaki butonlar ve hamburger */}
          <div className="flex items-center lg:order-2">
            <a
              href="/login"
              className="text-white hover:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 transition-all duration-500"
            >
              Log in
            </a>
            <a
              href="/get-started"
              className="text-white bg-gradient-to-r from-[#962FDA] to-[#EA489B] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 transition-all duration-500"
            >
              Get started
            </a>

            {/* Hamburger butonu */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Toggle main menu</span>
              {menuOpen ? (
                // X ikonu
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 
                       10l4.293 4.293a1 1 0 01-1.414 1.414L10 
                       11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 
                       10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                // Hamburger ikonu
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 
                       5h14a1 1 0 110 2H3a1 1 0 110-2zm0 
                       5h14a1 1 0 110 2H3a1 1 0 110-2z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Menü öğeleri */}
<div
  className={`${
    menuOpen ? "block" : "hidden"
  } w-full lg:flex lg:w-auto lg:order-1`}
  id="mobile-menu"
>
  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 items-center">
    <li className="w-full lg:w-auto">
      <a
        href="/"
        className="w-full text-left block py-2 px-4 rounded text-white hover:bg-transparent lg:hover:text-primary-700 transition-all"
      >
        Home
      </a>
    </li>
    <li className="w-full lg:w-auto">
      <a
        href="/about"
        className="w-full text-left block py-2 px-4 rounded text-white hover:bg-transparent lg:hover:text-primary-700 transition-all"
      >
        About
      </a>
    </li>
    <li className="w-full lg:w-auto">
      <a
        href="/read"
        className="w-full text-left block py-2 px-4 rounded text-white hover:bg-transparent lg:hover:text-primary-700 transition-all"
      >
        Reading
      </a>
    </li>
    <li className="w-full lg:w-auto">
      <a
        href="/tarot-cards"
        className="w-full text-left block py-2 px-4 rounded text-white hover:bg-transparent lg:hover:text-primary-700 transition-all"
      >
        Tarot Cards
      </a>
    </li>
    <li className="w-full lg:w-auto">
      <a
        href="/blog"
        className="w-full text-left block py-2 px-4 rounded text-white hover:bg-transparent lg:hover:text-primary-700 transition-all"
      >
        Blog
      </a>
    </li>
  </ul>
</div>


        </div>
      </nav>
    </header>
  );
}
