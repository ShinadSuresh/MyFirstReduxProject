
import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../Redux/slices/ProductSlice";
import { NavLink, Link } from "react-router-dom";



const DealerProducts = () => {

  const productitem = useSelector((state) => state.prdct)
  
  const dispatch = useDispatch();
  const removeItem = (item) => {
      const removeId = parseInt(item.target.id);
      dispatch(removeProduct({ id: removeId }));
  };


  return (
    <div className="container"  style={{ width: "100%", margin: "0 auto", marginTop:'30px' }}>
    <div className="card h-100 text-center p-4">
      <MDBRow >
        {productitem.map((item) => (
          <MDBCol md="3" className="mb-4" key={item.id}>
            <MDBCard>
              <MDBCardImage top src={item.image} overlay="white-slight" hover waves alt="Product Image" height='300px'  />
              <MDBCardBody>
                <h5 className="pink-text card-title mb-0">
                <strong>{item.title && item.title.substring(0, 12)}</strong>
                </h5>
                <h6 className="font-weight-bold blue-text">$ {item.price}</h6>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <NavLink as={Link} to={`/edit/${item.id}`}>  
                <button style={{ backgroundColor: "#2E8B57", color: "white", borderRadius: "5px", padding: "10px 20px", border: "none"  }}   >Edit</button>
                </NavLink>
                
                  <button style={{ backgroundColor: "#FF6347", color: "white", borderRadius: "5px", padding: "10px 20px", border: "none" }} onClick={removeItem}  id={item.id}  >remove</button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          ))}
          </MDBRow>
          </div>
    </div>
  )
}

export default DealerProducts