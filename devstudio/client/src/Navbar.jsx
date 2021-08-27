import React, { useState } from 'react'
import "./App.css"
import PhotoCameraOutlinedIcon from "@material-ui/icons/PhotoCameraOutlined";
import ClearIcon from '@material-ui/icons/Clear';
import ViewListIcon from '@material-ui/icons/ViewList';
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal"
import {Button} from "react-bootstrap";
const Navbar = () => {
  const [navbar, setnavbar] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

    const openbtn = () =>{
        document.getElementById("sideNav").style.width = "280px";
      }
      const closebtn = () =>{
        document.getElementById("sideNav").style.width = "0px";
      }
      const changebackgroundcolor = () =>{
        if(window.scrollY >= 20){
          setnavbar(true);
          document.getElementById("openbtn").style.color = "black";
          document.getElementById("albumheading").style.color = "black";
        }
        else{
          setnavbar(false);
          document.getElementById("openbtn").style.color = "#fff";
          document.getElementById("albumheading").style.color = "#fff";
        }

      }
      window.addEventListener("scroll" , changebackgroundcolor);
      
    return (
        <>
           <div className="sideNav position-fixed" id="sideNav">
        <button className="btn bg-0 text-dark closebtn" onClick={closebtn}><ClearIcon className="closeicon"/></button>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Youtube</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#" onClick={() => setModalShow(true)}>E-Album</a></li>
        </ul>
      </div>
      <div className={navbar ? "scrollNav" : "dNav"}>
      <button className="btn bg-0 ml-4 openbtn" id="openbtn" onClick={openbtn}><ViewListIcon style={{fontSize : "35px"}} /></button>
      <PhotoCameraOutlinedIcon className="ml-3 mr-2" style={{fontSize : "30px"}} />
      <h3 className="pt-1">Dev Studio</h3>
      <Button className="ml-auto mr-5 bg-transparent shadow-none border-0" id="albumheading" onClick={() => setModalShow(true)} style={{fontSize : "1.4rem"}}>E-Album</Button>
      </div> 

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
    )
}

export default Navbar
