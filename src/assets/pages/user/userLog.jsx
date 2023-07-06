import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
 
} from 'mdb-react-ui-kit';
import { ButtoN } from '../../../Components/Button';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

export default function UserLog() {
    

    
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#E8E8E8', borderRadius: '10px' }}>
      <div className="text-center p-5" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
        <h2 style={{fontWeight: 'bold', marginBottom: '50px'}}>Login to your account</h2>
        <form>
          <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' />
          <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />

          <MDBRow className='mb-4'>
            <MDBCol className='d-flex justify-content-center'>
              <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
            </MDBCol>
            <MDBCol>
              <a href='#!'>Forgot password?</a>
            </MDBCol>
          </MDBRow>

          <ButtoN text='Login Now' style={{display:'block', width:'100%', backgroundColor: '#04C35C', color:'white'}} />

         {/* <MDBBtn type='submit' className='mb-4' block>
            Sign in
          </MDBBtn> */} 

          <div className='text-center'>
          <NavLink as={Link} to='/usersign'>
            <p>
              Do you have an account <a href='' >Join free today</a>
            </p>
            </NavLink>

          </div>
        </form>
      </div>
    </div>
  );
}
