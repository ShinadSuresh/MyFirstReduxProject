// 


import React, { useRef } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
 
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { adminlogin } from '../../Redux/slices/AdminlogSlice';



export default function UserLog() {
  const nav= useNavigate()
    const dispatch = useDispatch()
    
    
    const myreff =useRef();

    const hadnleLogin = (e) => {
      e.preventDefault();
        const email = myreff.current.Email.value;
        const password = myreff.current.Password.value;
        
        
        axios
        .post("http://localhost:4000/admin/login", {
          userName: email,
          password: password,
        })
        .then((response) => {
          dispatch(adminlogin(response.data));
          console.log((response.data));
        })
        .catch((error) => {
          console.error(error);
        });

        nav('/dealer')
      };
    

    
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#E8E8E8', borderRadius: '10px' }}>
      <div className="text-center p-5" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
        <h2 style={{fontWeight: 'bold', marginBottom: '50px'}}>Login to your account</h2>
        <form ref={myreff} onSubmit={(e) => e.preventDefault} >
          <MDBInput className='mb-4' type='email' label='Email address' name='Email'/>
          <MDBInput className='mb-4' type='password' label='Password' name='Password'/>

          <MDBRow className='mb-4'>
            <MDBCol className='d-flex justify-content-center'>
              <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
            </MDBCol>
            <MDBCol>
              <a href='#!'>Forgot password?</a>
            </MDBCol>
          </MDBRow>

          {/* <ButtoN text='Login Now' style={{display:'block', width:'100%', backgroundColor: '#04C35C', color:'white'}} /> */}

         <MDBBtn  type='submit' className='mb-4' block onClick={hadnleLogin}  >
            Sign in
          </MDBBtn> 

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
