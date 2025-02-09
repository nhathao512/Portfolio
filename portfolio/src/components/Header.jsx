import { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { title: "Home", path: "/home" },
    { title: "About", path: "/about" },
    { title: "Project", path: "/project" },
    { title: "Skills", path: "/skills" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-800 bg-[length:200%_200%] backdrop-blur-sm rounded-xl animate-wave shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
            😎
          </Link>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-300 hover:text-cyan-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};