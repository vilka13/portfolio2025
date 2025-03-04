
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 transition-base
        ${isScrolled ? 'glass-morphism' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-display font-medium text-gradient hover:opacity-80 transition-base"
        >
          S.O portfolio
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium transition-base hover:text-gradient
            ${location.pathname === '/' ? 'text-gradient' : 'text-gray-300'}`}
          >
            Home
          </Link>
          
          <Link 
            to="/projects" 
            className={`font-medium transition-base hover:text-gradient
            ${location.pathname === '/projects' ? 'text-gradient' : 'text-gray-300'}`}
          >
            Projects
          </Link>
          
          <Link 
            to="/skills" 
            className={`font-medium transition-base hover:text-gradient
            ${location.pathname === '/skills' ? 'text-gradient' : 'text-gray-300'}`}
          >
            Skills
          </Link>
          
          <Link 
            to="/contacts" 
            className={`font-medium transition-base hover:text-gradient
            ${location.pathname === '/contacts' ? 'text-gradient' : 'text-gray-300'}`}
          >
            Contacts
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-black/70 mt-5 rounded-lg py-4 px-6 absolute left-4 right-4 animate-fade-in border border-white/10">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium transition-base hover:text-gradient
              ${location.pathname === '/' ? 'text-gradient' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link 
              to="/projects" 
              className={`font-medium transition-base hover:text-gradient
              ${location.pathname === '/projects' ? 'text-gradient' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            
            <Link 
              to="/skills" 
              className={`font-medium transition-base hover:text-gradient
              ${location.pathname === '/skills' ? 'text-gradient' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </Link>
            
            <Link 
              to="/contacts" 
              className={`font-medium transition-base hover:text-gradient
              ${location.pathname === '/contacts' ? 'text-gradient' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacts
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
