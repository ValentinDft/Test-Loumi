import React from "react"
import Slide from "./components/Slide"
import './App.css';
import 'react-slideshow-image/dist/styles.css'

function App() {
  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
      <h4>Candidats</h4>
      <Slide/>
    </div>
  );
}

export default App;
