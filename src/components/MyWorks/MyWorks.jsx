import React from "react";
import "./MyWorks.css";
import P1 from "../../Images/p1.png";
import P2 from "../../Images/p2.png";
import { Col, Row } from "react-bootstrap";

export default function MyWorks() {
  return (
    <div>
      <Row className="justify-content-center title" id="Myworks">My Works</Row>

      <Row className="d-flex justify-content-around  back">
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          {" "}
          <div className="item">
            <h1>Covid19</h1>
            <p>web app for monitoring status " corona virus " in Iraq</p>
            <i class="fab fa-github"></i>
          </div>{" "}
        </Col>
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          <img
            src={P1}
            width="300px"
            height="280px"
            style={{ marginTop: "-15px" }}
            alt=""
          />
        </Col>
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          {" "}
          <div className="item">
            <h1>commerce</h1>
            <p>
              {" "}
              eBay-like e-commerce auction site that will allow users to post
              auction listings, place bids on listings, comment on those
              listings
            </p>
            <i class="fab fa-github"></i>
          </div>{" "}
        </Col>
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          {" "}
          <div className="item">
            <h1>Musical venue and Artist booking</h1>
            <p>
              Fyyur is a musical venue and artist booking site that facilitates
              the discovery and bookings of shows between local performing
              artists and venues.
            </p>
            <i class="fab fa-github"></i>
          </div>{" "}
        </Col>
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          {" "}
          <div className="item">
            <h1>commerce</h1>
            <p>web app for monitoring status " corona virus " in Iraq</p>
            <i class="fab fa-github"></i>
          </div>{" "}
        </Col>
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          {" "}
          <div className="item">
            <h1>Articles API</h1>
            <p>
              RESTFUL API for Display articles, Delete articles, Add
              articles,update articles
            </p>
            <i class="fab fa-github"></i>
          </div>{" "}
        </Col>
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          {" "}
          <div className="item">
            <h1>Coffee Shop</h1>
            <p>cafe for students to order drinks</p>
            <i class="fab fa-github"></i>
          </div>{" "}
        </Col>
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          {" "}
          <div className="item">
            <h1>Trivia API</h1>
            <p>
              RESTFUL API for Display questions, Delete questions, Add
              questions,Play the quiz game
            </p>
            <i class="fab fa-github"></i>
          </div>{" "}
        </Col>
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          {" "}
          <div className="item">
            <h1>weather_app_js</h1>
            <p>A weather web application using React</p>
            <i class="fab fa-github"></i>
          </div>{" "}
        </Col>
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          {" "}
          <div className="item">
            <h1>Hangman game</h1>
            <p>
              The most Dangerous game you will ever play! if you don't win a
              person will be hanged 👨‍🦱🔪 !!
            </p>
            <i class="fab fa-github"></i>
          </div>{" "}
        </Col>
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          {" "}
          <div className="item">
            <img
              src={P2}
              width="250px"
              height="190px"
              style={{ marginTop: "-15px" }}
              alt=""
            />
            <p>You can find more here ...</p>
            <i class="fab fa-github"></i>
          </div>{" "}
        </Col>
      </Row>
    </div>
  );
}
