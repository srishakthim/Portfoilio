import React from 'react';
import { Link,Outlet } from 'react-router-dom';


function Main() {
    return(
    <>
    <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/work'>Work</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
    </nav>
    <Outlet/>
    </>
    );
}

export default Main;