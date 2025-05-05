
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center">
              <h2 className="text-2xl font-merriweather font-bold text-primary">Blogify</h2>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              A modern blog platform for sharing thoughts, ideas, and knowledge about technology,
              design, and web development.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/technology" className="text-gray-600 hover:text-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/categories/design" className="text-gray-600 hover:text-primary transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/categories/development" className="text-gray-600 hover:text-primary transition-colors">
                  Development
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Blogify. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              Instagram
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
