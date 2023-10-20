import React  from 'react';
import './dashboard.css'
import { NavLink } from 'react-router-dom';
const Dashboard = ()=>{
  return (
    <>
      <div id='box'>
    <h1>Dashboard!</h1>   
    <NavLink className={'nav'} to={'/'}>Home</NavLink>
    <NavLink className={'nav'} to={'/Dashboard'}>Dashboard</NavLink>
    <NavLink className={'nav'} to={'/MainPage'}>Main-Page</NavLink>
    </div> 
    </>

  );
};

export default Dashboard;