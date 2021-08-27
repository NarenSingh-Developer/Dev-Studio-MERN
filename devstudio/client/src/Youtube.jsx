import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
const Youtube = () => {
    return (
        <>
              <section className="youtube mt-5 mb-5">
       <h1 className="text-center mt-5 mb-5">Youtube Channel</h1> 
       

       <Container>
         <Row className="mb-3">
           <Col lg="4">
           <iframe width="100%" height="250" src="https://www.youtube.com/embed/cHWmldLIxUg?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
           </Col>

           <Col lg="4">
           <iframe width="100%" height="250" src="https://www.youtube.com/embed/DaPD3CDd5W0?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
           </Col>
              
           <Col lg="4">
           <iframe width="100%" height="250" src="https://www.youtube.com/embed/-ynVqp2XrGo?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
           </Col>
         </Row>

         <Row>
           <Col lg="4">
           <iframe width="100%" height="250" src="https://www.youtube.com/embed/w_p5pUcbPfI?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
           </Col>

           <Col lg="4">
           <iframe width="100%" height="250" src="https://www.youtube.com/embed/bP8aqPCAPVk?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
           </Col>

           <Col lg="4">
           <iframe width="100%" height="250" src="https://www.youtube.com/embed/u15h960S4xU?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
           </Col>
         </Row>
       </Container>
     </section>
        </>
    )
}

export default Youtube
