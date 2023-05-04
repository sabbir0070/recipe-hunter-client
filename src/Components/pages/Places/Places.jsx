import React from 'react';
import place from '../../../assets/image/places.jpg'
import { Link } from 'react-router-dom';

const Places = () => {
  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 sm:gap-y-16 bg-base-500 justify-between px-10 py-5 mx-auto  xs:w-xl  sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
      <div className=' text-center border px-3 border-gray-500 hover:bg-base-300 rounded-lg pt-5 bg-base-100'>
        <p className='text-4xl font-bold text-gray-800 leading-tight '>A Chef In Every<br />   <span className='text-indigo-500'> Tasty Meal Box.</span> </p>
        <p className='text-gray-700 text-2xl mt-3'> Get pre-portioned ingredients <br /> for Gusto Meal Kits  <br /> best recipes direct to your door </p>
        <Link to="/register"><button className='border border-gray-400 hover:bg-indigo-700 hover:text-yellow-500 px-8 py-3 mt-3 mb-3 bg-blue-600 font-bold rounded-lg text-white px-3'>Join Now</button></Link>
      </div>
      <div className='w-100 lg:w-100 md:w-100 '>
        <img className=' h-80 w-full bg-cover shadow-xl rounded-lg bg-gray-300' src={place} alt="img nai" />
      </div>
      <div>
      </div>
    </div>

  );
};

export default Places;