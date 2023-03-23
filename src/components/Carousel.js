import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "../App.css";
import Buttons from "./Buttons";
import SocialIcons from "./SocialIcons";

const Crousel = () => {
  var width = window.innerWidth;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      controls={width > 500 && `false`}
      activeIndex={index}
      onSelect={handleSelect}
      className="hide-indicators"
    >
      <Carousel.Item>
        <div
          style={{
            position: "relative",
            height: "95vh",
            backgroundColor: "black",
          }}
        >
          <img
            className="d-block w-100 item_image"
            style={{
              objectFit: "cover",
              height: "100vh",
              position: "absolute",
            }}
            src="/Images/hero-bg.jpeg"
            alt="First slide"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              textAlign: "center",
              width: "80%",
            }}
          >
            <h3 style={{ fontSize: 50, marginBottom: "20px" }}>
              The Best IT Solutions for Your Business
            </h3>

            <p style={{ marginBottom: "50px", fontWeight: "300" }}>
              We provide the wide range of high quality IT services and best
              practices solutions to our customers making their business better.
              Award-Winning
            </p>
            <Buttons color="#f8a440" title="Start your project" />
          </div>
          <SocialIcons />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            position: "relative",
            height: "95vh",
            backgroundColor: "black",
          }}
        >
          <img
            className="d-block w-100 item_image"
            style={{
              objectFit: "cover",
              height: "100vh",
              position: "absolute",
            }}
            src="/Images/hero-bg.jpeg"
            alt="First slide"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              textAlign: "center",
              width: "80%",
            }}
          >
            <h3 style={{ fontSize: 50, marginBottom: "20px" }}>
              Award-Winning Software Development
            </h3>
            <div style={{}}>
              <p style={{ marginBottom: "50px", fontWeight: "300" }}>
                We build complex web, desktop and mobile applications. With us
                you get quality software and perfect service every time.
              </p>
            </div>
            <Buttons color="#f8a440" title="View case studies" />
          </div>
          <SocialIcons />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            position: "relative",
            height: "95vh",
            backgroundColor: "black",
          }}
        >
          <img
            className="d-block w-100 item_image"
            style={{
              objectFit: "cover",
              height: "100vh",
              position: "absolute",
            }}
            src="/Images/hero-bg.jpeg"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              textAlign: "center",
              width: "80%",
            }}
          >
            <h3 style={{ fontSize: 50, marginBottom: "20px" }}>
              24/7 Tech & Business Support
            </h3>
            <div>
              <p style={{ marginBottom: "50px", fontWeight: "300" }}>
                We ensure lifetime support of all applications we've built. Our
                support department is a team of professionals who will assist
                you 24/7.
              </p>
            </div>
            <Buttons title="Work with us" color="#f8a440" />
          </div>
          <SocialIcons />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Crousel;
