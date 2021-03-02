import React from "react";
import "./AboutMe.css";
import A1 from "../../Images/a1.png";
import { Col, Row } from "react-bootstrap";
export default function AboutMe() {
  return (
    <div>
      <Row className="justify-content-center" id="AbouteMe">
        <Col className="align-self-center" Col xl={4} lg={4} md={4} sm={12} xs={12} className="middle">
          <img
            src={A1}
            width="280px"
            height="280px"
            alt=""
          />
        </Col>
        <Col Col xl={8} lg={8} md={8} sm={12} xs={12}>
          <Row className="justify-content-start title">Aboute Me</Row>
          <Row className="justify-content-start">
            <Col className="backAboute">
              <p> Network Engineer and Full Stack Developer with 2+ years of
              hands-on experience designing, developing, and implementing
              applications and solutions using a range of technologies and
              programming languages. Seeking to leverage broad development
              experience and hands-on technical expertise in a challenging role
              as a Full-stack Developer.</p>
             
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
