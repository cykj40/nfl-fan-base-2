import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent'
import SignUpComponent from '../components/SignUpComponent';
// import LoginData from '../assets/accountData'
// import Home from './Home'

export default function Login() {
  return (
    <div>
    <LoginComponent></LoginComponent>
    <SignUpComponent></SignUpComponent>
    </div>

  );
};