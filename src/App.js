import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import{BrowserRouter, Routes,Route} from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
function App(){
  return(
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App