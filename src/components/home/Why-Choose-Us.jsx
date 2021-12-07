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
              <blockquote class="blockquote">
                <p className="mb-3 w-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                  Amet sit consectetur adipiscing elit. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.
                </p>
                <footer className="blockquote-footer w-75">John Doe</footer>
              </blockquote>
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement />
              <blockquote class="blockquote">
                <p className="mb-3 w-75">Lorem ipsum dolor sit amet ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table. Consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer w-75">Jane Doe</footer>
              </blockquote>
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement />
              <blockquote class="blockquote">
                <p className="mb-3 w-75">Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer w-75">John Smith</footer>
              </blockquote>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBCol>


      <MDBCol md='5' className='col-example p-5 mb-5'>
        <p className="text-center h5 mb-3 text-light underline">Why Choose Us?</p>

        <MDBAccordion flush initialActive='flush-collapse1'>
          <MDBAccordionItem collapseId='flush-collapse1' headerTitle='Great Teachers'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId='flush-collapse2' headerTitle='Safe Environment'>3 wolf
            moon officia aute, non cupidatat skateboard dolor brunch.  raw denim
            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId='flush-collapse3' headerTitle='Standard Curriculum'>Nihil anim keffiyeh helvetica,
            craft beer labore wes anderson cred nesciunt sapiente ea
            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.
          </MDBAccordionItem>
        </MDBAccordion>

      </MDBCol>
    </MDBRow>
  );
}
