import { Link } from "react-router-dom";

export const Header = () => {
  const menuItems = [
    { title: "About", path: "/about" },
    { title: "Resume", path: "/resume" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Blog", path: "/blog" },
    // { title: 'CX', path: '/cx' }
  ];

  return (
    <header className="py-4 px-6 bg-gray-800 rounded-xl mb-8">
      <nav className="flex justify-end space-x-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
