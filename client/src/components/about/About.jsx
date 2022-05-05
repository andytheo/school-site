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
                    <p className="h2 mb-4 blue-underline">Who are we?</p>
                    <p style={{textAlign: "justify"}}>
                      Pecuty Royal International Academy is an educational institution which provides a conducive learning environment
                    to students. With over 5 years of existence, we have continued to deliver excellent education to our students.
                    Our watch-word is excellence and we are committed to training student to excel in their studies and also improve on their skills
                    and talents.
                    </p>
                      </div>
                  </MDBCol>

              </MDBRow>
            </MDBContainer>
          </section>
          <hr style={{margin: '0 70px'}}/>
          
          <section className='text-center background lh-lg'>
            <h3 className='blue-underline text-center'>Background</h3>
            <div style={{textAlign: "justify"}}>
            <p>Pecuty Royal Int'l Academy was Incorporated by Corporate Affairs Commission of the federal republic of Nigeria on the 26th of April, 2017.</p>
              <p>The school was established and started its educational operations in  September, 2017/2018 academic season with 14 pupils on enrollment which had Miss Ezenwa Miracle  Favour as her pioneer pupil.</p>
              <p>Pecuty Royal Int'l Academy was officially opened with an official opening ceremony on the 16th December 2017 under the distinguished chairmanship of Dr. S. U. NENE.</p>
              <p>In September 11, 2018 the Ministry of Education was satisfied by the level of our infrastructural development and qualification of our staff and gave approval for commencement of secondary arm of the school which led to massive academic activities and excellence of the school.</p><p>We have witness one level of development to another.
              Presently pre school, primary and secondary schools are thriving and evolving everyday.</p>
            </div>
          </section>
          <hr style={{margin: '0 70px'}}/>
          <section className="container text-center">
            <p className="h3 text-center mt-5 blue-underline">Features</p>
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
                <p className="h3 mb-4 blue-underline">Our Core Values</p>
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
          <section className='text-center' id='staff'>
            <h3 className='pt-5 blue-underline'>Management</h3>
            <MDBContainer className='staff-column'>
            <MDBRow data-aos="fade-up" className='row-cols-1 row-cols-md-3 row-cols-sm-8 row-cols-lg-4 row-cols-xs-12 g-4 mt-2'>
              <MDBCol>
                <div className='staff'>
                  <img className='staff-image' src="/images/Pecuty-2/dague.jpeg" alt="" />
                  <h6 className='my-2'>Prince Dague Frederick Pecuty</h6>
                  <p className='pb-3'>Proprietor</p>
                </div>
              </MDBCol>
              <MDBCol>
                <div className='staff'>
                  <img className='staff-image' src="/images/Pecuty-2/mercy.jpeg" alt="" />
                  <h6 className='my-2'>Mrs Idinikpete Mercy Pecuty</h6>
                  <p className='pb-3'>Executive Director, Operation, Research and Planning</p>
                </div>
              </MDBCol>
            </MDBRow>
            </MDBContainer>
          </section>
          <section className='text-center'>
            <h3 className='text-center pt-5 blue-underline'>Administrative Staff</h3>
            <MDBContainer className='pt-3'>
              <MDBRow>
                <MDBCol>
                <div className='staff'>
                  <img className='staff-image' src="/images/Pecuty-2/idowu.jpeg" alt="" />
                  <h6 className='my-2'>Miss Idowu Feyisetan Josephine</h6>
                  <p className='pb-3'>School Administrator</p>
                </div>
              </MDBCol>
              <MDBCol>
                <div className='staff'>
                  <img className='staff-image' src="/images/Pecuty-2/nwachukwu2.jpg" alt="" />
                  <h6 className='my-2'>Mrs Nwachukwu Maria Ngozi</h6>
                  <p className='pb-3'>Head of Academics</p>
                </div>
              </MDBCol>
               <MDBCol>
                <div className='staff'>
                  <img className='staff-image' src="/images/Pecuty-2/non-academic-head.jpeg" alt="" />
                  <h6 className='my-2'>Mrs Tyochir Lois Ngunengen</h6>
                  <p className='pb-3'>Non Academic Head</p>
                </div>
              </MDBCol>
              <MDBCol>
                <div className='staff'>
                  <img className='staff-image' src="/images/Pecuty-2/lawrence.jpeg" alt="" />
                  <h6 className='my-2'>Mr Vincent Lawrence Onoja</h6>
                  <p className='pb-3'>School Secretary and I.T Department Officer</p>
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
