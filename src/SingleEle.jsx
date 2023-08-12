import React from "react";
import Charracter from './Charracter';
const SingleEle=({Customkey,value})=>{
  return(
    <div className="SingleEle">
 <div className="Key">
   <p>{Customkey}</p>
 </div>
 <div className="Line"></div>
  <div className="Value">{value}</div>
</div>
  );
  
}
export default SingleEle;
