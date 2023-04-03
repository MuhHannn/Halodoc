import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = (props) => {
    return (
        <Navbar bg="light" expand="lg" style={{border: "1px solid gray"}}>
          <Container>
            <Navbar.Brand href="#">
              <img src={props.image} alt='logo' style={{width: "150px"}}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1" className='px-4' style={{color: "black"}}>Beranda</Nav.Link>
                <Nav.Link href="#action2" className='px-4' style={{color: "black"}}>Artikel</Nav.Link>
                <Nav.Link href="#action3" className="px-4" style={{color: "black"}}>Aplikasi</Nav.Link>
                <Nav.Link href="#action4" className="px-4" style={{color: "black"}}>Riwayat</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Button variant="danger">Login</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Navigation