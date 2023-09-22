import React from "react";
import { NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const cartItem = useSelector((store) => store.cart);
  console.log(cartItem);
  const nav = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink as={Link} to="/">
                  <span
                    className="nav-link"
                    style={{
                      color: "green",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    MY MART
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="nav-link" role="button" />
              <MDBDropdownMenu>
              <NavLink as={Link} to='/dealer'> 
                <MDBDropdownItem link >Dealer</MDBDropdownItem>
                </NavLink>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <span style={{ margin: "0 20px" }}></span>{" "}
            {/* Add spacing between icons */}
            <NavLink as={Link} to="/cart">
             
                <i
                  className="fas fa-shopping-cart"
                  style={{ fontSize: "24px", color: "black" }}
                ></i>
                <span
                  className="badge badge-danger"
                  style={{
                    position: "relative",
                    top: "-20px",
                    right: "-0px",
                    fontSize: "8px",
                  }}
                >
                  {cartItem.length}
                </span>
             
            </NavLink>
            <span style={{ margin: "0 20px" }}></span>{" "}
            {/* Add spacing between icons */}
            <NavLink as={Link} to="/userlog">
              
                <i
                  className="fas fa-id-badge"
                  style={{ fontSize: "24px", color: "black" }}
                ></i>
              
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
