import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navig() {
  return (
    <Navbar bg="success" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">DietFit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/browse" eventKey="disabled" disabled>Browse</Nav.Link>
            <NavDropdown title="Features" id="navbarScrollingDropdown" eventKey="disabled" disabled>
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
            <Nav.Link href="/articles" eventKey="disabled" disabled>Articles</Nav.Link>
            <Nav.Link href="/support" eventKey="disabled" disabled>Support</Nav.Link>
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
            <a href='/login'><Button variant="outline-light">Login</Button></a>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navig;