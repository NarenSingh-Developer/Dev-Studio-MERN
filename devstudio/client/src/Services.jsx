import React from 'react'
import {CardDeck, Col, Container, Row } from "react-bootstrap"
import Cards from "./Cards"
import img1 from "./images/photography.jpg"
import img2 from "./images/videography.jpg"
import img3 from "./images/pre-wedding-shoot.jpg"
import img4 from "./images/drone.jpg"
import img5 from "./images/candid.jpg"
import img6 from "./images/live.jpg"
import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
const Services = () => {
    return (
        <>
           <section className="servies mt-5 mb-5">
      <h1 className="text-center mb-5">Services</h1>
      <Container>
      <CardDeck>
      <Row>
      <Col lg="4" md="12">
 <Cards img={img1} Title = "Photography" />
 </Col>
 <Col lg="4" md="12">
 <Cards img="https://images.unsplash.com/photo-1523251239923-9969d2b4f95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" Title = "HD Videography"/>
 </Col>
 <Col lg="4" md="12">
 <Cards img={img3} Title = "Pre Wedding Shoot"/>
 </Col>
 </Row>
</CardDeck>
<CardDeck className="mt-5">
<Row>
<Col lg="4" md="12">
<Cards img="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" Title = "Drone"/>
</Col>
<Col lg="4" md="12">
<Cards img="https://i2.wp.com/d4595be3p93fv.cloudfront.net/wp-content/uploads/2020/02/Udaipur-Mount-Abu-Honeymoon-Package1.jpg?w=580&ssl=1" Title = "Candid & Cinematic Shoots"/>
</Col>
<Col lg="4" md="12">
<Cards img="https://www.dacast.com/wp-content/uploads/2019/03/Live-Streaming-Video-Equipment-1-1024x683.jpg" Title = "Live Telecast"/>
</Col>
</Row>
</CardDeck>
      </Container>
     </section> 
        </>
    )
}

export default Services
