import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";
import avatar from './assets/avatar.jpg'

const App = () => {
  const profile = {
    name: "Võ Nhật Hào",
    title: "A future Software Developer from Vietnam",
    about:
      "A future Software Developer from Vietnam. I enjoy turning complex problems into simple, beautiful and intuitive designs.",
    contact: {
      email: "vonhathao641@gmail.com",
      phone: "+84 334 944 908",
      location: "Hồ Chí Minh, Việt Nam",
    },
    services: [
      {
        title: "Web Development",
        description:
          "High-quality development of sites at the professional level.",
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
    imageUrl: avatar, // Thêm đường dẫn ảnh vào đây
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          {/* <Header /> */}
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
