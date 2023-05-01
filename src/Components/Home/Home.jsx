import React from 'react';
import banner from '../../assets/image/banner.jpg'

const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 bg-gray-200 justify-around px-10 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
            <div className=' '>
             <p className='text-4xl font-bold text-gray-800 leading-tight '>A Chef In Every<br />   <span className='text-indigo-500'> Tasty Meal Box.</span> </p>
            <p className='text-gray-700 text-2xl mt-3'> Get pre-portioned ingredients <br /> for Gusto Meal Kits  <br /> best recipes direct to your door </p>

            </div>
            <div className='sm:w-full lg:w-100 md:w-100 '>
           <img className=' h-72 w-100  bg-gray-300' src= {banner} alt="img nai" />
            </div>
            <div>
            </div>
        </div>
    </div>
  );
};

export default Home;