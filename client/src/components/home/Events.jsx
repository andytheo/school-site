import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

const Events = () => {
    return (
        <div>
          <section style={{backgroundColor: "#FBFBFB"}}>
            <div className='text-center my-4'>
              <p className="h3 blue-underline">Events</p>
            </div>
          
            <div>

      <>
        <MDBContainer className="text-dark">
            <MDBRow className="mb-5 d-flex justify-content-center">
              <MDBCol size='md' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='mx-3 mb-5 col-example rounded-3' style={{width: 300, height: "auto", backgroundColor: "#FFD523"}}>
                <MDBBtn rounded className="mt-3 mb-4 w-85" outline color="black" style={{height: "auto", backgroundColor: "#ECD662"}}>1st Term</MDBBtn>
                <div>
                  <p className="h5 mb-2">Career Day</p>
                  <p>We let our students showcase their potential careers and help foster them to achieve their goals.</p>
                </div>
                <div>
                  <p className="h5 mb-2">Inter-House Sports Competition</p>
                  <p>Maintaining physical health is very important to us, hence we organize yearly sports competition.</p>
                </div>
              </MDBCol>

              <MDBCol size='md' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='mx-3 mb-5 col-example rounded-3 text-dark' style={{width: 300, height: "auto", backgroundColor: "#87AAAA"}}>
                <MDBBtn rounded className="mt-3 mb-4 w-85" outline color="black" style={{height: "auto", backgroundColor: "#C8E3D4"}}>2nd Term</MDBBtn>
                <div>
                  <p className="h5">World Book Fair / Spelling Bee Day</p>
                  <p>We seek to develop a deep passion for studying. As such, we're inviting students and parents to this event.</p>
                </div>
                <div>
                  <p className="h5">Cultural Week Fiesta</p>
                  <p>We will have a cultural party where students can showcase their diverse cultures.</p>
                </div>
              </MDBCol>

              <MDBCol size='md' data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='mx-3 mb-5 col-example rounded-3 text-dark' style={{width: 300, height: "auto", backgroundColor: "#FF8585"}}>
                <MDBBtn rounded className="mt-3 mb-4 w-85" outline color="black" style={{height: "auto", backgroundColor: "#FFB396"}}>3rd Term</MDBBtn>
                <div>
                  <p className="h5">Science and Technology Project Day</p>
                  <p>We are actively involved in promoting science and technology in our school.</p>
                </div>
                <div>
                  <p className="h5">Speech And Prize Giving Day</p>
                  <p>To end the academic year, we have a prize giving day to appreciate our students and spur them to be better.</p>
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
