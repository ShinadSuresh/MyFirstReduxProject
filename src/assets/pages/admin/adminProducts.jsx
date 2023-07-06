
import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, } from "mdbreact";
import { useSelector } from "react-redux";
import { ButtoN } from "../../../Components/Button";


const AdminProducts = () => {

  const productitem = useSelector((state) => state.prdct)
  console.log(productitem)

  

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
                {/* <NavLink to={`/viewproduct/${item.id}`}>
                <img src="src/assets/images/plus button.jpg" alt="Button Image"  />
                </NavLink> */} 
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <ButtoN text="Edit" />
                  <ButtoN text="Remove" onClick={() => removeItem (item.id)} />
                  <button >remove</button>
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

export default AdminProducts