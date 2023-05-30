import React from "react";
import doneButton from "../../../assets/Multimedia/imgs/xButton.png";

function AcceptItem() {
  const navigate = useNavigate();

  const Register = () => {
    navigate("/home");
  };

  return (
    <button className="GoHome2" onClick={Register}>
      <img src={doneButton}></img>
    </button>
  );
}

export default AcceptItem;
