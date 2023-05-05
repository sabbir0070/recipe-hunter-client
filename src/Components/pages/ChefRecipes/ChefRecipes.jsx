import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import RecipesDetails from '../RecipesDetails/RecipesDetails';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';
const ChefRecipes = () => {
  const data = useLoaderData();
  const { chef_name, specialty, chef_picture, experience, likes, number_of_recipes, description } = data;
  console.log(specialty)
  return (
    <div>
      <div className="card  grid md:grid-cols-2 bg-base-100 shadow-xl  lg:grid-cols-2 sm:gap-y-16 md:px-10 lg:px-10 lg:py-5 md:py-5 py-3 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl">
        <figure><img className='w-full h-full' src={chef_picture} alt="Album" /></figure>
        <div className="card-body hover:bg-base-200">
          <h2 className="card-title text-gray-700 md:text-2xl lg:text-2xl hover:text-green-600 font-bold"> <span className='text-blue-600'>Name:</span> {chef_name}</h2>
          <p className="text-gray-600 text-lg font-semibold " > <span className='font-semibold text-lg text-yellow-600'>About Chef: </span> {description}</p>
          <p className="text-gray-600 text-lg font-semibold "> <span className='font-semibold text-lg text-yellow-600'> Specialty:</span> {specialty} </p>
          <p className="text-gray-600 text-lg font-semibold "> <span className='font-semibold text-lg text-blue-600'> Number of recipes:</span> {number_of_recipes} </p>
          <p className="text-gray-600 text-lg font-semibold "><span className='font-semibold text-lg text-yellow-600'> Year of experience:</span>{experience} </p>
          {/* <p className="text-gray-600 text-lg font-semibold"> <span className='font-semibold text-lg text-blue-600'> Likes:</span> {likes} </p> */}
          <div className="card-actions">
            <Link to="/"><button className="bg-indigo-500 px-5 py-2 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700">Back Home</button></Link>
            <p className='text-gray-800 flex items-center text-lg font-semibold'>
              <HandThumbUpIcon className='w-7  h-10  mr-2 lg:ml-5 md:ml-5 text-indigo-700'></HandThumbUpIcon>
              <span className='text-lg text-red-700'>{likes}</span>
            </p>
          </div>
        </div>
      </div>
      {/* Recipes details */}
      <div className="card mt-20 grid md:grid-cols-2 bg-base-100 shadow-xl  lg:grid-cols-3 sm:gap-y-16  lg:px-10 md:px-10 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        {
          data.recipes.map(recipe => <RecipesDetails
            key={recipe._id}
            recipe={recipe}
          ></RecipesDetails>)
        }
      </div>
    </div>
  );
};

export default ChefRecipes;