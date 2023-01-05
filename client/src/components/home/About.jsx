import React from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function About() {
  return (
    <>
      <section className="container mb-5" style={{ margin: "80px 0" }}>
        <MDBContainer className="text-dark">
          <MDBRow className="mb-2 d-flex justify-content-center">
            <MDBCol
              size="md"
              data-aos="fade-up"
              data-aos-duration="1000"
              className="mx-5 mb-2 col-example lh-lg"
              style={{ width: 500, textAlign: "justify" }}
            >
              <h2 className="blue-underline">About Us</h2>
              <p>
                Pecuty Royal International Academy is a learning institution
                established in 2017, located in Abuja. Our mission is to provide
                academic, moral and social education to our students. Our
                students are instilled with good morals, they are well-behaved,
                polite, courteous and focused.
              </p>
              <p>
                We have a dedicated team of staff who promote the school's
                vision to bring up the best in our pupils/students. We identify
                talents of our Students and help to develop them.
              </p>
            </MDBCol>

            <MDBCol
              size="md"
              className="d-none d-sm-none d-lg-block d-xl-block"
              style={{ width: 200, margin: "50px 0" }}
            >
              <img
                className="img-fluid shadow-3 rounded-3"
                data-aos="fade-left"
                src="./images/Pecuty-2/IMG-20211024-WA0044.jpg"
                alt="Teacher in class"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <hr style={{ margin: "0 70px" }} />

      <section className="container mt-5 mb-5 text-center">
        <p className="h3 mb-4 blue-underline">Our Core Values</p>
        <div className="core-values">
          <ul className="main-values" style={{ fontSize: 18 }}>
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
    </>
  );
}
