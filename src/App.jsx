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

      <div className="relative min-h-screen p-8 text-gray-100">
        <div className="mx-auto max-w-7xl">
          <Header />
          <div className="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-4">
            <Sidebar profile={profileData} />
            <main className="md:col-span-3">
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
