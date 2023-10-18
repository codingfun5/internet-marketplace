import React from "react";
import image from './first-picture.jpg';


import './App.css';
function First() {
   

    return(

        <div className="container">
            <div className="box">
          <div className="sale"> 
            <h3> sale</h3>
            <h3> -20%</h3>
            <h3> dress</h3>
            </div> 
        <div>
            <h1 className="bali">Bali</h1>
            </div>
            </div>
            <div>       
    <img className="bali-picture" src={image} alt="First"/>
    </div>
    </div>
    
          )
         
      
         
  

}
export default First;