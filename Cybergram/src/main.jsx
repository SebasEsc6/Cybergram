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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProfilePage from "./Pages/Pageprofile";
import SearchPage from "./Pages/SearchPage/SearchPage";

import SettingsPage from "./Pages/SettingsPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/config" element={<SettingsPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Registerpage />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/Chat" element={<InChatPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
