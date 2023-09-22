import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../Redux/slices/cartSlice';


export default function ViewProduct() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const nav = useNavigate()

  const isLoggedIn = useSelector((state) => state.loginUser)
  const products = useSelector((state) => state.prdct)

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Loading...</div>;
  } 

  const handleAddtoCart = () => {
      dispatch(addItem(product)); 
      if (isLoggedIn) {
        nav('/cart')
      } else {
        nav('/userlog')
      }
    }


  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4" className='col-md-10' style={{marginTop:'20px'}}>
          <MDBCard>
            <MDBCardBody className="d-flex">
              <div>
                <img src={product.image} className="card-img-top" alt="Product Image" />
              </div>
              <div className="flex-grow-1">
                <MDBCardTitle>{product.title}</MDBCardTitle>
                <MDBCardText>${product.price}</MDBCardText>
                <MDBCardText>{product.description}</MDBCardText>
                <MDBCardText>{product.category}</MDBCardText>
                <MDBCardText>
                  Rating: {product.rating && product.rating.rate}
                  <i className='fa-fa-star'></i>
                </MDBCardText>
                <MDBBtn color="primary" onClick={handleAddtoCart}>Add to Cart</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
