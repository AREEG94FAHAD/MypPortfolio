import React from "react";
import "./Education.css";
import E1 from "../../Images/ed.png";
import { Col, Row } from "react-bootstrap";

export default function Education() {
  return (
    <div>
      <Row className="justify-content-center title" id="Education">
      <Col Col xl={8} lg={8} md={8} sm={12} xs={12}>
          <Row className="justify-content-start title">Education</Row>
          <Row className="justify-content-start">
            <Col className="Education">
              <p>
                {" "}
                <ul>Al-Nahrain University</ul> 
                2016 - 2019 | MS in Network Engineering
              </p>
              <p><ul>Al Iraqia University </ul>2012-2016 | BSc in Network Engineering</p>
            </Col>
          </Row>
        </Col>
        <Col className="align-self-center" Col xl={4} lg={4} md={4} sm={12} xs={12}>
          <img
            src={E1}
            width="280px"
            height="300px"
            alt=""
          />
        </Col>

      </Row>
    </div>
  );
}
