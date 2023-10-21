import React  from 'react';
import { NavLink } from 'react-router-dom';
import './home.css'
const Home = ()=>{
  return (
    <>
    <div id='box1'>
    <h1>HOME PAGE!</h1>   
    <NavLink className={'nav'} to={'/'}>Home</NavLink>
    <NavLink className={'nav'} to={'/Dashboard'}>Dashboard</NavLink>
    <NavLink className={'nav'} to={'/MainPage'}>Main-Page</NavLink>
    </div>
    </>

  );
};

export default Home;
