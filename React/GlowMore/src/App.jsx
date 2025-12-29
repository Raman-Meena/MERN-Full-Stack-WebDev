import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from './pages/Login';
import Signup from './pages/Signup';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>


      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;