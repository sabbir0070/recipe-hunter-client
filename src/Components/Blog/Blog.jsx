import React from 'react';


const Blog = () => {
  return (
    <div className='bg-lime-600 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 rounded-lg gap-8 px-10 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
     <div className='border p-5 bg-base-300 text-gray-700 text-lgrounded-lg'>
<h3>1.Question:Tell us the differences between uncontrolled and controlled components?</h3>
<p>Answer</p>
</div>
     <div className='border p-5 bg-base-300 text-gray-700 text-lg rounded-lg'>
<h3>1.Question:How to validate React props using PropTypes?</h3>
<p>Answer</p>
</div>
     <div className='border p-5 bg-base-300 text-gray-700 text-lg rounded-lg'>
<h3>1.Question:Tell us the difference between nodejs and express js.?</h3>
<p>Answer</p>
</div>
     <div className='border p-5 bg-base-300 text-gray-700 text-lg  rounded-lg'>
<h3>1.Question:What is a custom hook, and why will you create a custom hook?</h3>
<p>Answer</p>
</div>
    </div>
  );
};

export default Blog;