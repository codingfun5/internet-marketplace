import React from "react";
import { useState } from "react";
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';
import './App.css';

function Home() {
    const [clothes, setClothes] = useState(data);
  const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setClothes(newClothes);
  }
  return (
    <div>
      <div className='cont'>
      
      <h2 className='back'>Free Standard Shipping</h2>
      </div>
     
      <div>
      <Buttons filteredClothes = {chosenClothes}/>
      <Clothes itemsForSale = {clothes}/>
      </div>
    </div>
  )
}
export default Home;