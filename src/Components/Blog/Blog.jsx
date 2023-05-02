import React, { useLayoutEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
const recipe = useLoaderData();
console.log(recipe)
  return (
    <div>
      <h3>this is blog page</h3>
    </div>
  );
};

export default Blog;