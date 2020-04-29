import React from 'react';
import './navbar.css';
import './animate.css';

const Navbar = () =>{
    return(
        <div className='navbar' id="nav">
         <ul>
          <li><a href="#us">ABOUT US</a></li>
          <li><a href="#cont">CONTACT US</a></li>
          <li><a href="#port">PORTFOLIO</a></li>
         </ul>
            <a href = '#' className='link1' >REGISTER</a>
            <a href = '#' className='link2'>LOGIN</a>
          
        </div>
    );
}

export default Navbar;