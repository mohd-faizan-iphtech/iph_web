import React from "react";
import "../App.css";

const SocialIcons = () => {
  
  return (
    <div className="container">
      <div className=" container bottom-0 d-flex flex-column flex-sm-row align-items-center justify-content-between position-absolute zindex-5 pb-2">
        <div className="d-flex mb-2 ">
          <a
            href="#"
            className="btn btn-icon btn-secondary btn-linkedin rounded-circle me-2 text-align-center"
          >
            <i className="bi bi-linkedin mx-0 text-align-center"></i>
          </a>
          <a
            href="#"
            className="btn btn-icon btn-secondary btn-facebook rounded-circle me-2 text-align-center"
          >
            <i className="bi bi-facebook mx-0 text-align-center"></i>
          </a>
          <a
            href="#"
            className="btn btn-icon btn-secondary btn-twitter rounded-circle me-2 text-align-center"
          >
            <i className="bi bi-twitter mx-0 text-align-center"></i>
          </a>
          <a
            href="#"
            className="btn btn-icon btn-secondary btn-youtube rounded-circle me-2 text-align-center"
          >
            <i className="bi bi-youtube mx-0 text-align-center"></i>
          </a>
        </div>
        <a style={{ color: "white" }} href="#" className="case_studies">
          Our case studies
          <i className="bi bi-arrow-right-circle mx-1"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
