import React from 'react';
import './mainpage.css'
import { NavLink } from 'react-router-dom';
import logo from '../images/login-img.png'
const MainPage = () => {
  return (
    <>
    <main>
      <div id='nav-box'>
        {/* <h1>Main-Page!!!!</h1> */}
        <NavLink className={'nav'} to={'/'}>Home</NavLink>
        <NavLink className={'nav'} to={'/Dashboard'}>Dashboard</NavLink>
        <NavLink className={'nav'} to={'/MainPage'}>Main-Page</NavLink>
        <img src={logo} alt='logo' id='logo'/>
      </div>
      <div id='main-box'>
      <div id="file-sec">
         <h3 style={{margin:'0'}}>file-section</h3>
      </div>
      <div id="code-box">

      <div id="editor-container">
          <h1>editor</h1>
      </div>
      <div id="output-window">
          <div id="output">
            <h1>output</h1>
          </div>
          <div id="input">
            <h1>input</h1>
          </div>
      </div>
      </div>
      </div>


      </main>
    </>

  );
};

export default MainPage;