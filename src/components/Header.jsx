import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  return (
    <header className="bg-stone-300 p-8">
      <div className="container mx-auto flex justify-between items-center tracking-wider antialiased">
      <Link to="/">
          <h1 className="text-4xl text-stone-700 font-bold cursor-pointer ">Roni V. Rutan</h1>
        </Link>        <nav className="flex space-x-4 text-stone-700">
          <Link to="/" className={location.pathname === "/" ? "text-xl text-yellow-800" : ""}>ABOUT</Link>
          <Link to="/portfolio" className={location.pathname === "/portfolio" ? "text-xl text-yellow-800" : ""}>PORTFOLIO</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "text-xl text-yellow-800" : ""}>CONTACT</Link>
          <Link to="/resume" className={location.pathname === "/resume" ? "text-xl text-yellow-800" : ""}>RESUME</Link>
        </nav>
      </div>
    </header>
  );
}