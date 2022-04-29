import React from 'react'
import AppNavBar from '../Navbar/Nav';
import Footer from '../home/Footer';

import { MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import TransparentHeader from '../props/TransparentHeader';


const About = () => {
    return (
        <div>
          <AppNavBar />
          <TransparentHeader
            text="About Us"
          />
          <section className="mb-2" style={{margin: "80px 0",height: 400}}>
            <MDBContainer className="text-dark">
                <MDBRow className="mb-2 d-flex justify-content-center">

                <MDBCol size='md' className="d-none d-sm-none d-lg-block d-xl-block" style={{width: 200, height: 300}}>
                  <img className='img-fluid shadow-4 rounded-3' data-aos="fade-up" src='./images/Pecuty-2/IMG-20211024-WA0044.jpg'
                  alt='Teacher' />
                </MDBCol>

                  <MDBCol size='md' className='mx-5 mb-2 col-example lh-lg' style={{width: 400}}>
                    <div data-aos="fade-up">
                    <p className="h3 mb-4">Who are we?</p>
                    <p></p>Pecuty Royal International Academy is an educational institution which provides a conducive learning environment
                    to students. With over 5 years of existence, we have continued to deliver excellent education to our students.
                    Our watch-word is excellence and we are committed to training student to excel in their studies and also improve on their skills
                    and talents.
                      </div>
                  </MDBCol>

              </MDBRow>
            </MDBContainer>
          </section>
          <hr style={{margin: '0 70px'}}/>
          
          <section className='text-center background'>
            <h2>Background</h2>
            <p style={{lineHeight: "2"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec ultricies fermentum mollis. Aenean molestie eros odio,
                  et viverra ante efficitur et. Aenean finibus arcu vitae lacinia rutrum.
                  Etiam accumsan gravida est eget maximus.
                  In sed fringilla tellus. Donec dictum lorem id purus bibendum,
                  ac commodo neque gravida.</p>
            <p>Pellentesque nec metus eget ligula varius porta ac eu felis. Vestibulum sed pulvinar justo, non vulputate dolor. 
              Nunc eu libero placerat, iaculis tellus at, aliquet leo. Cras varius lacinia 
              ligula, eget auctor tortor luctus quis. Pellentesque habitant morbi tristique senectus et netus et 
              malesuada fames ac turpis egestas. Nam sagittis auctor mi, a vulputate lacus tempus eget. 
              Nulla quam ipsum, finibus ut magna non, blandit tempus nisl. </p>
          </section>
          <hr style={{margin: '0 70px'}}/>
          <section className="container text-center">
            <p className="h3 text-center mt-5">Features</p>
            <MDBRow data-aos="fade-up" className='row-cols-1 row-cols-md-3 row-cols-sm-8 row-cols-lg-4 row-cols-xs-12 g-4 mt-2'>
              <MDBCol>
                <HomeWorkIcon style={{fontSize: 80, color: "#161E54"}}/>
                <p className="h6 mt-3">Equpped Classrooms</p>
                <p>Your children deserve a conducive classroom and we offer nothing less.</p>
              </MDBCol>
              <MDBCol>
                <SchoolIcon  style={{fontSize: 80, color: "#161E54"}}/>
                <p className="h6 mt-3">Quality Education</p>
                <p>Excellent standard of education is just what we provide.</p>
              </MDBCol>
              <MDBCol>
                <ClassIcon  style={{fontSize: 80, color: "#161E54"}}/>
                <p className="h6 mt-3">Structured Curriculum</p>
                <p>Our curriculum is approved by the Federal Ministry of Education.</p>
              </MDBCol>
              <MDBCol>
                <ImportContactsIcon  style={{fontSize: 80, color: "#161E54"}}/>
                <p className="h6 mt-3">Excellent Performance</p>
                <p>We have students who display exceptional performance in school activities.</p>
              </MDBCol>
            </MDBRow>
          </section>

          <hr style={{margin: '0 70px'}}/>

          <section className="container mt-5 mb-5 text-center">
                <p className="h4 mb-4" style={{textDecoration: "underline"}}>Our Core Values</p>
                <div className="core-values">
                <ul className='main-values' style={{fontSize: 18}}>
                  <li>Integrity</li>
                  <li>Honesty</li>
                  <li>Nurturing</li>
                  <li>Excellence</li>
                  <li>Responsibility</li>
                  <li>Respect</li>
                  <li>Innovation</li>
                  <li>Result Oriented</li>
                  <li>Leadership</li>
                  <li>Passion</li>
                  <li>Teamwork</li>
                </ul>
                </div>
          </section>

          <hr style={{margin: '0 70px'}}/>
          {/* STAFF */}
          <section id='staff'>
            <h2 className='text-center pt-5'>Our Staff</h2>
            <MDBContainer className='staff-column'>
            <MDBRow data-aos="fade-up" className='row-cols-1 row-cols-md-3 row-cols-sm-8 row-cols-lg-4 row-cols-xs-12 g-4 mt-2'>
              <MDBCol>
                <div className='staff'>
                  <img className='staff-image' src="https://picsum.photos/253/300" alt="" />
                  <h4 className='my-2'>Mr James Ojo</h4>
                  <p className='pb-3'>Principal</p>
                </div>
              </MDBCol>
              <MDBCol>
                <div className='staff'>
                  <img className='staff-image' src="https://picsum.photos/251/300" alt="" />
                  <h4 className='my-2'>Mrs Chima</h4>
                  <p className='pb-3'>Vice Principal</p>
                </div>
              </MDBCol>
              <MDBCol>
                <div className='staff'>
                  <img className='staff-image' src="https://picsum.photos/252/300" alt="" />
                  <h4 className='my-2'>Mr Suleiman</h4>
                  <p className='pb-3'>Senior Teacher</p>
                </div>
              </MDBCol>
              <MDBCol>
                <div className='staff'>
                  <img className='staff-image' src="https://picsum.photos/253/300" alt="" />
                  <h4 className='my-2'>Mrs Oche</h4>
                  <p className='pb-3'>Science Teacher</p>
                </div>
              </MDBCol>
            </MDBRow>
            </MDBContainer>
          </section>
          <Footer />
        </div>
    )
}

export default About
