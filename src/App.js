import React from "react"
// CSS
import './App.css';
import 'react-slideshow-image/dist/styles.css'
// Composant
import SlideCard from "./components/Slide"
// Slide
import { Slide } from 'react-slideshow-image';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  // Style slide et flèches
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} style={{cursor: "pointer", color: "#BDBDBD", fontSize: "30px"}}/>,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} style={{cursor: "pointer", color: "#BDBDBD", fontSize: "30px"}}/>
  };

  return (
    <div style={{paddingLeft: "5%", paddingRight: "5%", marginTop: "5%"}}>
      <h3>Candidats</h3>
      <div style={{width: "70%"}}>
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
