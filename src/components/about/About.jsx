import React from 'react'
import Nav from '../home/Nav';
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
          <Nav />
          <TransparentHeader
            text="About Us"
          />
          <section className="mb-2" style={{margin: "80px 0",height: 400}}>
            <MDBContainer className="text-dark">
                <MDBRow className="mb-2 d-flex justify-content-center">


                <MDBCol size='md' className="d-none d-sm-none d-lg-block d-xl-block" style={{width: 200, height: 300}}>
                  <img className='img-fluid shadow-4 rounded-3' data-aos="fade-left" src='./images/pexels-katerina-holmes-5905918.jpg'
                  alt='...' />
                </MDBCol>

                  <MDBCol size='md' className='mx-5 mb-2 col-example lh-lg' style={{width: 400}}>
                    <div data-aos="fade-right">
                    <p className="h3 mb-4">Who are we?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec ultricies fermentum mollis. Aenean molestie eros odio, et viverra ante efficitur et.
                      Aenean finibus arcu vitae lacinia rutrum. Etiam accumsan gravida est eget maximus. In sed fringilla tellus.
                      Donec dictum lorem id purus bibendum, ac commodo neque gravida.</p>
                      </div>
                  </MDBCol>

              </MDBRow>
            </MDBContainer>
          </section>

          <section className="container text-center">
            <p className="h3 text-center">Features</p>
            <MDBRow className='row-cols-1 row-cols-md-3 row-cols-sm-8 row-cols-lg-4 row-cols-xs-12 g-4 mt-2'>
              <MDBCol>
                <HomeWorkIcon style={{fontSize: 80}}/>
                <p className="h6 mt-3">Equpped Classrooms</p>
                <p>Etiam accumsan gravida est eget maximus.
                  In sed fringilla tellus.</p>
              </MDBCol>
              <MDBCol>
                <SchoolIcon  style={{fontSize: 80}}/>
                <p className="h6 mt-3">Quality Education</p>
                <p>Etiam accumsan gravida est eget maximus.
                  In sed fringilla tellus.</p>
              </MDBCol>
              <MDBCol>
                <ClassIcon  style={{fontSize: 80}}/>
                <p className="h6 mt-3">Structured Curriculum</p>
                <p>Etiam accumsan gravida est eget maximus.
                  In sed fringilla tellus.</p>
              </MDBCol>
              <MDBCol>
                <ImportContactsIcon  style={{fontSize: 80}}/>
                <p className="h6 mt-3">Excellent Performance</p>
                <p>Etiam accumsan gravida est eget maximus.
                  In sed fringilla tellus.</p>
              </MDBCol>
            </MDBRow>
          </section>

          <section className="container text-center mt-5 mb-5">
            <MDBRow className='row-cols-1 row-cols-md-3 row-cols-sm-8 row-cols-lg-2 row-cols-xs-12 g-4 mt-2'>
              <MDBCol>
                <p className="h4 mb-3">Our History</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec ultricies fermentum mollis. Aenean molestie eros odio,
                  et viverra ante efficitur et. Aenean finibus arcu vitae lacinia rutrum.
                  Etiam accumsan gravida est eget maximus.
                  In sed fringilla tellus. Donec dictum lorem id purus bibendum,
                  ac commodo neque gravida.</p>
              </MDBCol>

              <MDBCol>
                <div style={{backgroundColor: "lightgrey"}}>
                <p className="h4">Our Core Values</p>
                <ul className="core-values">
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
