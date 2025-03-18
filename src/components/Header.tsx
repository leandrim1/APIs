import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-20 flex items-center justify-between px-5 sm:px-10 md:px-20 relative">
      <div className="flex items-center">
        <img src="\Logo.svg" alt="Logo" className="w-30 h-10" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center gap-2 lg:gap-10 md:gap-4 font-semibold">
        <div>
          <strong className="text-gray-800 hover:text-gray-700">Rick</strong>
        </div>
        <div>
          <strong className="text-gray-800 hover:text-gray-700">Tempo</strong>
        </div>
        <div>
          <strong className="text-gray-800 hover:text-gray-700">Community</strong>
        </div>
        <div>
          <strong className="text-gray-800 hover:text-gray-700">Blog</strong>
        </div>
        <div>
          <strong className="text-gray-800 hover:text-gray-700">Pricing</strong>
        </div>
        <button className="flex items-center h-10 px-4 rounded-sm bg-green-600 text-amber-50 hover:bg-green-500">
          Register Now
          <img src="./public/seta-direita.png" alt="Arrow" className="ml-2 w-4 h-4" />
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-700">
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-10">
          <nav className="flex flex-col items-center py-4">
            <div className="py-2">
              <strong className="text-gray-800 hover:text-gray-700">Home</strong>
            </div>
            <div className="py-2">
              <strong className="text-gray-800 hover:text-gray-700">Features</strong>
            </div>
            <div className="py-2">
              <strong className="text-gray-800 hover:text-gray-700">Community</strong>
            </div>
            <div className="py-2">
              <strong className="text-gray-800 hover:text-gray-700">Blog</strong>
            </div>
            <div className="py-2">
              <strong className="text-gray-800 hover:text-gray-700">Pricing</strong>
            </div>
            <button className="flex items-center h-10 px-4 mt-2 rounded-sm bg-green-600 text-amber-50 hover:bg-green-500">
              Register Now
              <img src="\seta-direita.png" alt="Arrow" className="ml-2 w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;