
import { Link } from 'react-router-dom';
import { Col, Container, NavLink, Row, Table } from 'react-bootstrap';
import {  useSelector } from 'react-redux';


export const Dealer = () => {

  const dealerData = useSelector((state) => state.signin)

  return (
    <Container fluid>
      <Row>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ width: '200px', height: '750px' }}>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" style={{ padding: '40px' }}>
              <ul className="navbar-nav mb-auto flex-column">
                <h1>Dealer Page</h1>
                <li className="nav-item">
                  <NavLink as={Link} to="/dealeradd">
                    <span className="nav-link" href="#" style={{ textAlign: 'start' }}>
                      Dashboard
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink as={Link} to="/dealerproducts">
                    <span className="nav-link" href="#" style={{ textAlign: 'start' }}>
                      All Products
                    </span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink as={Link} to="/">
                    <span className="nav-link" href="#" style={{ textAlign: 'start' }}>
                      Admin
                    </span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink as={Link} to="/">
                    <span className="nav-link" href="#" style={{ textAlign: 'start' }}>
                      Home
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Col sm={10} className="p-4">
          <div className="table-container">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {dealerData.map((e) => (
                  <tr key={e.id}>
                    <td>{e.userName}</td>
                    <td>{e.email}</td>
                    <td>*********</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
