import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProduct } from '../../Redux/slices/ProductSlice';

const EditProduct = () => {
  const { id } = useParams()
  const edit = useSelector((state) => state.prdct);
  const EditData = edit.filter((e) => e.id == parseInt(id))

  const asRef = useRef(null);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleEdit = () => {
    const { id,image, title, price } = asRef.current;
    dispatch(
      updateProduct({
        id: parseInt(id.value),
        image: image.value,
        title: title.value,
        price: price.value,
      })
    );
    nav('/adminproducts');
    console.log(EditData);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-4 shadow">
        {EditData.map((item) => (
          <Form
            ref={asRef}
            key={item.id}
            onSubmit={(e) => e.preventDefault()}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>id</Form.Label>
              <Form.Control
                name="id"
                type="number"
                defaultValue={item.id}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>image</Form.Label>
              <Form.Control
                name="image"
                defaultValue={item.image}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>title</Form.Label>
              <Form.Control
                name="title"
                defaultValue={item.title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>price</Form.Label>
              <Form.Control
                name="price"
                defaultValue={item.price}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleEdit }>
              Update
            </Button>
            <Button className="ms-4" variant="danger">
              Cancel
            </Button>
          </Form>
        ))}
      </div>
    </Container>
  );
};

export default EditProduct;
