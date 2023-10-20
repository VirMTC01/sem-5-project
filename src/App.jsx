import React from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MainPage from './pages/MainPage';
import {  Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/Dashboard' Component={Dashboard} />
        <Route path='/MainPage' Component={MainPage} />
      </Routes>


    </>

  );
};

export default App;
