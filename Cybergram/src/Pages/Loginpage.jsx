import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';


const Login_Page = () => {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
  );
  const [userData, setUserData] = useState({
    usuario: "",
    password: "",
  });
  const database = [
    {
      username: "Usuario1",
      password: "Usuario1"
    },
    {
      username: "Usuario2",
      password: "Usuario2"
    }
  ];
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });

      } else {
        setIsSubmitted(true);
        
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    
    console.log("REGISTRADISIMO MI PAPA ")
    console.log("C VA AL LOGIN")
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));

    
    
        
      }; 
  
  return (
    <div className='Login'>
    
      <h2>SIGN IN</h2>

      
      <form className='Form' onSubmit={handleSubmit}>
        <div className='inputBx'>
        <a>Usuario</a><br/>
        <FontAwesomeIcon icon={faUser}  className= "icon"/>
          <input 
            type='text'
            placeholder="Username"
          />
          </div>
          <div className='inputBx'>
          {renderErrorMessage("uname")}<br/>
        <a>Contraseña</a><br/>
        <FontAwesomeIcon icon={faLock} />
          <input 
            type="password" placeholder="Password" icon= {<FontAwesomeIcon icon={faLock} />}
          />
          </div>
          <div>
          {renderErrorMessage("pass")}<br/>
          <div className="inputBx">
				<input type="submit" value="Sign in"/>
			</div>
        </div>
      </form>
    </div>
    
  )
};

export default Login_Page


