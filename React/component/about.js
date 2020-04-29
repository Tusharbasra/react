import React from 'react';
import './about.css';
import img from './shop.webp';
import img1 from './video.webp';
import img2 from './sports.webp';
import img3 from './chat.png';



const About=()=>{
    return(
        <div className='about' id="us">
            <h1>About us</h1>
            <div className='box1'>
                <img src={img} alt='sorry'/>
                <p>Shopping</p>


            </div>
            <div className='box2'>
                
            <img src={img1} alt='sorry'/>    
            <p>Video</p>

            </div>
            <div className='box3'>
               
            <img src={img2} alt='sorry'/>
            <p>Sports</p>

            </div>
            

            <div className='box4'>
         
            <img src={img3} alt='sorry'/>
            <p>Chat</p>
      
            </div>
        </div>
 
    )
}

export default About;