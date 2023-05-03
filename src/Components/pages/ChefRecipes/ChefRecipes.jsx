import React from 'react';
import { useLoaderData } from 'react-router-dom';
const ChefRecipes = () => {
const data = useLoaderData();
console.log(data)
  return (
    <div>
<h2>  this is chef recipe pages</h2>   
 </div>
  );
};

export default ChefRecipes;