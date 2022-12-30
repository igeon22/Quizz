// import React,{useState,useEffect} from "react";
import  ReactDOM  from "react-dom/client";
import App from './App'
import HighScore from "./components/HighScore";
import  MainMenu from './components/MainMenu'



let root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<MainMenu></MainMenu>)


export default root

