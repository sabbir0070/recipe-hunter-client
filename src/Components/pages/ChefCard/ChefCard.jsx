import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';

const ChefCard = ({ chef }) => {
  const { id, chef_name, chef_picture, experience, likes, number_of_recipes } = chef;


  return (
    <div className="card  rounded-lg p-3 bg-base-100 mt-8 xs:w-xl xs:w-full sm:w-full  shadow-xl ">
      <LazyLoad className="" height={288} offset={50}>
        <figure><img className='w-full h-80  sm:pt-8  rounded-lg ' src={chef_picture} alt="Album" /> </figure>
      </LazyLoad>

      <div className="card-body hover:bg-base-200 xs:w-full sm:w-full ">
        <h2 className="card-title ">Name: <span className='text-green-700'>{chef_name}</span></h2>
        <p className='text-gray-800 text-lg font-semibold'> </p>
        <p className='text-gray-800 text-lg font-semibold'>Experience: <span className='text-red-700'>{experience}</span> </p>
        <p className='text-gray-800 text-lg font-semibold'>total-recipes:<span className='text-blue-700'> {number_of_recipes}</span> </p>
        <p className='text-gray-600 font-semibold'>Click the button to view recipes and chef personal information details.</p>
        <div className="  flex gap-x-16 sm:gap-1  justify-between ">
          <Link to={`/chefrecipes/${id}`}><button className="px-6 sm:px-3 py-2 font-semibold 
                    rounded bg-indigo-500 text-white hover:bg-indigo-700 ">
            View Recipes </button> </Link>
          <p className='text-gray-800 flex items-center text-lg font-semibold'>
            <HandThumbUpIcon className='w-10  h-10  mr-2 xs:mr-0 text-indigo-700'></HandThumbUpIcon> <span className='text-3xl text-red-700'>{likes}</span>
          </p>
        </div>
      </div>
    </div>


  );
};

export default ChefCard;