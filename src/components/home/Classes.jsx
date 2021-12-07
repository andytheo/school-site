import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Classes() {
  return (
    <div  style={{backgroundColor: "#161E54"}} className="pb-5 mt-5">
    <section className="container py-1">
      <div className="underline text-center text-light h3 mt-5 mb-5">Our classes</div>
      <div data-aos="zoom-out">
    <MDBRow className='row-cols-1 row-cols-md-3 row-cols-sm-8 row-cols-lg-4 row-cols-xs-12 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='./images/segun-osunyomi-3BztcJxliEM-unsplash.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Creche</MDBCardTitle>
            <MDBCardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies fermentum mollis.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='./images/cdc-GDokEYnOfnE-unsplash.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Nursery</MDBCardTitle>
            <MDBCardText>
               Aenean molestie eros odio, et viverra ante efficitur et. Aenean finibus arcu vitae lacinia rutrum.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='./images/omotayo-kofoworola-W9OQnSdsv6A-unsplash.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Primary</MDBCardTitle>
            <MDBCardText>
               Aenean molestie eros odio, et viverra ante efficitur et. Aenean finibus arcu vitae lacinia rutrum.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='./images/ben-white-83tkHLPgg2Q-unsplash.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Secondary</MDBCardTitle>
            <MDBCardText>
               Aenean molestie eros odio, et viverra ante efficitur et. Aenean finibus arcu vitae lacinia rutrum.
             </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    </section>
    </div>

    //
    // function About() {
    //   return(
    //   <div  className="centered">
    //   <div className="title">Our classes</div>
    //   <Container>
    //   <Row>
    //   <Col xs={12} md={6} sm={12} lg={4} xl={4}>
    //   <Card className="w-30 h-50" style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="./images/segun-osunyomi-3BztcJxliEM-unsplash.jpg" />
    //   <Card.Body>
    //     <Card.Title>Creche</Card.Title>
    //     <Card.Text>
    //     Some quick example text to build on the card title and make up the bulk of
    //     the card's content.
    //     </Card.Text>
    //   </Card.Body>
    //   </Card>
    //   </Col>
    //
    //   <Col xs={12} md={6} sm={12} lg={4} xl={4}>
    //   <Card className="w-30 h-50" style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="./images/cdc-GDokEYnOfnE-unsplash.jpg" />
    //   <Card.Body>
    //     <Card.Title>Pre-Nursery</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the bulk of
    //       the card's content.
    //     </Card.Text>
    //   </Card.Body>
    //   </Card>
    //   </Col>
    //
    //   <Col xs={8} md={6} sm={12} lg={4} xl={4}>
    //   <Card className="w-30 h-50" style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="./images/omotayo-kofoworola-W9OQnSdsv6A-unsplash.jpg" />
    //   <Card.Body>
    //   <Card.Title>Nursery</Card.Title>
    //   <Card.Text>
    //     Some quick example text to build on the card title and make up the bulk of
    //     the card's content.
    //   </Card.Text>
    //   </Card.Body>
    //   </Card>
    //
    //   </Col>
    //
    //   <Col xs={8} md={6} sm={12} lg={4} xl={4}>
    //
    //   <Card className="w-30 h-50" style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="./images/pexels-olanma-etigweuwa-3867469.jpg" />
    //   <Card.Body>
    //   <Card.Title>Primary</Card.Title>
    //   <Card.Text>
    //     Some quick example text to build on the card title and make up the bulk of
    //     the card's content.
    //   </Card.Text>
    //   </Card.Body>
    //   </Card>
    //
    //   </Col>
    //
    //   <Col xs={8} md={6} sm={12} lg={4} xl={4}>
    //   <Card className="w-30 h-50" style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="./images/ben-white-83tkHLPgg2Q-unsplash.jpg" />
    //   <Card.Body>
    //   <Card.Title>Secondary</Card.Title>
    //   <Card.Text>
    //     Some quick example text to build on the card title and make up the bulk of
    //     the card's content.
    //   </Card.Text>
    //   </Card.Body>
    //   </Card>
    //
    //   </Col>
    // </Row>
    // </Container>
    //
    //
    //
    //
    //
    //
    //   </div>
    //   )
    // }
    //
    // export default About;

  );
}
