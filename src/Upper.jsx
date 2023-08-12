import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const Upper=()=>{
   return(
    <div className="Upper">
      
      <div className="Navbar">
       <FaShareAlt className="Nav1"/>
       <FaTimes  className="Nav2"/>

      </div>
      <div className="Middle">
      <div className="div1">
      <img  src='./images.jpg'></img>
       <div className='star'>
       <FaStar/>  <FaStar/>  <FaStar/> <FaStar/>
       <FaStarHalf/></div> 
      </div>
      <div className="div2">
        <h1>Dune</h1>
        <p className="p1">Novel By <b>Frank Herbert</b></p>
        <div className="Pare">
          <p>ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. and more recently  like.</p>
        </div>
        <button className="Contiread">Continue Reading</button>
      </div>
        
      </div>
    </div>
  )
}
export default Upper;
