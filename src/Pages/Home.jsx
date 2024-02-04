import React from 'react';
import Navbar from '../components/shared/Navbar';
import Banner from '../components/Home/Banner';
import Brand from '../components/Home/Brand';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Brand></Brand>
    </div>
  );
};

export default Home;