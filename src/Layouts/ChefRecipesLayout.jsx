import React from 'react';
import Navbar from '../Components/Share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Share/Footer/Footer';

const ChefRecipesLayout = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default ChefRecipesLayout;