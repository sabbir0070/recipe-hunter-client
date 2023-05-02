import React from 'react';
// import banner from '../../assets/image/banner.jpg'
import ChefAllData from '../ChefAllData/ChefAllData';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div>

      <div className="px-1  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <Banner></Banner>
      </div>
      <div className='bg-red-200 px-1  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
        <ChefAllData></ChefAllData>
      </div>
    </div>
  );
};

export default Home;