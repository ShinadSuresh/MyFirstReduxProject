import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../Redux/slices/cartSlice';
import { viewedProduct } from '../../Redux/slices/viewproductSlice';

export default function ViewProduct() {
  const { id } = useParams();
  const dispatch = useDispatch()

  const product = useSelector((state) => state.view)
 

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        dispatch(viewedProduct(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  } 
  const handleAddtoCart = () => {
      dispatch(addItem(product))
  }

  return (
    <MDBContainer>
    <MDBRow className=''>
      <MDBCol md="4" className='col-md-10' style={{marginTop:'20px'}} >
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
              <MDBCardText>Rating:{product.rating && product.rating.rate}
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
