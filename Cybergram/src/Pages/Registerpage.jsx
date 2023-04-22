import React from "react";
import Gohome from "../Components/Shared/Gohome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";

function Registerpage() {
  
  const navigate = useNavigate();

  const casa = () => {
    navigate('/loginpage');
  };
  return (
    <div className="Login">
      <h2>CREATE YOUR ACOUNTT </h2>

      <form className="Form">
        <div className="inputBx">
          <a>Usuario</a>
          <br />
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="inputBx">
          <br />
          <a>Contraseña</a>
          <br />
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            placeholder="Password"
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
            icon={<FontAwesomeIcon icon={faEnvelope} />}
          />
        </div>
        <div>
          <br />
          <br />

          
          <div className="inputBx">
            <input type="submit" value="Sign in"  onClick={casa}/>

          </div>
          
          <br />

          <div className="inputBx">
          <FontAwesomeIcon icon={faFacebook} />
            <input type="submit" value="Sign in with facebook" icon={<FontAwesomeIcon icon={faFacebook} />} />
          </div>

          <br />

          <div className="inputBx">
          <FontAwesomeIcon icon={faGoogle} />
            <input type="submit" value="Sign in with Google" icon={<FontAwesomeIcon icon={faGoogle} />} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registerpage;
