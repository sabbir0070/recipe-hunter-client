import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';


const ChefCard = ({ chef }) => {
const recipeData = useLoaderData();

  const { id,chef_name, chef_picture, experience, likes, number_of_recipes } = chef;

return (


    <div className="card  rounded-lg p-3  bg-base-100 mt-8 shadow-xl">
<h2>recipes data length:{recipeData?.length}</h2>      
<figure><img className='w-full h-80  sm:pt-8  rounded-lg ' src={chef_picture} alt="Album" /></figure>
      <div className="card-body ">
        <h2 className="card-title ">Name:  {chef_name}</h2>
        <p className='text-gray-800 text-lg font-semibold'> </p>
        <p className='text-gray-800 text-lg font-semibold'>Experience: {experience}</p>
        <p className='text-gray-800 text-lg font-semibold'>total-recipes: {number_of_recipes}</p>
        <p className='text-gray-800 text-lg font-semibold'>Likes:{likes}</p>
        <p className='text-gray-600 font-semibold'>Click the button to view recipes and chef personal information details.</p>
        <div className="card-actions ">
          <Link to={`/chefrecipes/${id}`}> <button className="px-6 py-2 text-lg font-semibold rounded bg-indigo-500 text-white">View Recipes </button></Link>
        </div>
      </div>
    </div>


  );
};

export default ChefCard;