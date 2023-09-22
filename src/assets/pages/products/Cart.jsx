import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { removeItem } from "../../Redux/slices/cartSlice";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch()

  const handleRemove = (itemid) => {
      dispatch(removeItem(itemid));
  }
  return (
    <>
      <MDBContainer fluid className="my-5 text-center">
        <MDBRow>
          {cartItems.map((item) => (
            <MDBCol md="10" lg="3" className="mb-4 d-flex" key={item.id}>
              <MDBCard style={{ width: "50rem" }}>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage
                    src={item.image}
                    fluid
                    className="w-100"
                    style={{ height: "350px" }}
                  />
                  <span href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">New</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </span>
                </MDBRipple>
                <MDBCardBody>
                  <h5 className="card-title mb-3">{item.title}</h5>

                  <p style={{ fontWeight: "bold", fontSize: "30px" }}>
                    $ {item.price}
                  </p>

                  <button onClick={()=> handleRemove(item.id)}>Remove Item</button>
                  </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Cart;
