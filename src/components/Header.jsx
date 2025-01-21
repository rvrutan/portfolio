import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  return (
    <header className="bg-stone-600 p-8">
      <div className="container mx-auto flex justify-between items-center tracking-wider antialiased">
      <Link to="/">
          <h1 className="text-4xl font-bold cursor-pointer ">Roni V. Rutan</h1>
        </Link>        <nav className="flex space-x-4">
          <Link to="/" className={location.pathname === "/" ? "text-xl text-yellow-500" : ""}>ABOUT</Link>
          <Link to="/portfolio" className={location.pathname === "/portfolio" ? "text-xl text-yellow-500" : ""}>PORTFOLIO</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "text-xl text-yellow-500" : ""}>CONTACT</Link>
          <Link to="/resume" className={location.pathname === "/resume" ? "text-xl text-yellow-500" : ""}>RESUME</Link>
        </nav>
      </div>
    </header>
  );
}