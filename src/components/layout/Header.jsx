import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: "Home", path: "/home" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Skills", path: "/skills" },
    { title: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    return location.pathname === path || (path === "/home" && location.pathname === "/");
  };

  return (
    <header className="rounded-2xl border border-gray-700/50 bg-gray-800/50 shadow-lg backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/50">
              <span className="text-xl font-bold text-white">VH</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-blue-400 transition-colors group-hover:text-blue-300">
                Võ Nhật Hào
              </div>
              <div className="text-xs text-gray-400">Software Engineer</div>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-gray-700/50 hover:text-blue-400 md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden items-center space-x-1 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-lg px-4 py-2 font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-blue-500/20 text-blue-400 shadow-sm"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-blue-400"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <nav className="mt-4 border-t border-gray-700/50 pt-4 md:hidden">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-lg px-4 py-3 font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-blue-500/20 text-blue-400 shadow-sm"
                      : "text-gray-300 hover:bg-gray-700/50 hover:text-blue-400"
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
