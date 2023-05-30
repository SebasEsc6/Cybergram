import React from "react";
import { useNavigate } from "react-router-dom";
import xButton from "../../../assets/Multimedia/imgs/xButton.png";

function CancelItem() {
  const navigate = useNavigate();

  const Register = () => {
    navigate("/home");
  };

  return (
    <button className="GoHome" onClick={Register}>
      <img src={xButton}></img>
    </button>
  );
}

export default CancelItem;
