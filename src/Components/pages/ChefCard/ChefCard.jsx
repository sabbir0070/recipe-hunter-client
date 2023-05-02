import React from 'react';
import { Link, useLoaderData} from 'react-router-dom';
import ChefRecipes from '../ChefRecipes/ChefRecipes';

const ChefCard = ({chef}) => {
// const {id} = useParams();
// console.log(id)


const {id,chef_name,chef_picture,experience,likes,number_of_recipes,specialty} = chef;
const userId = parseFloat(id);
console.log(typeof(userId))

return (


<div className="card lg:card-side   bg-base-100 mt-8 shadow-xl">
  <figure><img className='w-96 h-full  lg:ml-16 sm:pt-8  rounded-lg ' src={chef_picture} alt="Album"/></figure>
  <div className="card-body ">
    <h2 className="card-title ">Name:  {chef_name}</h2>
<p className='text-gray-800 text-lg font-semibold'> </p>    
<p className='text-gray-800 text-lg font-semibold'>Experience: {experience}</p>    
<p className='text-gray-800 text-lg font-semibold'>total-recipes: {number_of_recipes}</p>    
<p className='text-gray-800 text-lg font-semibold'>Likes:{likes}</p>    
<p className='text-gray-600 font-semibold'>Click the button to view recipes and chef personal information details.</p>
    <div className="card-actions ">
     <Link to={`/chefrecipes`}> <button className="px-6 py-2 text-lg font-semibold rounded bg-indigo-500 text-white">View Recipes <ChefRecipes id={id}></ChefRecipes> </button></Link>
    </div>
  </div>
</div>


  );
};

export default ChefCard;