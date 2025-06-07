import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-black/90 backdrop-blur-md border-b border-gray-800/50">
      {/* Logo */}
      <Link to="/" className="text-xl md:text-2xl font-bold text-red-600 flex-shrink-0">
        Netflix
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {isLoggedIn ? (
          <>
            <div className="flex gap-6 items-center">
              <Link 
                to="/" 
                className="text-white hover:text-red-500 transition-colors duration-200"
              >
                Inicio
              </Link>
              <Link 
                to="/my-list" 
                className="text-white hover:text-red-500 transition-colors duration-200"
              >
                Mi Lista
              </Link>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar películas..."
                className="w-64 px-4 py-2 pl-10 rounded-full bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-gray-800 transition-all duration-200"
              />
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </>
        ) : (
          <div className="flex gap-4 items-center">
            <Link 
              to="/login" 
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              Iniciar Sesión
            </Link>
            <Link 
              to="/register" 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors duration-200"
            >
              Registrarse
            </Link>
          </div>
        )}

        {/* Debug Button - Desktop */}
        <button 
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="text-xs text-gray-400 hover:text-gray-300 px-2 py-1 rounded border border-gray-600 hover:border-gray-500 transition-colors duration-200"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
      <div className="md:hidden flex items-center gap-2">
        <button 
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="text-xs text-gray-400 px-2 py-1 rounded border border-gray-600"
        >
          {isLoggedIn ? "Out" : "In"}
        </button>
        
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2 hover:bg-gray-800/50 rounded transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800/50 md:hidden">
          <div className="px-4 py-4 space-y-4">
            {isLoggedIn ? (
              <>
                <Link
                  to="/"
                  className="block text-white hover:text-red-500 py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  to="/my-list"
                  className="block text-white hover:text-red-500 py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mi Lista
                </Link>
                
                {/* Mobile Search */}
                <div className="relative pt-2">
                  <input
                    type="text"
                    placeholder="Buscar películas..."
                    className="w-full px-4 py-3 pl-10 rounded-lg bg-gray-800/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <svg 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-white hover:text-red-500 py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="block bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;