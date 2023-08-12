import React from "react";
import SingleEle from './SingleEle';
import Charracter from './Charracter';
const Lower=()=>{
  return(
    <div className="Lower">
 <SingleEle Customkey="Originally Published" value="1955"/>
 <SingleEle Customkey="Author" value="Frank Herbert"/>
 <SingleEle Customkey="Followed By" value="Dune Messiah"/>
 <SingleEle Customkey="Page Count" value="412"/>
 <SingleEle Customkey="Adaptations" value="Dune(1984),Frank Herbert Dune(2000)"/>
 <Charracter Customkey="Character"  value="Alessandro Rossi,Sofia Bianchi,Luca Russo,Valentina Martini,Matteo Conti,Giorgia Ferri,Marco De Luca,Chiara Esposito,Francesco Ricci,Elena Ferrari,Leonardo Russo,Camilla Moretti,"/>
    </div>
  )
}
export default Lower;
