import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent'
// import LoginData from '../assets/accountData'
// import Home from './Home'

export default function Login() {
  return (
    <LoginComponent></LoginComponent>

  );
};


  /////////////////////////////////////////////////////////

  // const [user, setUser] = useState({ username: "", password: "" });
  // const [error, setError] = useState("");

  // const UserLogin = info => {
  //   console.log(info)

  //   if (info.username === LoginData.username && info.password === LoginData.password){
  //     console.log("logged in!");
  //     setUser({
  //       username: info.username,
  //       password: info.password
  //     })
  //   } else {
  //     console.log("Information provided is incorrect");
  //   }
  // }

  // const Logout = () => {
  //   console.log("logged out")
  // }

  ///////////////////////////////////////////////////////////////