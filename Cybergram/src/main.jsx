import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Pages/Homepage'


import './css/Estilos.css'
import './css/EstilosHome.css'
import InChatPage from './Pages/InChatPage'
import LoginPage from './Pages/LoginPage'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faLock, faEnvelope,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './css/ProfilePage.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ProfilePage from './Pages/ProfilePage'
import SearchPage from './Pages/SearchPage'
import Registerpage from './Pages/Registerpage'
import SettingsPage from './Pages/SettingsPage'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
 
  <BrowserRouter>
  
    <Routes>
    <Route path='/search' element={<SearchPage/>}/>
    <Route path='/config' element={<SettingsPage/>}/>
    <Route path='/home' element={<Homepage/>}/>
    <Route path='/' element={<Registerpage/>}/>
    <Route path='/home' element={<Homepage/>}/>
    <Route path='/profile' element={<ProfilePage/>}/>
    <Route path='/Search' element={<SearchPage/>}/>
    <Route path='/profile' element={<ProfilePage/>}/>
    <Route path='/Chat' element={<InChatPage/>}/>
    <Route path='/loginpage' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
    <FontAwesomeIcon icon={faUser}/>
    <FontAwesomeIcon icon={faLock}/>
    </React.StrictMode>,

    
)
  



