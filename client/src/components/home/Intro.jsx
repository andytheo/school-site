import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Intro() {
  return (
    <div>
      <Carousel fade>
        {/* <Carousel.Item> */}
        {/* <div style={{ position: "relative" }}> */}
        {/* <img
              className="d-block w-100"
              src="./images/pexels-mary-taylor-5896631.jpg"
              alt="First slide"
            /> */}
        {/* <img className="intro-img" src="pecuty-royal-logo.png" alt="pecuty-royal-logo" /> */}
        {/* <h1 className="intro-text">Welcome to Pecuty Royal</h1> */}
        {/* </div> */}
        {/* <Carousel.Caption>
            <h3>Welcome to Pecuty Royal</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        {/* </Carousel.Item> */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/pexels-katerina-holmes-5905918.jpg"
            alt="Second slide"
          />
         <h1 className="intro-text text-center">Welcome to Pecuty Royal</h1>


          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/pexels-rfstudio-3059749.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Intro;
