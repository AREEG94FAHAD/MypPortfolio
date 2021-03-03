import React from "react";
import Ex from "../../Images/ex.png";
import { Col, Row } from "react-bootstrap";

export default function Experience() {
  return (
    <div>
      <Row className="justify-content-center title" id="Experienec">
      <Col className="align-self-center" Col xl={4} lg={4} md={4} sm={12} xs={12}>
          <img
            src={Ex}
            width="280px"
            height="300px"
            style={{ marginTop: "15px" }}
            alt=""
          />
        </Col>
        <Col Col xl={8} lg={8} md={8} sm={12} xs={12}>
          <Row className="justify-content-start title">Experience</Row>
          <Row className="justify-content-start">
            <Col className="Education">
              <p>
                {" "}
                <ul>2019 - FreeLancer</ul>
                <li>
                  Full Stak Deve Analyze user requirements. Create innovative,
                  scalable, fault-tolerantsoftware solutions for the clients.
                  Write and test code to ensure compatibility andstability:
                  refine and rewrite as necessary Create clear technical
                  specifications
                </li>
              </p>
<hr></hr>
              <p>
                <ul>2018 - AL-Nahrain University</ul>Assistant Lecturer Teach
                as a member of a teaching team within anestablished programme of
                study Develop own teaching materials, methods andapproaches
                taking into account established or agreed practices where
                necessary.{" "}
              </p>
            </Col>
          </Row>
        </Col>
        
      </Row>
    </div>
  );
}
