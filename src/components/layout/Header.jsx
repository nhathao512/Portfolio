import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BriefcaseBusiness, Code2, Home, Mail, Menu, UserRound, Wrench, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: "Home", path: "/home", icon: Home },
    { title: "About", path: "/about", icon: UserRound },
    { title: "Projects", path: "/projects", icon: BriefcaseBusiness },
    { title: "Skills", path: "/skills", icon: Wrench },
    { title: "Contact", path: "/contact", icon: Mail },
  ];

  const isActive = (path) =>
    location.pathname === path || (path === "/home" && location.pathname === "/");

  return (
    <header className="sticky top-4 z-20 rounded-lg border border-white/10 bg-slate-950/70 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
      <div className="px-4 py-3 sm:px-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="group flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20 transition-all duration-300 group-hover:scale-105">
              <Code2 size={21} className="text-white" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-base font-bold text-cyan-300 transition-colors group-hover:text-cyan-200 sm:text-lg">
                Võ Nhật Hào
              </div>
              <div className="hidden text-xs text-gray-400 sm:block">Software Engineer</div>
            </div>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/10 hover:text-cyan-300 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 xl:px-4 ${
                    isActive(item.path)
                      ? "bg-cyan-400/15 text-cyan-300 shadow-sm"
                      : "text-gray-300 hover:bg-white/10 hover:text-cyan-300"
                  }`}
                >
                  <Icon size={16} />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {isOpen && (
          <nav className="mt-3 border-t border-white/10 pt-3 lg:hidden">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`inline-flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? "bg-cyan-400/15 text-cyan-300 shadow-sm"
                        : "text-gray-300 hover:bg-white/10 hover:text-cyan-300"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={18} />
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
