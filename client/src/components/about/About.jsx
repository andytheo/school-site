import React from 'react'
import AppNavBar from '../Navbar/Nav';
import Footer from '../home/Footer';

import Nav from '../home/Nav';
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
                  <img className='img-fluid shadow-4 rounded-3' data-aos="fade-up" src='./images/pexels-katerina-holmes-5905918.jpg'
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

          <section className="container text-center mt-5 mb-5">
            <MDBRow data-aos="fade-up" className='row-cols-1 row-cols-md-3 row-cols-sm-8 row-cols-lg-2 row-cols-xs-12 g-4 mt-2'>
              <MDBCol>
                <p className="h4 mb-3">Our History</p>
                <p style={{lineHeight: "2"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec ultricies fermentum mollis. Aenean molestie eros odio,
                  et viverra ante efficitur et. Aenean finibus arcu vitae lacinia rutrum.
                  Etiam accumsan gravida est eget maximus.
                  In sed fringilla tellus. Donec dictum lorem id purus bibendum,
                  ac commodo neque gravida.</p>
              </MDBCol>

              <MDBCol>
                <div style={{backgroundColor: "#FFD523", padding: 30}}>
                <p className="h4 mb-4" style={{textDecoration: "underline"}}>Our Core Values</p>
                <ul className="core-values" style={{fontSize: 18}}>
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
              </MDBCol>
            </MDBRow>
          </section>

          <Footer />
        </div>
    )
}

export default About
