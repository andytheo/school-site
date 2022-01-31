import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

const Events = () => {
    return (
        <div>
          <section style={{backgroundColor: "#FBFBFB"}}>
          <p className="text-center py-5 h3 underline">Events</p>
            <div>

      <>
        <MDBContainer className="text-dark">
            <MDBRow className="mb-5 d-flex justify-content-center">
              <MDBCol size='md' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='mx-3 mb-5 col-example rounded-3' style={{width: 300, height: 300, backgroundColor: "#FFD523"}}>
                <MDBBtn rounded className="mt-3 mb-4 w-85" outline color="black" style={{height: 70, backgroundColor: "#ECD662"}}>04 June</MDBBtn>
                <div>
                  <p className="h5 mb-2">Graduation Ceremony</p>
                  <p>Our graduation ceremmony for this year comes up on the 4th of June.</p>
                </div>
              </MDBCol>

              <MDBCol size='md' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='mx-3 mb-5 col-example rounded-3 text-dark' style={{width: 300, height: 300, backgroundColor: "#87AAAA"}}>
                <MDBBtn rounded className="mt-3 mb-4 w-85" outline color="black" style={{height: 70, backgroundColor: "#C8E3D4"}}>22 October</MDBBtn>
                <div>
                  <p className="h5">Book Fair</p>
                  <p>We seek to develop a deep passion for studying. As such, we're inviting students and parents to this event.</p>
                </div>
              </MDBCol>

              <MDBCol size='md' data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='mx-3 mb-5 col-example rounded-3 text-dark' style={{width: 300, height: 300, backgroundColor: "#FF8585"}}>
                <MDBBtn rounded className="mt-3 mb-4 w-85" outline color="black" style={{height: 70, backgroundColor: "#FFB396"}}>12 December</MDBBtn>
                <div>
                  <p className="h5">Cultural Party</p>
                  <p>As part of our end of year celebrations, we will have a cultural party where students can showcase their diverse cultures.</p>
                </div>
              </MDBCol>

            </MDBRow>
          </MDBContainer>
      </>
            </div>
          </section>
        </div>
    )
}

export default Events;
