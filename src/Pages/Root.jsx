import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './Home';
import Footer from '../components/shared/Footer';

const Root = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;