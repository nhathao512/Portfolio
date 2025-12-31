import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: "Home", path: "/home" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/project" },
    { title: "Skills", path: "/skills" },
    { title: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    return (
      location.pathname === path ||
      (path === "/home" && location.pathname === "/")
    );
  };

  return (
    <header className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-xl">VH</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                Võ Nhật Hào
              </div>
              <div className="text-xs text-gray-400">Software Engineer</div>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors p-2 hover:bg-gray-700/50 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-blue-500/20 text-blue-400 shadow-sm"
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-700/50"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-700/50">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-blue-500/20 text-blue-400 shadow-sm"
                      : "text-gray-300 hover:text-blue-400 hover:bg-gray-700/50"
                  }`}
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
