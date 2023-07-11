import axios from "axios";
import React, { useEffect } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, } from "mdbreact";
import { NavLink, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../Redux/slices/ProductSlice";

const AddProducts = () => {
  const nav = useNavigate();
  
  const dispatch = useDispatch()
  const product = useSelector((state) => state.prdct) 

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      dispatch(productList(response.data));
    });
  }, []);


  return (
    <div className="container"  style={{ width: "100%", margin: "0 auto", marginTop:'30px' }}>
    <div className="card h-100 text-center p-4">
      <MDBRow >
        {product.map((item) => (
          <MDBCol md="3" className="mb-4" key={item.id}>
            <MDBCard>
              <MDBCardImage top src={item.image} overlay="white-slight" hover waves alt="Product Image" height='300px'  />
              <MDBCardBody>
                <h5 className="pink-text card-title mb-0">
                <strong>{item.title && item.title.substring(0, 12)}</strong>
                </h5>
                <h6 className="font-weight-bold blue-text">$ {item.price}</h6>
                <NavLink to={`/viewproduct/${item.id} `}>
                <img src="src/assets/images/plus button.jpg" alt="Button Image"  />
                </NavLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          ))}
          </MDBRow>
          </div>
    </div>
  );
};

export default AddProducts;
