import Reviews from "./components/Reviews";
import Description from "./components/Description";
import Header from "./components/Header";
import React from "react";
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import logo from './images/logo.png';
import './Main.css';


function Main() {
  return (
    <>
    <Header />
    <div>
        <img src={logo} alt="Логотип" style={{ width: '100px', height: 'auto' }} /> 
        </div>
      <div className="images">
        <img  src={image1} style={{ width: '300px', height: "100%" }} />
        <img  src={image2} style={{ width: '300px', height: "100%" }} />
        <img  src={image3} style={{ width: '300px', height: "100%" }} />
      </div>
      <div className="reviews">
        <Reviews />
      </div>

      <div className="description">
        <Description />
      </div>
      
    </>
  );
}

export default Main;

