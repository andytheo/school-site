import React from 'react';
import { MDBRow, MDBCol, MDBAccordion, MDBAccordionItem, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement } from 'mdb-react-ui-kit';

export default function WhyChooseUs() {
  return (
    <MDBRow className="mt-5 testimonials">

        {/* <div className="text-center text-dark h3 mt-2 mb-5">Testimonials</div> */}
      <MDBCol md='7' className='pt-5 mb-5 text-light'>
        <p className="h4 mb-3 mx-4 white-underline">Testimonials</p>
        <MDBCarousel className="ml-5 pl-5">
          <MDBCarouselInner>
            <MDBCarouselItem className='active'>
              <MDBCarouselElement />
              <blockquote className="blockquote">
                <p className="mb-3 w-75 reviews"  style={{marginLeft: 35}}>
                  Finding a good school was difficult for me when I moved to Abuja,
                  through a friend, I was able to enroll my child in the school and it's
                  a great choice for me.
                </p>
                <footer className="blockquote-footer w-75 px-5">Bisola Ajayi</footer>
              </blockquote>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement />
              <blockquote class="blockquote">
                <p className="mb-3 w-75  reviews" style={{marginLeft: 35}}>
                  My daughter has shown remarkable progress since joining the school.
                  I've seen changes in both her academics and social life. Good job!
                </p>
                <footer className="blockquote-footer w-75 px-5">Obieze Amadi</footer>
              </blockquote>
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement />
              <blockquote class="blockquote">
                <p className="mb-3 w-75  reviews" style={{marginLeft: 35}}>A school which instills good behaviour, good
                  morals and good etiquette and poise in her students. Pecuty Royal Academy is a true model
                  to students.</p>
                <footer className="blockquote-footer w-75 px-5">Stella Okafor</footer>
              </blockquote>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBCol>


      <MDBCol md='5' className='col-example p-5 mb-5'>
        <p className="h5 mb-3 text-light mx-2 white-underline">Why Choose Us?</p>

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
