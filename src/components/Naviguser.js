import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

function Naviguser() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="success" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/user">DietFit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/browse">Browse</Nav.Link>
            <NavDropdown title="Features" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/mealplanner">
                Meal Planner
              </NavDropdown.Item>
              <NavDropdown.Item href="/lowcarb">
                Low Carb Recipes
              </NavDropdown.Item>
              <NavDropdown.Item href="/foodtracker">
                Food Tracker
              </NavDropdown.Item>
              <NavDropdown.Item href="/doctortips">
                Doctor Tips
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/articles">Articles</Nav.Link>
            <Nav.Link href="/support">Support</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
            <></>
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">void4002</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item >
        <Button variant='light' onClick={handleShow}>Profile</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>void4002</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  Name: Vineeth Reddy Pachika{"\n"}
  Email: vineethreddypachika@gmail.com{"\n"}
  Phone: 7337092880{"\n"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </Dropdown.Item>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naviguser;
