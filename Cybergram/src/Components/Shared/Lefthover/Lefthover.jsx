import React from "react";
import CardPages from "../../Index/CardPages";
import home from "../../../assets/Multimedia/imgs/Icon-Home.png";
import chat from "../../../assets/Multimedia/imgs/Icon-chat.png";
import search from "../../../assets/Multimedia/imgs/Icon-search.png";
import user from "../../../assets/Multimedia/imgs/Icon-User.png";
import upload from "../../../assets/Multimedia/imgs/Icon-upload.png";
import { useNavigate } from "react-router";
import "./LeftHover.css";

function Lefthover() {
  const navigate = useNavigate();
  const Upload = () => {
    navigate("/upload");
  };

  return (
    <div className="LeftHover">
      <h1 className="titulo">CYBERGRAM</h1>

      <CardPages icon={home} route="/home" text="HOME" />
      <CardPages icon={user} route="/profile" text="PROFILE" />
      <CardPages icon={search} route="/search" text="SEARCH" />
      <CardPages icon={chat} route="/Chat" text="MESSAGES" />

      <div className="divUpload">
        <button onClick={Upload} className="addBttn"></button>
        <h1 className="Upload">UPLOAD</h1>
      </div>
    </div>
  );
}

export default Lefthover;
