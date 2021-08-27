import React, { useState } from 'react'
import { Col, Container, Form, FormControl, Row, Button } from 'react-bootstrap'
import axios from "axios";
const Contact = () => {
   const [userdata, setuserdata] = React.useState({
       name : "",
       phone : "",
       textarea : ""
   })
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setuserdata({...userdata, [name] : value})
    }

    const Submit = async(e) =>{
        e.preventDefault();
       await axios.post("http://localhost:5000/contact", userdata); 
    }
    return (
        <>
            <section className="contect mt-5 mb-5">
                <h1 className="text-center mb-5">Contact Us</h1>
                <Container>
                    <Row>
                        <Col lg="6">
                        <Form onSubmit={(e) => Submit(e)}>
                            <FormControl placeholder="Name" className="mb-4" name="name" onChange={(e) => handleInput(e)} value={userdata.name} required/>
                            <FormControl placeholder="Phone" className="mb-4" name="phone" onChange={(e) => handleInput(e)} value={userdata.phone} required/>
                            <FormControl as="textarea" placeholder="Message" className="mb-4" name="textarea" onChange={(e) => handleInput(e)} value={userdata.textarea} required/>
                           
                        <Button type="submit">Send</Button>
                            </Form>
                        </Col>
          
                        <Col lg="6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.977526191522!2d72.71984229758631!3d24.99479354354895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3942dfee7f2460d5%3A0xbef091ad5f3c8834!2sShree%20Sarneshwer%20Mahadev%20Temple!5e0!3m2!1sen!2sin!4v1615651580111!5m2!1sen!2sin" width="100%" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy"></iframe>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact
