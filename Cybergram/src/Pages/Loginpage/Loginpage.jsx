import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {LoginUser} from "../../services/services"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login_Page = () => {
  const navigate = useNavigate();
  const Home = () => {
    navigate("/home");
  };
  const Register = () => {
    navigate("/register");
  };

  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
    });
    const handleChange = (e) => {
      setLoginData({
        ...LoginData,
        [e.target.id]: e.target.value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { email, password } = LoginData;
        const result = await LoginUser(email, password);
        localStorage.setItem("token", JSON.stringify(result.token))
        Home();
        console.log(result);
      } catch (error) {
        ToastMal()
        console.error(error); 
      }
    };
    const ToastMal = () => {
      toast("Hay un problema con el registro");
    }
  


  return (
    <div className="Login">
      <ToastContainer/>
      <h2>SIGN IN</h2>
      <form className="Form" onChange={handleChange} onSubmit={handleSubmit}>
        <div className="inputBx">
          <a>Email</a>
          <br />
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input type="text" placeholder="Email" id="email"/>
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
        <div>
          <br />
          <div className="ButtonSignIn">
            <input type="submit" value="Sign in"  />
          </div>
          <div className="ButtonSignIn">
            <input type="submit" value="Register"  />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login_Page;
