import React from 'react';

import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function About() {
  return (
    <section className="container mb-5" style={{margin: "80px 0",height: 400}}>
      <MDBContainer className="text-dark">
          <MDBRow className="mb-2 d-flex justify-content-center">
            <MDBCol size='md' className='mx-5 mb-2 col-example lh-lg' style={{width: 400}}>
              <div data-aos="fade-right">
              <p className="h3 underline">About</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec ultricies fermentum mollis. Aenean molestie eros odio, et viverra ante efficitur et.
                Aenean finibus arcu vitae lacinia rutrum. Etiam accumsan gravida est eget maximus. In sed fringilla tellus.
                Donec dictum lorem id purus bibendum, ac commodo neque gravida.</p>
                </div>
            </MDBCol>

            <MDBCol size='md' className="d-none d-sm-none d-lg-block d-xl-block" style={{width: 200, height: 300}}>
              <img className='img-fluid shadow-4 rounded-3' data-aos="fade-left" src='./images/pexels-katerina-holmes-5905918.jpg'
              alt='...' />
            </MDBCol>

        </MDBRow>
      </MDBContainer>
    </section>
  );
}
