import { Link } from "react-router-dom";

export const Header = () => {
  const menuItems = [
    { title: "About", path: "/about" },
    { title: "Resume", path: "/resume" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <header className="bg-gray-900 shadow-lg rounded-xl mb-8">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-cyan-400 text-2xl font-bold">
          <Link to="/">😎</Link>
        </div>
        <nav className="flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-300 text-lg font-medium hover:text-cyan-400 hover:underline transition-all duration-200"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
