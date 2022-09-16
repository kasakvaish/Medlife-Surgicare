import React from "react";
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Typical from 'react-typical';
import Text from "./Text";

function ColorSchemesExample() {
  return (
    <>
    {/* <div className="heading">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Medlife</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
        </Container
      </Navbar>
      </div>
      <div className="AboutPhoto">
        <img width={1366} height={700} src={require("./Image/Surgicare.jpg")} alt={'photos'} />
      </div> */}

      <div className="typo">


        <strong className="bg-yellow-400 px-1">
          <h3>Looking for</h3>
          <Typical
               steps={[
                  'Second Opinion',
                  1000,
                  'Third Opinion',
                  1000,
                  'Fourth Opinion',
                  1000,
                  ]}
                  wrapper="p"
                  loop={Infinity}
          />
        </strong>

      </div>

      <div className="butt-1">
      <Button variant="primary">Piles</Button>{' '}
      <Button variant="primary">Fistula</Button>{' '}
      <Button variant="primary">Fissure</Button>{' '}
      <Button variant="primary">Pilonidal Sinus</Button>{' '}
      <Button variant="primary">Varicose Veins</Button>{' '}
      <Button variant="primary">Varicocele</Button>{' '}
      <Button variant="primary">Varicocele</Button>{' '}
      <Button variant="primary">Kidney Stone</Button>{' '}
      <Button variant="primary">Phimosis</Button>{' '}
      <div className="but-2">
      <Button variant="primary">Hydrocele</Button>{' '}
      <Button variant="primary">Cataract</Button>{' '}
      <Button variant="primary">Lasik</Button>{' '}
      <Button variant="primary">Hernia</Button>{' '}
      <Button variant="primary">Gallabladder</Button>{' '}
      <Button variant="primary">Appendix</Button>{' '}
      </div>
      </div>

      <div className="but-3">
      <Button variant="warning" size="lg" active>
        Book a Free Consultation
      </Button>{' '}
      <Button variant="warning" size="lg" active>
        +919222888666
      </Button>{' '}
      </div>
      <div>
        <Text/>
      </div>
     
      </>
      );
}

export default ColorSchemesExample;