import React from "react";
import "./MySkills.css";
import { Row, Col } from "react-bootstrap";
// npm install --save-dev @iconify/react @iconify-icons/cib
import { Icon } from "@iconify/react";
import flaskIcon from "@iconify-icons/cib/flask";
import djangoIcon from "@iconify-icons/cib/django";
import postgresqlIcon from "@iconify-icons/cib/postgresql";
import javaIcon from "@iconify-icons/cib/java";
// npm install --save-dev @iconify/react @iconify-icons/carbon
// import { Icon, InlineIcon } from '@iconify/react';
import apiIcon from "@iconify-icons/carbon/api";

export default function MySkills() {
  return (
    <div>
      <Row className="justify-content-center title">SKILLS</Row>
      <Row className="d-flex justify-content-around">
        {/* <Row className="d-flex justify-content-around ml-5"> */}
        <Col className="" xl={3} lg={3} md={4} sm={6} xs={12}>
          <i class=" skills fab fa-html5"></i>
          {"  "}HTML
          <br />
          <i class=" skills fab fa-css3"></i>
          {"  "}CSS
          <br />
          <i class="skills fab fa-bootstrap"></i>
          {"  "}BootStrap
        </Col>
        <Col className="" xl={3} lg={3} md={4} sm={6} xs={12}>
          <i class=" skills fab fa-js-square"></i>
          {"  "}JavaScript
          <br />
          <i class="skills fab fa-react"></i>
          {"  "}React js
          <br />
          <i class=" skills fab fa-vuejs"></i>
          {"  "}Vue Js
        </Col>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <i class=" skills fab fa-python"></i>
          {"  "}Python
          <br />
          <Icon className="skills" icon={flaskIcon} /> {"  "}Flask
          <br />
          <Icon className="skills" icon={djangoIcon} />
          {"  "}Django
        </Col>
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
          <li>
            <Icon className="skills" icon={postgresqlIcon} />
            {"  "}PostgresSQL
          </li>

          <li>
            <Icon className="skills" icon={javaIcon} />
            {"  "}JAVA
          </li>

          <li>
            <Icon className="skills" icon={apiIcon} />
            {"  "}RESTful API
          </li>
        </Col>
      </Row>
    </div>
  );
}
