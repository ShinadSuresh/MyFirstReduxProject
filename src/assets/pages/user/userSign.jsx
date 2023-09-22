import React, { useRef } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { ButtoN } from '../../../Components/Button';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Redux/slices/SigninSlice';
import { useNavigate } from 'react-router-dom';

export default function UserSign() {

  const dispatch = useDispatch()
  const newref = useRef()
  const nav = useNavigate()
  const handleSign = (e) => {
    e.preventDefault();

    const userName =  newref.current.userName.value;
    const email = newref.current.Email.value;
    const password = newref.current.Password.value;
    const  confirmPassword = newref.current.confirmPassword.value;
    const id = Math.floor(Math.random() *100)
    dispatch(addUser( {userName, email, password, confirmPassword, id}))
    nav('/userlog')
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#E8E8E8', borderRadius: '10px' }}>
      <form className="text-center p-5" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }} onSubmit={handleSign} ref={newref} >
      <h2 style={{fontWeight: 'bold', marginBottom: '50px'}}>Register your account</h2>
        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput id='form3Example1' label='First name' name='userName' />
          </MDBCol>
         
        </MDBRow>
        <MDBInput className='mb-4' type='email'  label='Email address' name='Email' />
        <MDBInput className='mb-4' type='password'  label='Password' name='Password' />
        <MDBInput className='mb-4' type='password'  label='Confirm Password' name='confirmPassword' />

        
        <ButtoN text='Register' style={{display:'block', width:'100%', backgroundColor: '#04C35C', color:'white'}} />

      </form>
    </div>
  );
}
