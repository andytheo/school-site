import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";

export default function Classes() {
  return (
    <div  style={{backgroundColor: "#161E54"}} className="pb-5 mt-5">
    <section className="container py-1">
      <div className="underline text-center text-light h3 mt-5 mb-5">Our classes</div>
      <div data-aos="zoom-out" data-aos-duration="1000">
    <MDBRow className='row-cols-1 row-cols-md-3 row-cols-sm-8 row-cols-lg-4 row-cols-xs-12 g-4'>
      <Link to="/creche" className="our-classes">
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='./images/segun-osunyomi-3BztcJxliEM-unsplash.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Creche</MDBCardTitle>
            <MDBCardText>
              We provide the best teaching methods for teaching young children.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </Link>

    <Link to="/nursery" className="our-classes">
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='./images/cdc-GDokEYnOfnE-unsplash.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Nursery</MDBCardTitle>
            <MDBCardText>
               We train all our pupils to grow and become leaders of tomorrow.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </Link>

    <Link to="/primary" className="our-classes">
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='./images/omotayo-kofoworola-W9OQnSdsv6A-unsplash.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Primary</MDBCardTitle>
            <MDBCardText>
              We ensure to offer a strong educational foundation is offered to all our pupils.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </Link>

    <Link to="/secondary" className="our-classes">
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='./images/ben-white-83tkHLPgg2Q-unsplash.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Secondary</MDBCardTitle>
            <MDBCardText>
              We prepare students with the right knowledge and skils to excel in the world.
             </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </Link>
    </MDBRow>
    </div>
    </section>
    </div>

  );
}
