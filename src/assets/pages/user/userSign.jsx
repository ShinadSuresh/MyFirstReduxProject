import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { ButtoN } from '../../../Components/Button';

export default function UserSign() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#E8E8E8', borderRadius: '10px' }}>
      <form className="text-center p-5" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
      <h2 style={{fontWeight: 'bold', marginBottom: '50px'}}>Register your account</h2>
        <MDBRow className='mb-4 '>
          <MDBCol>
            <MDBInput id='form3Example1' label='First name' />
          </MDBCol>
          <MDBCol>
            <MDBInput id='form3Example2' label='Last name' />
          </MDBCol>
        </MDBRow>
        <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' />
        <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' />

        
        <ButtoN text='Register' style={{display:'block', width:'100%', backgroundColor: '#04C35C', color:'white'}} />

       {/* <MDBBtn type='submit' className='mb-4' block>
          Sign in
        </MDBBtn>  */}

      </form>
    </div>
  );
}
