import React from 'react';
import { Card, Container, Row, Col, NavLink } from 'react-bootstrap';
import { ButtoN } from '../../Components/Button';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Home.css'
import { GrLocation } from 'react-icons/gr';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const HomePage = () => {
  
  return (
      <Container fluid className="p-0" >
        <Row className="justify-content-center mt-5">
          <Col md={12}  style={{marginBottom: '20px'}}>
            <Card className="w-100 card-no-opacity" style={{ backgroundColor: '#E6E6FA', border: '2px solid #00BFFF' }}>
              <Card.Body>
                <Card.Title style={{ fontSize: '44px', textAlign: 'center', fontWeight:'bold' }}>Order from your nearest </Card.Title>
                <Card.Title style={{ fontSize: '44px', textAlign: 'center', fontWeight:'bold', marginBottom: '30px' }}>Store</Card.Title>
                <div>
                  <Card.Text style={{ fontSize: '16px', textAlign: 'center', marginBottom: '5px', color:'#737B7D'}}>
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                    nam no suscipit quaerendum.
                  </Card.Text>
                  <Card.Text style={{ fontSize: '16px', textAlign: 'center', marginBottom: '50px', color:'#737B7D'  }}>
                    At nam minimum ponderum. Est audiam
                    animal molestiae te.
                  </Card.Text>
                </div>
                <NavLink as={Link} to='/products'>
                <div className="text-center">
                  <ButtoN text='ORDER NOW' style={{ backgroundColor: '#6FCF97', color: 'white'}} />
                </div> 
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <InputGroup className="small-input">
            <FormControl placeholder="Location" />
            <InputGroup.Text>
              <GrLocation  />
            </InputGroup.Text>
          </InputGroup>
        </div>

        {/* products List Home*/}

        <div className="d-flex justify-content-center" style={{marginTop:'20px'}}>
          <div className="row">
            <div className="col-md-4 mb-4">
              <MDBCard>
                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                  <div className="d-flex justify-content-center">
                    <MDBCardImage
                      src="https://www.greatestlook.com/images/dress-code-casual.jpg"
                      fluid
                      alt="..."
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                  <span>
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </span>
                </MDBRipple>
                <MDBCardBody className="text-center">
                  <MDBCardTitle className="mx-auto">Dresses</MDBCardTitle>
                  <MDBCardText className="mx-auto">
                    At eripuit signiferumque sea, vel ad mucius molestie, 
                    cu labitur iuvaret vulputate sed
                  </MDBCardText>
                  <MDBBtn href="#" style={{ backgroundColor: 'white', color: 'blue' }}>Show</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="col-md-4 mb-4">
              <MDBCard>
                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                  <div className="d-flex justify-content-center" >
                    <MDBCardImage
                      src="https://cdn.shopify.com/s/files/1/0298/0353/products/Brown_Leather_Women_Handbag_Work_Bag_Shoulder_Bag_For_Women_2_2048x2048.jpg?v=1534562954"
                      fluid
                      alt="..."
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                  <span>
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </span>
                </MDBRipple>
                <MDBCardBody className='text-center'>
                  <MDBCardTitle className='mx-auto'>Bags</MDBCardTitle>
                  <MDBCardText className='mx-auto'>
                    At eripuit signiferumque sea, vel ad mucius molestie, 
                    cu labitur iuvaret vulputate sed
                  </MDBCardText>
                  <MDBBtn href="#" style={{ backgroundColor: 'white', color: 'blue' }}>Show</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="col-md-4 mb-4">
              <MDBCard>
                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                  <div className="d-flex justify-content-center"> 
                    <MDBCardImage
                      src="https://i.pinimg.com/736x/5c/00/e5/5c00e519ad324b8ae46e6c91bd3bdecc--government-branding-electronics-logo.jpg"
                      fluid
                      alt="..."
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  </div>
                  <span>
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </span>
                </MDBRipple>
                <MDBCardBody className='text-center'>
                  <MDBCardTitle className='mx-auto'>Electricals</MDBCardTitle>
                  <MDBCardText className='mx-auto'>
                    At eripuit signiferumque sea, vel ad mucius molestie, 
                    cu labitur iuvaret vulputate sed
                  </MDBCardText>
                  <MDBBtn href="#" style={{ backgroundColor: 'white', color: 'blue' }}>Show</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </div>
      </Container>
  );
};

export default HomePage;
