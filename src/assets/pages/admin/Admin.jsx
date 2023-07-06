import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Admin = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ width: '200px', height: '750px' }}>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" style={{ padding: '40px' }}>
          <ul className="navbar-nav mb-auto flex-column">
          <h1>Admin Page</h1>
              <li className="nav-item">
              <NavLink as={Link} to='/adminadd'> 
                <a className="nav-link" href="#" style={{ textAlign: 'start' }}>
                  Dashboard
                </a>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink as={Link} to='/adminproducts'>
                <a className="nav-link" href="#" style={{ textAlign: 'start' }}>
                  All Products
                </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ textAlign: 'start' }}>
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
};
