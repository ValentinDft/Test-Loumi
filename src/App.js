import React from "react"
import SlideCard from "./components/Slide"
import './App.css';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

function App() {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
    nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
  };
  return (
    <div style={{paddingLeft: "5%", paddingRight: "5%", marginTop: "5%"}}>
        <h3>Candidats</h3>
        <div style={{width: "60%"}}>
          <Slide {...properties}>
            <div className="each-slide" style={{display: "flex", justifyContent: "space-evenly", padding: "30px"}}>
              <SlideCard/>
              <SlideCard/>
              <SlideCard/>
            </div>
            <div className="each-slide" style={{display: "flex", justifyContent: "space-evenly", padding: "30px"}}>
              <SlideCard/>
              <SlideCard/>
              <SlideCard/>
            </div>
          </Slide>
        </div>
        
      </div>
  );
}

export default App;
