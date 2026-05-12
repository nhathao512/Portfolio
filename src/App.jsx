import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";
import { profileData } from "./constants";

const App = () => {
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

      <div className="relative min-h-screen px-4 py-5 text-gray-100 sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-7xl">
          <Header />
          <div className="mt-5 grid grid-cols-1 items-start gap-5 lg:mt-8 lg:grid-cols-[minmax(260px,320px)_1fr] lg:gap-8">
            <Sidebar profile={profileData} />
            <main className="min-w-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
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
