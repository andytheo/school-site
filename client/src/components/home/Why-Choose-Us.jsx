import React from 'react';
import { MDBRow, MDBCol, MDBAccordion, MDBAccordionItem, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement } from 'mdb-react-ui-kit';

export default function WhyChooseUs() {
  return (
    <MDBRow className="mt-5 testimonials">

        {/* <div className="text-center text-dark h3 mt-2 mb-5">Testimonials</div> */}
      <MDBCol md='7' className='pt-5 mb-5 text-light'>
        <p className="h4 mb-3 px-5 underline">Testimonials</p>
        <MDBCarousel className="px-5">
          <MDBCarouselInner>
            <MDBCarouselItem className='active'>
              <MDBCarouselElement />
              <blockquote className="blockquote">
                <p className="mb-3 w-75 reviews">
                  Finding a good school was so difficult for me when I moved to Abuja,
                  through a friend, I was able to enroll my child in the school and it's
                  a great choice for me.
                </p>
                <footer className="blockquote-footer w-75">Bisola Ajayi</footer>
              </blockquote>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement />
              <blockquote class="blockquote">
                <p className="mb-3 w-75  reviews">
                  My daughter has shown remarkable progress since shooling here. Kudos!
                </p>
                <footer className="blockquote-footer w-75">Obieze Amadi</footer>
              </blockquote>
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement />
              <blockquote class="blockquote">
                <p className="mb-3 w-75  reviews">A school which instills good behaviour, good morals and good etiquette in her students.</p>
                <footer className="blockquote-footer w-75">Stella Okafor</footer>
              </blockquote>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBCol>


      <MDBCol md='5' className='col-example p-5 mb-5'>
        <p className="text-center h5 mb-3 text-light underline">Why Choose Us?</p>

        <MDBAccordion flush initialActive='flush-collapse1'>
          <MDBAccordionItem collapseId='flush-collapse1' headerTitle='Great Teachers'>
            At Pecuty Royal, we have qualified teachers to provide quality education to students.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId='flush-collapse2' headerTitle='Safe Environment'>
            A truly safe environment for your children, we keep security as a top priority.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId='flush-collapse3' headerTitle='Standard Curriculum'>
            Our Curriculum is standard and it is approved by the Ministry of Education.
          </MDBAccordionItem>
        </MDBAccordion>

      </MDBCol>
    </MDBRow>
  );
}
