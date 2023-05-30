import React, { useState } from "react";
import Gohome from "../../Components/Shared/Gohome/Gohome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";
import { registerUser } from "../../services/services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Registerpage.css";

function Registerpage() {
  const navigate = useNavigate();

  const casa = () => {
    navigate("/");
  };

  const [RegisterData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setRegisterData({
      ...RegisterData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, password, email } = RegisterData;
      const followers = 0;
      const following = 0;
      const photoUser = "";
      const result = await registerUser(
        name,
        email,
        password,
        followers,
        following,
        photoUser
      );
      ToastBien();
      casa();
      console.log(result);
    } catch (error) {
      ToastMal;
      console.error(error);
    }
  };

  const ToastBien = () => {
    toast("Register completed!");
  };
  const ToastMal = () => {
    toast("No se realizo correctamente el registro!!!");
  };

  return (
    <div className="Register">
      <ToastContainer />
      <h2>CREATE YOUR ACCOUNT </h2>

      <form onChange={handleChange} onSubmit={handleSubmit}>
        <div className="inputBx">
          <a>Usuario</a>
          <br />
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input type="text" id="name" placeholder="Username" />
        </div>
        <div className="inputBx">
          <br />
          <a>Contraseña</a>
          <br />
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            placeholder="Password"
            id="password"
            icon={<FontAwesomeIcon icon={faLock} />}
          />
        </div>

        <div className="inputBx">
          <br />
          <a>Email</a>
          <br />
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            type="text"
            placeholder="email"
            id="email"
            icon={<FontAwesomeIcon icon={faEnvelope} />}
          />
        </div>
        <div>
          <br />
          <br />

          <div className="inputBx">
            <input type="submit" value="Sign in" onClick={handleSubmit} />
          </div>

          <br />

          <div className="inputBx">
            <FontAwesomeIcon icon={faFacebook} />
            <input
              type="submit"
              value="Sign in with facebook"
              icon={<FontAwesomeIcon icon={faFacebook} />}
            />
          </div>

          <br />

          <div className="inputBx">
            <FontAwesomeIcon icon={faGoogle} />
            <input
              type="submit"
              value="Sign in with Google"
              icon={<FontAwesomeIcon icon={faGoogle} />}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registerpage;
