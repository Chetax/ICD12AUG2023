import React from 'react';
const Charracter=({Customkey,value})=>{
  return(
    <div className="Characeter">
 <div className="Key1">
   <p>{Customkey}</p>
 </div>
 <div className="Line1"></div>
  <div className="Value1">{value}</div>
</div>
  );
  
}
export default Charracter;
