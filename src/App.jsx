import React from "react";
import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutApp } from "./pages/AboutApp";
import { GameSettings } from "./pages/GameSettings";
import { store } from "./store";

import { GreetingPage } from "./pages/GreetingPage";
import { HowToPlay } from "./pages/HowToPlay";
import { MainPage } from "./pages/MainPage";
import { PlayOffline } from "./pages/PlayOffline";
import { PlayOnline } from "./pages/PlayOnline";
function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path="/greeting" element={<GreetingPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/howtoplay" element={<HowToPlay />} />
          <Route path="/gamesettings" element={<GameSettings />} />
          <Route path="/aboutapp" element={<AboutApp />} />
          <Route path="/playoffline" element={<PlayOffline />} />
          <Route path="/playonline" element={<PlayOnline />} />
          <Route path="/" element={<Navigate to="/greeting" />} />
        </Routes>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
