import React from 'react';
import P2 from "../../Images/p2.png";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol,MDBBtn } from 'mdb-react-ui-kit';

export default function My2() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        <MDBCol>
        <MDBCard  style={{ maxWidth: '440px' }} className='h-100'>
          <MDBCardImage
            src='https://www.bayancenter.org/en/wp-content/uploads/2020/02/786567679.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody >
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText >This is a short card.</MDBCardText>
            <MDBCardText className="text-end"><i class="fab fa-github icon"></i></MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard style={{ maxWidth: '440px' }} className='h-100'>
          <MDBCardImage
            src='https://lnsel.com/wp-content/uploads/2019/03/ecommerce-website-design-768x432.png'
            alt='...'
            position='top'
          />
          <MDBCardBody >
            <MDBCardTitle>commerce</MDBCardTitle>
            <MDBCardText >eBay-like e-commerce auction site that will allow users to post
              auction listings, place bids on listings, comment on those
              listings</MDBCardText>
            <MDBCardText className="text-end"><i class="fab fa-github icon"></i></MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ maxWidth: '440px' }} className='h-100'>
          <MDBCardImage
            src='https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2017/03/29090546/venue-artist-booking-3.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody >
            <MDBCardTitle>Musical venue and Artist booking</MDBCardTitle>
            <MDBCardText >Fyyur is a musical venue and artist booking site that facilitates
              the discovery and bookings of shows between local performing
              artists and venues.</MDBCardText>
            <MDBCardText className="text-end"><i class="fab fa-github icon"></i></MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    
      <MDBCol>
        <MDBCard style={{ maxWidth: '440px' }} className='h-100'>
          <MDBCardImage
            src='https://miro.medium.com/max/769/1*K0F2uy0j5kAdhO7pfgOWxQ.png'
            alt='...'
            position='top'
          />
          <MDBCardBody >
            <MDBCardTitle>Articles API</MDBCardTitle>
            <MDBCardText > RESTFUL API for Display articles, Delete articles, Add
              articles,update articles</MDBCardText>
            <MDBCardText className="text-end"><i class="fab fa-github icon"></i></MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>


      <MDBCol>
        <MDBCard style={{ maxWidth: '440px' }} className='h-100'>
          <MDBCardImage
            src='https://travellerdaily.info/wp-content/uploads/2020/03/Iraqi_tea.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody >
            <MDBCardTitle>Coffee Shop</MDBCardTitle>
            <MDBCardText > cafe for students to order drinks</MDBCardText>
            <MDBCardText className="text-end"><i class="fab fa-github icon"></i></MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard style={{ maxWidth: '440px' }} className='h-100'>
          <MDBCardImage
            src='https://quizapi.io/storage/QuziApi_Logo_Dark.png'
            alt='...'
            position='top'
          />
          <MDBCardBody >
            <MDBCardTitle>Trivia API</MDBCardTitle>
            <MDBCardText >  RESTFUL API for Display questions, Delete questions, Add
              questions,Play the quiz game</MDBCardText>
            <MDBCardText className="text-end"><i class="fab fa-github icon"></i></MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>


      <MDBCol>
        <MDBCard style={{ maxWidth: '440px' }} className='h-100'>
          <MDBCardImage
            src='https://cdn.dribbble.com/users/967046/screenshots/2289935/6_icons1.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody >
            <MDBCardTitle>weather app</MDBCardTitle>
            <MDBCardText > A weather web application using React</MDBCardText>
            <MDBCardText className="text-end"><i class="fab fa-github icon"></i></MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ maxWidth: '440px' }} className='h-100'>
          <MDBCardImage
            src='https://cdn.dribbble.com/users/2738683/screenshots/5856576/hagman_icons_logo_preview.jpg?compress=1&resize=400x300'
            alt='...'
            position='top'
          />
          <MDBCardBody >
            <MDBCardTitle>Hangman game</MDBCardTitle>
            <MDBCardText >  The most Dangerous game you will ever play! if you don't win a
              person will be hanged 👨‍🦱🔪 !!</MDBCardText>
            <MDBCardText className="text-end"><i class="fab fa-github icon"></i></MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard style={{ maxWidth: '440px' }} className='h-100'>
          <MDBCardImage
            src={P2}

            alt='...'
            position='top'
          />
          <MDBCardBody >
            <MDBCardTitle>You can find more </MDBCardTitle>
            
            <MDBCardText className="text-end"><i class="fab fa-github icon"></i></MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow>
  );
}