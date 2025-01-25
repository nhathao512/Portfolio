import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";
import avatar from "./assets/avatar.jpg";

const App = () => {
  const profile = {
    name: "Võ Nhật Hào",
    title:
      "Software Engineering Student at Ton Duc Thang University | 2026 Graduation",
    about:
      "𝗧𝗵𝗶𝗿𝗱-𝘆𝗲𝗮𝗿 software engineering student, future full-stack developer, with 1 year of experience developing web applications for the education industry. My 𝗮𝗺𝗯𝗶𝘁𝗶𝗼𝗻 is to apply technology and AI to change the traditional way of software development.",
    contact: {
      email: "vonhathao641@gmail.com",
      phone: "+84 334 944 908",
      location: "Hồ Chí Minh, Việt Nam",
    },
    services: [
      {
        title: "Web Development",
        description:
          "High-quality development of websites at the professional level.",
        icon: "💻",
      },
      {
        title: "Web Design",
        description:
          "The most modern and high-quality design made at a professional level.",
        icon: "🎨",
      },
      {
        title: "Mobile Apps",
        description:
          "Professional development of applications for iOS and Android.",
        icon: "📱",
      },
      {
        title: "Photography",
        description:
          "I make high-quality photos of any category at a professional level.",
        icon: "📸",
      },
    ],
    imageUrl: avatar,
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-[length:200%_200%] animate-wave text-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Sidebar profile={profile} />
            <MainContent profile={profile} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
