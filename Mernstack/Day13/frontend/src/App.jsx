import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Account from "./pages/Account";
import Premium from "./pages/Premium";
import About from "./pages/About";
import Episode from "./pages/Episode";
import AudioPlayer from "./components/AudioPlayer";
import "./App.css";

function App() {
  const [currentPodcast, setCurrentPodcast] = useState(null);

  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Routes>
          <Route path="/" element={<Home setCurrentPodcast={setCurrentPodcast} />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/account" element={<Account />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/about" element={<About />} />
          <Route path="/episode/:id" element={<Episode setCurrentPodcast={setCurrentPodcast} />} />
        </Routes>
      </div>

      <AudioPlayer podcast={currentPodcast} />
    </div>
  );
}

export default App;