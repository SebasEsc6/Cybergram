import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Pages/Homepage'
//import './index.css'
import './css/EstilosHome.css'
import './css/ProfilePage.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ProfilePage from './Pages/ProfilePage'
import SearchPage from './Pages/SearchPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='profile' element={<ProfilePage/>}/>
    <Route path='Search' element={<SearchPage/>}/>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
