
import React, { useRef } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
 
} from 'mdb-react-ui-kit';
import { ButtoN } from '../../../Components/Button';
import { useNavigate } from 'react-router-dom';


const AdminLog = () => {
    const nav= useNavigate()
    const myreff =useRef(null)
    const hadnleLogin = () => {
        const name = myreff.current.username.value;
        const password = myreff.current.password.value;
        const filteradmin = AdminLog.filter((e) => e.userName === name && e.password === password);
    
        if (filteradmin.length > 0) {
          dispatch(login()); // Dispatch the login action
          nav('/admin');
        } else {
          alert('User does not exist');
        }
      };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#E8E8E8', borderRadius: '20px' }}>
      <div className="text-center p-5" style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
        <h2 style={{fontWeight: 'bold', marginBottom: '50px'}}>Login Admin Page</h2>
        <form>
          <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' />
          <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />

          <MDBRow className='mb-4'>
            <MDBCol className='d-flex justify-content-center'>
              <MDBCheckbox id='form2Example3' label='Remember' defaultChecked />
            </MDBCol>
            <MDBCol>
              <a href='#!'>Forgot password?</a>
            </MDBCol>
          </MDBRow>

          <ButtoN onclick={hadnleLogin} text='Login Now' style={{display:'block', width:'100%', backgroundColor: '#2F4F4F', color:'white'}}/>
        </form>
      </div>
    </div>
  )
}

export default AdminLog