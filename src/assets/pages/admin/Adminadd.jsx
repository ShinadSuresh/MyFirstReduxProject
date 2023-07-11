import React, { useRef } from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminAddProduct } from '../../Redux/slices/ProductSlice';




const Adminadd = () => {
  const nav = useNavigate();
    const dispatch = useDispatch()
    const myref = useRef()

    const productHandle = (e) => {
        e.preventDefault();

        const image = myref.current.image.value;
        const title = myref.current.title.value;
        const price = myref.current.price.value;
        const id = Math.floor(Math.random() * 81) + 20;

        dispatch(adminAddProduct({image, title , price, id }));
        nav('/adminproducts')
        
    }

  return (

      <div>
        <Form ref={myref}>
          <Row className="mb-3">
            <Form.Group md="4">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="image"
                name="image"
              />
            </Form.Group>
            <Form.Group md="4">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="product name"
                name="title"
              />
            </Form.Group>
            <Form.Group md="4">
              <InputGroup hasValidation></InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group md="6">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="No of products"
                name="price"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="3">
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button onClick={productHandle}>Submit</Button>
        </Form>
      </div>
    );
    
  
}

export default Adminadd;
