import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Pages/Homepage'
import './css/Estiloshome.css'
import './css/Profilepage.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Pageprofile from './Pages/Pageprofile'
import SearchPage from './Pages/SearchPage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='profile' element={<Pageprofile />}/>
    <Route path='Search' element={<SearchPage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
