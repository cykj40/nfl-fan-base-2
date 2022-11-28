import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarMenu from './components/NavbarMenu';
import Home from './pages/Home'
import Login from './pages/Login'
import GameData from './pages/GameData'
import Blog from './pages/Blog'
import Footer from './components/Footer'


export default function App() {
  return (
    <div>
      <Router>
        <NavbarMenu/>
        <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/gamedata" element={<GameData />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
