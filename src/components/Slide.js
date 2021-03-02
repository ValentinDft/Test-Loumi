import React from "react"
import '../App.css';
import 'react-slideshow-image/dist/styles.css'
import img from "../img.jpg"

function Slide() {
  return (
    
      <div className="card">
        <h3>Colocation 4 pers.</h3> 
        <div style={{display: "flex", justifyContent: "center", padding:"5px"}}>
            <img src={img} style={{height: "40px",width: "40px", borderRadius: "100%"}}></img>
            <div style={{display: "flex", flexDirection: "column", padding: "8px"}}>
                <h5 style={{margin: "0px"}}>J-C L'Auberivière</h5>
                <div style={{textAlign: "left", width: "10px"}}>
                    <span style={{fontSize: "10px", padding: "3px", border: "1px solid grey"}}>CDI</span>
                </div>
            </div>
            
        </div>
        <div style={{display: "flex", justifyContent: "center", padding:"5px"}}>
            <img src={img} style={{height: "40px",width: "40px", borderRadius: "100%"}}></img>
            <div style={{display: "flex", flexDirection: "column", padding: "8px"}}>
                <h5 style={{margin: "0px"}}>J-C L'Auberivière</h5>
                <div style={{textAlign: "left"}}>
                    <span style={{fontSize: "10px", padding: "3px", border: "1px solid grey"}}>Profession Libérale</span>
                </div>
            </div>
            
        </div>
        
        <h4 style={{margin: "0px"}}>Revenu mensuel moyen</h4>
        <div style={{display: "flex", justifyContent: "space-evenly", marginBottom: "10px"}}>
        
        <div>
            <h6 style={{margin: "0px"}}>Candidats</h6>
            <h5 style={{color: "#3393F3", margin: "0px"}}>5206 €</h5>
        </div>
        <div>
            <h6 style={{margin: "0px"}}>Garants</h6>
            <h5 style={{color: "#3393F3", margin: "0px"}}>6700 €</h5>
        </div>
        
        </div>
        <button style={{backgroundColor: "#3393F3", borderRadius: "5px", width: "70%", height: "40px", color: "white", cursor: "pointer", border: "none"}}>Voir plus</button>
        <div className="footer_card">
            <h6 style={{padding: "8px", color: "white", marginTop: "10px"}}>Visite du 13 Mars à 10h35</h6>
        </div>
      </div>
    
  );
}

export default Slide;