import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/Context.jsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Accounts', path: '/accounts' },
    { name: 'Cards', path: '/cards' },
    { name: 'Loans', path: '/loans' },
    { name: 'Remittance', path: '/remittance' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-[999] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="../src/Assets/IUB_Uni_logo.png" className="h-8 md:h-12 lg:h-14" alt="IUB Bank" />
          </Link>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm lg:text-base font-medium transition hover:text-blue-700 ${
                  location.pathname === link.path
                    ? 'text-blue-700 font-semibold'
                    : isScrolled
                    ? 'text-gray-700'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Conditional rendering for login button or user photo */}
            {!user ? (
              <Link
                to="/login"
                className="ml-4 px-5 py-2 text-sm lg:text-base bg-blue-700 text-white rounded-full transition hover:bg-blue-800 font-medium"
              >
                Login
              </Link>
            ) : user.providerData[0]?.providerId === 'google.com' && user.photoURL ? (
              <Link to="/dashboard">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="ml-4 w-10 h-10 rounded-full object-cover border-2 border-blue-700"
                  title={user.displayName || user.email}
                />
              </Link>
            ) : null}
          </div>

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? 'X' : '☰'}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white shadow-lg md:hidden flex flex-col">
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-100">
            <Link to="/" className="flex items-center space-x-2 text-blue-700 text-xl font-bold">
               <img src="../src/Assets/IUB_Uni_logo.png" className="h-8 md:h-12 lg:h-14" alt="IUB Bank" />
            </Link>
            <button className="text-gray-700 p-2" onClick={toggleMobileMenu}>
              X
            </button>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto pb-6">
            <div className="flex flex-col space-y-3 px-6 pt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 font-medium transition hover:text-blue-700 ${
                    location.pathname === link.path
                      ? 'text-blue-700 font-semibold'
                      : 'text-gray-700'
                  }`}
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="px-6 pb-6">
              {!user ? (
                <Link
                  to="/login"
                  className="w-full block px-3 py-3 bg-blue-700 text-white rounded-full text-center transition hover:bg-blue-800 font-medium"
                  onClick={toggleMobileMenu}
                >
                  Login
                </Link>
              ) : user.providerData[0]?.providerId === 'google.com' && user.photoURL ? (
                <div className="flex justify-center mt-4">
                  <Link to="/dashboard">
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-700"
                      title={user.displayName || user.email}
                    />
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;