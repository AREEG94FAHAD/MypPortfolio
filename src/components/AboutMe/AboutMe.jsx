import React from "react";
import "./AboutMe.css";
import A1 from "../../Images/a1.png";
import { Col, Row } from "react-bootstrap";
export default function AboutMe() {
  return (
    <div>
      <Row className="justify-content-center" id="AbouteMe">
        <Col className="align-self-center" Col xl={4} lg={4} md={4} sm={12} xs={12} >
          <img
            src={A1}
            width="280px"
            height="240px"
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
      {/* <div class=" mt-4">
        <div class="col-lg-12 col-md-12 mb-lg-0 mb-4">
          <div class="card testimonial-card">
            <div className="card-up info-color"></div>

            <div class="avatar  white">
              <img src={A1} class="rounded-circle "></img>
            </div>
            <div  class="card-body text-justify">
              <div  className="row">
                <div className="col  col-lg-4 col-md-6 col-sm-12">
                  AbouteMe
                  <p class="dark-grey-text mt-4">
                    <i class="fa fa-quote-left pr-2"></i>Network Engineer and
                    Full Stack Developer with 2+ years of hands-on experience
                    designing, developing, and implementing applications and
                    solutions using a range of technologies and programming
                    languages. Seeking to leverage broad development experience
                    and hands-on technical expertise in a challenging role as a
                    Full-stack Developer..
                  </p>
                </div>
                <div align='center' className="col col-lg-4 col-md-6 col-sm-12">
                  Education
                  <p class="dark-grey-text mt-4">
                    <i class="fa fa-quote-left pr-2"></i>
                    <li>Al-Nahrain University</li>
                    2016 - 2019 | MS in Network Engineering
                    <li>Al Iraqia University</li> 
                    2012-2016 | BSc in Network Engineering
                  </p>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-12">
                  Experiences
                  <p class="dark-grey-text mt-4">
                    
                    
                    <li>2019 - FreeLancer Full</li>
                    Stak Deve Analyze user requirements. Create innovative,
                    scalable, fault-tolerantsoftware solutions for the clients.
                    Write and test code to ensure compatibility andstability:
                    refine and rewrite as necessary Create clear technical
                    specifications 
                    <li>2018 - AL-Nahrain University </li>
                     Assistant
                    Lecturer Teach as a member of a teaching team within
                    anestablished programme of study 
                    <br></br> Develop own teaching
                    materials, methods andapproaches taking into account
                    established or agreed practices where necessary.
                  </p>
                </div>
              </div>

              {/* <h4 class="font-weight-bold mb-4">Aboute Me</h4>
          <hr></hr>
        
          <p class="dark-grey-text mt-4"><i class="fa fa-quote-left pr-2">
            </i>Network Engineer and Full Stack Developer with 2+ years of
              hands-on experience designing, developing, and implementing
              applications and solutions using a range of technologies and
              programming languages. Seeking to leverage broad development
              experience and hands-on technical expertise in a challenging role
              as a Full-stack Developer..</p>  </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
