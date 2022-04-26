import React from 'react';

import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Intro(props) {
  return (
    <section className="container mb-5" style={{margin: "80px 0"}}>
      <MDBContainer className="text-dark">
          <MDBRow className="mb-2 d-flex justify-content-center">
            <MDBCol size='md' data-aos="fade-up" data-aos-duration="1000" className='mx-5 mb-2 col-example lh-lg' style={{width: 500, textAlign: "justify"}}>
              <h2>{props.title}</h2>
              <p>
                {props.firstParagraph}
              </p>
              <p>{props.secondParagraph}</p>
              </MDBCol>

            <MDBCol size='md' className="d-none d-sm-none d-lg-block d-xl-block" style={{width: 200, height: 300, margin: "50px 0"}}>
              <img className='img-fluid shadow-3 rounded-3' data-aos="fade-left" src='./images/Pecuty-2/IMG-20211024-WA0044.jpg'
              alt='Teacher in class' />
            </MDBCol>

        </MDBRow>
      </MDBContainer>
    </section>
  );
}
