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
              <Card.Title style={{ fontSize: '44px', textAlign: 'center', fontWeight:'bold', marginBottom: '30px' }}>Supermarket</Card.Title>
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
                    src="https://s3-alpha-sig.figma.com/img/784c/9f73/d89976eae8769095f2b6d5aa935d61ff?Expires=1688342400&Signature=DP~FYYSq2qsLmyLCtRruxAt6d1xY6QhPMsaYxSSXJZ-B6nU~xEJGBlJAk9PfUZX7Ri~Z5VZzFXOMKKJcqQbUGwp0M7qmDqbHP6i~JM0OLBUazmYzP268A8sfP0GGoB0o3HAK4aAYirTJnnsT9N0npHQuZya3OEUFENLYtKDxsipU5viqBPVVuzl0uT659JP2vA2vTjJQcvGFUelGq4CMOx9bwJ0wKnI32LRydo0kV~7ehXf~Yqjvg5aZmmy4XkoEbG6rXEQs0zf32j14s0~1QOVVJ3N2bPtTe1IiLHwka1QHuC1mW9BiEQ2wgpeynjbrlEIzSnGosua-jM50acgkmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    fluid
                    alt="..."
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                </div>
                <a>
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody className="text-center">
                <MDBCardTitle className="mx-auto">Personal Care</MDBCardTitle>
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
                    src="https://s3-alpha-sig.figma.com/img/e367/5469/9eb7ec6fb7c7dcd4fa1b21a24b46a657?Expires=1688342400&Signature=RN9BDpnJLjddKkrdglTS7ACflXh7J47izgc82qmBPfmJHCYtLJWxidE-qZUHOsyO5xRvxjUaORWq7RUWWkZcoaw0x55ceQr0~BMDFC1Ai-bRPvQDNjumtUUYSwDrdGJg1CLNw1HO7~HV6UxhtX8PklOhyAhlp99oR8y9c8QqHuq3kacjf4X4E9LFfWZC7WwtvwGl5ZxbhjYR9ZRdGYFedr6EB9TvE7fm4pXRTBxIzNlYgS~Ok~xdlS-XI9cXJv6Gva1~YgtH6BczxrmqmPEuQkEVr~NszrDL1V1AdgF7bAB4kWbjE5WB~TkM~JzHuk4AU0CXoTupZuxGXPSSJKAoVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    fluid
                    alt="..."
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                </div>
                <a>
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody className='text-center'>
                <MDBCardTitle className='mx-auto'>fruits, Vegetables</MDBCardTitle>
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
                    src="https://s3-alpha-sig.figma.com/img/dd80/8097/fdd2ca99d59a90993ea9818e53066ab6?Expires=1688342400&Signature=nwcy7KTaZnHVZrk86sbINZxqcrQhF0nHLNdjMgDvfUmZxOa1VVBnlArpjBLzmVeYaGY9Sys3vJCKC4uDQEDSE-YM1uINkYUrKok7IpQpORDIO0tkRUiu7RBNYY850WcY0vHJQ9xsppcz2jp3yL5gMatckgcHbYD7OgWtzoCA91KWl1fx05Qeu2acR2at1MXvI1xym8QU7NnCugL7wAdW-n3UpcT7UpI88Or-KCGpN5bFOUrtSxFKOmQupp57iICF6V9VQeXKgaA6m9ONb6QdvV2jiprloYGZ0fdq2ATrv7koJwQNG4BsWCDT-u1IJkFmC~NjjJi5t5Fp99IFdTw0Dg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    fluid
                    alt="..."
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                </div>
                <a>
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody className='text-center'>
                <MDBCardTitle className='mx-auto'>Dry/Baking Goods</MDBCardTitle>
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
