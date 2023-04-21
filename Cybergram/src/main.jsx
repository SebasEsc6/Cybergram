import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Pages/Homepage'
//import './index.css'
import './css/Estilos.css'
import InChatPage from './Pages/InChatPage'
import LoginPage from './Pages/Loginpage'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InChatPage/>
    
    <FontAwesomeIcon icon={faUser}/>
  
   
    
  
  </React.StrictMode>,
 
);


