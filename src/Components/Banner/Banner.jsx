import React from 'react';
import banner from '../../assets/image/banner2.png'
const Banner = () => {
  return (
    <div className='w-100 h-90'>
      <img className='bg-cover opacity-90 rounded-lg index-0 w-full h-full relative' src={banner} alt="" />
      <div className='absolute top-0 w-full lg:mt-96 mt-40  sm:mt-72 px-1  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl '>
        <div className='text-center bg-base-600 opacity-110 rounded-full'>
          <p className=' lg:text-5xl text-3xl hover:text-blue-600 font-bold index-1 text-green-600 leading-tight '>CLEAN EATING CHALLENGE<br />   <span className='text-fuchsia-700 hover:text-red-600'>For Weight Loss.</span> </p>
          <p className='text-gray-200 lg:text-3xl text-2xl font-bold hover:text-green-400 mt-3'> Get pre-portioned ingredients <br /> for Gusto Meal Kits  <br /> best recipes direct to your door </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;