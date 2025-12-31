import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Project } from "./pages/Project";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";

import avatar from "./assets/avatar.jpg";

const App = () => {
  const profile = {
    name: "Võ Nhật Hào",
    title: "Software Engineering Student at Ton Duc Thang University | 2026 Graduation",
    about:
      "Final-year Software Engineering student, soon-to-be graduate and aspiring full-stack developer, with 1 year of experience building web applications for the education industry. My ambition is to leverage technology and AI to transform traditional software development practices.",
    contact: {
      email: "vonhathao.it@gmail.com",
      phone: "+84 334 944 908",
      location: "Hồ Chí Minh, Việt Nam",
    },
    services: [
      {
        title: "Web Development",
        description: "High-quality development of websites at the professional level.",
        icon: "💻",
      },
      {
        title: "Web Design",
        description: "The most modern and high-quality design made at a professional level.",
        icon: "🎨",
      },
      {
        title: "Mobile Apps",
        description: "Professional development of applications for iOS and Android.",
        icon: "📱",
      },
      {
        title: "Photography",
        description: "I make high-quality photos of any category at a professional level.",
        icon: "📸",
      },
    ],
    imageUrl: avatar,
  };

  // Generate blobs for liquid background
  useEffect(() => {
    const liquidBg = document.querySelector(".liquid-blob-bg");
    if (!liquidBg) return;

    // Clear existing blobs
    liquidBg.innerHTML = "";

    // Create 3 animated blobs
    const blobClasses = ["blob blob1", "blob blob2", "blob blob3"];
    blobClasses.forEach((className) => {
      const blob = document.createElement("div");
      blob.className = className;
      liquidBg.appendChild(blob);
    });
  }, []);

  return (
    <Router>
      {/* Liquid Blob Background */}
      <div className="liquid-blob-bg"></div>

      <div className="relative min-h-screen p-8 text-gray-100">
        <div className="mx-auto max-w-7xl">
          <Header />
          <div className="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-4">
            <Sidebar profile={profile} />
            <main className="md:col-span-3">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
