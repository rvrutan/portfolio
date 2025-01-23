import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-stone-300 p-4 md:p-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center tracking-wider antialiased">
        {/* Logo/Name */}
        <Link to="/">
          <h1 className="text-2xl md:text-4xl text-stone-700 font-bold cursor-pointer">Roni V. Rutan</h1>
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-stone-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation Links (Hidden when the mobile menu is open) */}
        <nav
          className={`${
            isOpen ? "hidden" : "flex"
          } md:flex space-x-4 text-stone-700 hidden md:block`}
        >
          <Link to="/" className={location.pathname === "/" ? "text-xl text-yellow-800" : ""}>ABOUT</Link>
          <Link to="/portfolio" className={location.pathname === "/portfolio" ? "text-xl text-yellow-800" : ""}>PORTFOLIO</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "text-xl text-yellow-800" : ""}>CONTACT</Link>
          <Link to="/resume" className={location.pathname === "/resume" ? "text-xl text-yellow-800" : ""}>RESUME</Link>
        </nav>
      </div>

      {/* Mobile Menu (Appears when hamburger is clicked) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden mt-4 text-center bg-stone-200 rounded-lg shadow-lg p-4`}
      >
        <Link to="/" className="block py-2 text-stone-700" onClick={toggleMenu}>ABOUT</Link>
        <Link to="/portfolio" className="block py-2 text-stone-700" onClick={toggleMenu}>PORTFOLIO</Link>
        <Link to="/contact" className="block py-2 text-stone-700" onClick={toggleMenu}>CONTACT</Link>
        <Link to="/resume" className="block py-2 text-stone-700" onClick={toggleMenu}>RESUME</Link>
      </div>
    </header>
  );
}