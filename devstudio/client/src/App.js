import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap"
import Navbar from "./Navbar"
import Services from "./Services"
import Youtube from "./Youtube"
import Contact from "./Contact"
import Footer from "./Footer"
const App = () => {

  return (
    <>
      <section className="MainPage">
        <Navbar />
        <Container>
          <Row className="Row m-0" style={{width : "55%",height: "100vh"}} >
            <Col className="d-flex flex-column justify-content-center align-items-center"> 
              <h1 className="text-white display-3 font-weight-bolder">Dev Film Studio</h1>
              <h1 className="text-white font-weight-lighter">Best Wedding Photography</h1>
              <Button className=" btn-light shadow-none mt-3" style={{width:"fit-content"}} >Contact Us</Button>
            </Col>
          </Row>
        </Container>
        {/* <div className="Maintext d-flex flex-column align-items-center">
      <h1 className="text-white display-3 font-weight-bolder">Dev Film Studio</h1>
      <h1 className="text-white font-weight-lighter">Best Wedding Photography</h1>
      <Button className=" btn-light shadow-none mt-3">Contect Us</Button>
      </div> */}
      </section>
      <Services />
      <Youtube />
      <Contact />
      <Footer />
    </>
  )
}
export default App;