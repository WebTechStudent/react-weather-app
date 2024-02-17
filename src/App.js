import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
  <div className="App"> 
  <div className="container">
 <Weather />
  <footer>
    This project was coded by{" "} 
    <a href="https://www.shecodes.io/" 
    target="_blank"
    rel="noopener noreferrer"
    >
  Liudmyla
  </a>{" "}
  and is{" "}
     <a href="https://github.com/WebTechStudent/react-weather-app/tree/main" 
     target="_blank"
     rel="noopener noreferrer"
     > 
  open-sourced on GitHub
    </a> 
  </footer>
  </div>
</div>
 )
}; 


