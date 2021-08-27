import React from 'react'
import { Button, FormControl, Modal } from "react-bootstrap";
const MyVerticallyCenteredModal = (props) => {
  const [code, setcode] = React.useState("");

  const Album = () => {
    
    if( code === "2405")
    {
      alert("condition true");
    }else{
      alert("condition false");
    }
  }
  const handleInput = (e) => {
    const val = e.target.value;
    setcode(val);
  }

  return (
    <>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            E-Album
              </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl placeholder="Enter code" name="codeInput" onChange={handleInput} value={code.codeInput} />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
          <Button onClick={Album}>OK</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MyVerticallyCenteredModal
