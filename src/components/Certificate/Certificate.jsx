import React from "react";
import "./Certificate.css";
import { Slide } from "react-slideshow-image";
import A from "../../Certificates/cs.jpg";
import B from "../../Certificates/dj.jpg";
import C from "../../Certificates/le.jpg";
import D from "../../Certificates/li.PNG";
import E from "../../Certificates/ud.jpg";
// import B from "../../Certificates/dj";
// import C from "../../Certificates/le";
// import D from "../../Certificates/li";
// import E from "../../Certificates/ud";
import "react-slideshow-image/dist/styles.css";
import { Col, Row } from "react-bootstrap";

export default function Certificate() {
  return (
    <div id="Certificates">
      <Row className="justify-content-center title" id="Myworks">Certificates</Row>
      <Slide easing="ease">
        <div className="each-slide">
          <div className="m-5">
            <img src={A} width="280px" height="300px" alt="" />
          </div>
        </div>
        <div className="each-slide">
          <div className="m-5">
            <img src={B} width="280px" height="300px" alt="" />
          </div>
        </div>
        <div className="each-slide">
          <div className="m-5">
            <img src={C} width="280px" height="300px" alt="" />
          </div>
        </div>
        <div className="each-slide">
          <div className="m-5">
            <img src={D} width="280px" height="300px" alt="" />
          </div>
        </div>
        <div className="each-slide">
          <div className="m-5">
            <img src={E} width="280px" height="300px" alt="" />
          </div>
        </div>
      </Slide>
    </div>
  );
}
