import React from 'react'
import {Card} from "react-bootstrap"

const Cards = (props) => {
    return (
        <>
           <Card>
    <Card.Img variant="top" src={props.img} />
    <div className="d-flex align-items-center justify-content-center">{props.tag}</div>
    <Card.Body>
      <Card.Title>{props.Title}</Card.Title>

    </Card.Body>
  </Card>
        </>
    )
}

export default Cards