import React from "react";
import beautiful_paradise from './beautiful-paradise-island-with-beach-and-sea.jpg';
function About() {
    return (
        
        <div className="about">
            <img className="beautiful_paradise" src={beautiful_paradise} alt="About"/>
            <div className="box_container_about">
           
            <h1>About the brand</h1>
            
           
          
            <p><b>BALI</b> is Indonesia's first fashion brand with a 30-year history. The brand is inspired by the strong and talented women who created Indonesia's first fashion clothing brand.

Today, <b>BALI</b> is a stylish capsule closet for every day at affordable prices for millions of women and men.

We create timeless fashion and produce inspirational clothing that reflects the individual style of our customers.

<b>BALI</b>. Just be yourself.</p>
        
        </div>
        </div>
    )
}
export default About;