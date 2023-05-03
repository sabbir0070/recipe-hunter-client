import React from 'react';
// import banner from '../../assets/image/banner.jpg'
import ChefAllData from '../ChefAllData/ChefAllData';
import Banner from '../Banner/Banner';
import Places from '../pages/Places/Places';
import DeliveryProcess from '../../DeliveryProcess/DeliveryProcess';

const Home = () => {
  return (
    <div>

      <div className="px-1  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <Banner></Banner>
      </div>
      <div className='bg-red-200 px-1 mt-10  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
<h2 className='text-center text-3xl font-bold pt-6 hover:text-lime-900 text-blue-600'>All Chef informaion</h2>        
<ChefAllData></ChefAllData>
      </div>
<div className='bg-red-200 px-1 mt-10  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
<h2 className='text-center text-3xl font-bold pt-6 hover:text-lime-900 text-blue-600'>Food Corner places</h2>
<Places></Places>
</div>
<div className='bg-red-200 px-1 mt-10  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
<h2 className='text-center text-3xl font-bold pt-6 hover:text-lime-900 text-blue-600'>Food Delivery Process</h2>
<DeliveryProcess></DeliveryProcess>
</div>
    </div>
  );
};

export default Home;