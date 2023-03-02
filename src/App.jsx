import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutApp } from "./pages/AboutApp";
import { GameSettings } from "./pages/GameSettings";

import { GreetingPage } from "./pages/GreetingPage";
import { HowToPlay } from "./pages/HowToPlay";
import { MainPage } from "./pages/MainPage";
function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/greeting" element={<GreetingPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/howtoplay" element={<HowToPlay />} />
        <Route path="/gamesettings" element={<GameSettings />} />
        <Route path="/aboutapp" element={<AboutApp />} />
        <Route path="/" element={<Navigate to="/greeting" />} />
      </Routes>
    </React.StrictMode>
  );
}

export default App;
