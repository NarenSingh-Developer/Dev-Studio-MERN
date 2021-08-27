import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import { Button } from '@material-ui/core';
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal"
const Footer = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            {/* d-flex align-items-center justify-content-center */}
            <footer className="mt-5 p-5 " style={{ backgroundColor: "black", height: "50vh" }}>
                <Container>
                    <Row style={{ height: "35vh" }} className="d-flex align-items-center justify-content-center">
                        <Col md="3" sm="6" className="d-flex flex-column align-items-center justify-content-center p-0" >
                            <h5><a href="#">Home</a></h5>
                            <h5><a href="#">Services</a></h5>
                            <h5><a href="#">Youtube</a></h5>
                            <h5><a href="#">Contact</a></h5>
                            <h5><a href="#" onClick={() => setModalShow(true)}>E-Album</a></h5>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Col>
                        <div className="d-flex align-items-center justify-content-center" >
                            <h1 className="text-white display-4 font-weight-bolder">Dev Film Studio</h1>
                        </div>
                        {/* <Col md="6" className="d-flex align-items-center justify-content-center" >
                            <h1 className="text-white display-4 font-weight-bolder">Dev Film Studio</h1>
                        </Col> */}
                        <Col md="3" sm="6" className="d-flex  align-items-center justify-content-center p-0">
                            <Button className=" bg-dark text-light mr-2  footerbtn" href="https://www.youtube.com/devstudiobarloot/" ><YouTubeIcon /></Button>
                            <Button className=" bg-dark text-light mr-2  footerbtn" href="tel:861-909-6648" ><WhatsAppIcon /></Button>
                            <Button className=" bg-dark text-light mr-2  footerbtn" href="mailto:devstudiobarloot@gmail.com" ><MailOutlinedIcon /></Button>
                        </Col>
                    </Row>
                </Container>
                {/* <h1 className="text-white display-3 font-weight-bolder">Dev Film Studio</h1> */}
            </footer>
        </>
    )
}

export default Footer
