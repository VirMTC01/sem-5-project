import React  from 'react';
import './mainpage.css'
import { NavLink } from 'react-router-dom';
const MainPage = ()=>{
  return (
    <>
     <div id='box'>
    <h1>Main-Page!!!!</h1>   
    <NavLink className={'nav'} to={'/'}>Home</NavLink>
    <NavLink className={'nav'} to={'/Dashboard'}>Dashboard</NavLink>
    <NavLink className={'nav'} to={'/MainPage'}>Main-Page</NavLink>
    </div> 
    </>

  );
};

export default MainPage;