import './App.scss';
import React, {useState } from "react";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";

function App() {
  const [menuOpen,setMenuOpen]= useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        </div> 
    </div>
  );
}

export default App;

