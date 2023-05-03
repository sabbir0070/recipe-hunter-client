
import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import { Toast } from 'react-toastify/dist/components';
const RecipesDetails = ({recipe}) => {
const {Picture,rating,name,total_View,making_details,ingradiants} = recipe;

const [favourite, setFavourite] = useState(true);

const toastify = () =>{
  alert ("Favourite this items");
console.log(3)
}


  return (
    <div>
     <div className="card w-96 bg-base-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={Picture} alt="Shoes" className="w-60 h-40 rounded-xl" />
  </figure>
  <div className="card-body items-center hover:bg-base-100 text-left">
<h2 className="text-left font-bold  text-2xl">Recipe Name: <span className='text-lime-500 hover:text-lime-600'>{name} </span> </h2>
    <p className=' text-gray-600 text-lg font-semibold '>{making_details}</p>
<hr className='bg-lime-500 h-2 w-full border' />    
<div className="card-actions">
<div className=''>
<h2 className='text-left text-2xl font-bold text-blue-500 hover:text-blue-600'>INGREDIENTS:</h2>
<div className='text-left text-lg text-gray-600 '>
<p>1: {ingradiants.onions} </p>
<p>2: {ingradiants.oil} </p>
<p>2: {ingradiants.poteto} </p>
<p>2: {ingradiants.salt} </p>
<p>2: {ingradiants.mix} </p>
</div>
</div>
<hr className='bg-lime-500 h-2 w-full border' />    
<div className='pt-3 flex justify-between items-center gap-10'>
<div>
<p className='text-lg font-semibold text-gray-600 text-yellow-800'>rating: {rating}</p>
<p className='text-gray-600 text-lg font-semibold text-yellow-800'>views:{total_View} </p>
</div> 
<p> <button onClick={toastify} disabled={!favourite} className="border border-gray-500 bg-indigo-500 text-white font-semibold text-lg px-7 py-2 rounded-xl hover:bg-indigo-700">Favourite</button></p>
<div>
</div>
</div>
    
    </div>
  </div>
</div> 
    </div>
  );
};

export default RecipesDetails;