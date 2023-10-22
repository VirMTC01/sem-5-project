import React from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: '#4aed88',
              },
            },
          }}
        ></Toaster>
      </div>

        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Dashboard' Component={Dashboard} />
          <Route path='/MainPage' Component={MainPage} />
        </Routes>
      

    </>

  );
};

export default App;
