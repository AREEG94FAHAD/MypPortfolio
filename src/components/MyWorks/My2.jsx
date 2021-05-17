import React from "react";
import "./MyWorks.css";
import P2 from "../../Images/p2.png";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Col, Row } from "react-bootstrap";

const github = [
  "https://github.com/ReCoded-Org/capstone-iraq-rct-paw-five",
  "https://github.com/AREEG94FAHAD/covide19",
  "https://github.com/AREEG94FAHAD/commerce",
  "https://github.com/AREEG94FAHAD/fyyur_udacity/tree/master/starter_code",
  'https://github.com/AREEG94FAHAD/trivia__api/tree/master/backend',
  'https://github.com/AREEG94FAHAD/coffee_shop/tree/master/backend',
  'https://github.com/AREEG94FAHAD/trivia__api/tree/master/backend',
  'https://github.com/AREEG94FAHAD/weather_app_js/tree/master/weather-app',
  'https://github.com/haval95/hangman_react_js'
];
const image = [
  "https://user-images.githubusercontent.com/30151596/117556129-45456900-b06e-11eb-803b-67f91c308eed.PNG",
  "https://www.bayancenter.org/en/wp-content/uploads/2020/02/786567679.jpg",
  "https://bloomidea.com/sites/default/files/styles/og_image/public/blog/Tipos%20de%20come%CC%81rcio%20electro%CC%81nico_0.png?itok=jC9MlQZq",
  "https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2017/03/29090546/venue-artist-booking-3.jpg",
  'https://miro.medium.com/max/769/1*K0F2uy0j5kAdhO7pfgOWxQ.png',
  'https://travellerdaily.info/wp-content/uploads/2020/03/Iraqi_tea.jpg',
  'https://www.psd.gov.sg/images/default-source/challenge-library/lifestyle/trivia-quiz/quiz-trivia-edm/trivia-quiz-yellow-main-720x400.jpg',
  'https://cdn.dribbble.com/users/967046/screenshots/2289935/6_icons1.jpg',
  'https://cdn.dribbble.com/users/2738683/screenshots/5856576/hagman_icons_logo_preview.jpg?compress=1&resize=400x300'
];
const title = ["Paw-Five", "commerce", "Musical venue and Artist booking",'Articles API','Coffee Shop','Trivia API','weather app','Hangman game'];
const body = [
  'paw five is an online platform who works toward saving pets from All over iraq by providing a away in which people who want to adope pets can easily find a pet to adopt from all cities of iraq and kurdistan',
  'web app for monitoring status " corona virus " in Iraq',
  "eBay-like e-commerce auction site that will allow users to post auction listings, place bids on listings, comment on those listings",
  "Fyyur is a musical venue and artist booking site that facilitates the discovery and bookings of shows between local performing artists and venues.",
  'RESTFUL API for Display, Delete, Add , and update articles',
  ' cafe for students to order drinks',
  'RESTFUL API for Display questions, Delete questions, Add questions,Play the quiz game',
  'A weather web application using React',
  ' The most Dangerous game you will ever play! if you don\'t win aperson will be hanged 👨‍🦱🔪 !!'
];

export default function My2() {
  return (
    <>
      <Row id="Myworks" className="justify-content-center title" id="Skills">
        My Works
      </Row>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        
{ image.map((e,i)=>(
        <MDBCol>
          <MDBCard style={{ maxWidth: "440px" }} className="h-100">
            <MDBCardImage
              src={e} alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>{title[i]}</MDBCardTitle>
              <MDBCardText>
                {" "}
                {body[i]}
              </MDBCardText>
              <MDBCardText className="text-end">
                <a href={github[i]}>
                  <i class="fab fa-github icon"></i>
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>))
        
        }



        <MDBCol>
          <MDBCard style={{ maxWidth: "440px" }} className="h-100">
            <MDBCardImage src={P2} alt="..." position="top" />
            <MDBCardBody>
              <MDBCardTitle>You can find more </MDBCardTitle>

              <MDBCardText className="text-end">
                <a href="https://github.com/AREEG94FAHAD">
                  {" "}
                  <i class="fab fa-github icon"></i>
                </a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
}
