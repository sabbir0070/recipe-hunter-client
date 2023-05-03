import React from 'react';
import banner from '../../assets/image/bannerr.jpg'
const Banner = () => {
  return (
    <div className='w-100 h-100'>
      <img className='bg-cover opacity-90 rounded-lg index-0 w-full h-full relative' src={banner} alt="" />
      <div className='absolute top-0 w-full lg:mt-96 mt-40  sm:mt-72 px-1  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl '>
        <div className='text-center bg-base-600 opacity-110 rounded-full'>
          <p className='text-5xl  hover:text-green-600 font-bold index-1 text-red-700 leading-tight '>A Chef In Every<br />   <span className='text-fuchsia-700 hover:text-yellow-600'> Tasty Meal Box.</span> </p>
          <p className='text-gray-200 text-3xl font-bold hover:text-green-400 mt-3'> Get pre-portioned ingredients <br /> for Gusto Meal Kits  <br /> best recipes direct to your door </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;