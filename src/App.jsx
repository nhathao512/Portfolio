import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Technologies } from "./components/Technologies";
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
    about: "𝗧𝗵𝗶𝗿𝗱-𝘆𝗲𝗮𝗿 software engineering student, future full-stack developer, with 1 year of experience developing web applications for the education industry. My 𝗮𝗺𝗯𝗶𝘁𝗶𝗼𝗻 is to apply technology and AI to change the traditional way of software development.",
    contact: {
      email: "vonhathao641@gmail.com",
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
    imageUrl: avatar
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
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