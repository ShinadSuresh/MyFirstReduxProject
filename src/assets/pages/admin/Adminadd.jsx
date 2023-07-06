import React, { useRef } from 'react';
import { MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import AadminProductadd from '../../Redux/slices/AadminProductadd';



const Adminadd = () => {
    const dispatch = useDispatch()
    const myref = useRef()

    const productHandle = (e) => {
        e.preventDefault();

        const image = myref.current.image.value;
        const productTitle = myref.current.title.value;
        const price = myref.current.price.value;

       
        dispatch(AadminProductadd({image, title: productTitle, price }));
        myref.current.reset();
        
    }

    

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="container p-4 rounded border border-dark">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form ref={myref}>
              <MDBRow className="mb-4">
                {/* Add any additional content you want in this row */}
              </MDBRow>

              <MDBInput wrapperClass="mb-4" label="Product Image" />
              <MDBInput wrapperClass="mb-4" label="Product Name" />
              <MDBInput wrapperClass="mb-4" label="Price" />
              

              <MDBBtn className="mb-4" type="submit" block onClick={productHandle}>
                Save
              </MDBBtn>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminadd;
