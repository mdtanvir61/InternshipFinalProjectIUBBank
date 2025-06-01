import { Link } from 'react-router-dom';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-xl tracking-tight">IUB Bank</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Your trusted financial partner for a secure and prosperous future.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/iub.edu/" target='_blank' className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/iubedu" target='_blank' className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/iubedu/" target='_blank' className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/school/independent-university-bangladesh/" target='_blank' className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/accounts" className="text-gray-400 hover:text-white transition">Accounts</Link>
              </li>
              <li>
                <Link to="/cards" className="text-gray-400 hover:text-white transition">Cards</Link>
              </li>
              <li>
                <Link to="/loans" className="text-gray-400 hover:text-white transition">Loans</Link>
              </li>
              <li>
                <Link to="/remittance" className="text-gray-400 hover:text-white transition">Remittance</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/accounts#savings-account" className="text-gray-400 hover:text-white transition">Savings Account</Link>
              </li>
              <li>
                <Link to="/accounts#business-account" className="text-gray-400 hover:text-white transition">Business Account</Link>
              </li>
              <li>
                <Link to="/cards#debit-card" className="text-gray-400 hover:text-white transition">Debit Card</Link>
              </li>
              <li>
                <Link to="/cards#debit-card" className="text-gray-400 hover:text-white transition">Credit Card</Link>
              </li>
              <li>
                <Link to="/loans#business-loan-calculator" className="text-gray-400 hover:text-white transition">Business Loan Calculator</Link>
              </li>
              <li>
                <Link to="/loans#personal-loan-calculator" className="text-gray-400 hover:text-white transition">Personal Loan Calculator</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-1 shrink-0"/>
                <span className="text-gray-400">Plot 16, Block B, Bashundhara R/A, Dhaka 1229, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">+880 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">contact@iubbank.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} IUB Bank. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;