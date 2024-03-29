import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Pages/Homepage";

import "./css/Estilos.css";
import "./css/EstilosHome.css";
import "./css/Profilepage.css";
import "../../Cybergram/src/Pages/InChatPage/InChatPage.css";
import "./Pages/Loginpage/Loginpage.css";

import InChatPage from "./Pages/InChatPage/InChatPage";
import LoginPage from "./Pages/Loginpage/Loginpage";
import Registerpage from "./Pages/Registerpage/Registerpage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProfilePage from "./Pages/Pageprofile";
import SearchPage from "./Pages/SearchPage/SearchPage";
import SettingsPage from "./Pages/SettingsPage";

import Uploadpage from "./Pages/UploadPage/UploadPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/config" element={<SettingsPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/Chat" element={<InChatPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/upload" element={<Uploadpage />} />
      </Routes>
    </BrowserRouter>
  </>
);
