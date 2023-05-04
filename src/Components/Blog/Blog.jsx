import { FolderArrowDownIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  return (
  
   <div className="Blog text-center py-3 ">
      <Pdf className="w-full h-full" targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='bg-indigo-700 px-5 py-2 hover:bg-indigo-500 font-bold
 rounded-lg text-white ' onClick={toPdf}>
 
<FolderArrowDownIcon className='w-full h-5 '/>
 Download Pdf
 </button>} 
      </Pdf>
      <div ref={ref}>
        <div className=' bg-lime-600 grid sm:grid-cols-1 mt-3 md:grid-cols-2 lg:grid-cols-2 rounded-lg gap-8 lg:px-10 md:px-10 w-full py-5 mx-auto sm:max-w-full xs:w-full md:max-w-full lg:max-w-screen-xl'>
     <div className=' border hover:bg-base-100 p-5 bg-base-300 text-gray-700 text-lg rounded-lg'>
<h3 className='text-red-600 sm:px-10 xs-3 text-2xl mb-3 hover:text-red-700'>1.Question:Tell us the differences between uncontrolled and controlled components?</h3>
<p>Answer: In React, controlled components
 refer to components that have their state and
 behavior controlled by the parent component. 
These components rely on props passed down from the
 parent component to update their state and behavior.
Uncontrolled components refer to components that manage 
their own state internally.</p>
</div>
     <div className='border hover:bg-base-100 p-5 bg-base-300 text-gray-700 text-lg rounded-lg'>
<h3 className='text-red-600 text-2xl mb-3 hover:text-red-700'>2.Question:How to validate React props using PropTypes?</h3>
<p>Answer: To validate React props using PropTypes,
 we can import the PropTypes library from the 'prop-types'
 package and define the propTypes object within the component.
 The propTypes object specifies the expected data type and any other 
validation requirements for each prop. For example,
 to validate that a prop called 'name' is a string and is required,
 we can define it as 'name: PropTypes.string.isRequired'. Once defined,
 React will check that the props passed to the component conform
 to the propTypes specification and will throw an error if 
the validation fails. This helps to catch errors early and 
ensure that the component receives the correct data.</p>
</div>
     <div className='border p-5 hover:bg-base-100 bg-base-300 text-gray-700 text-lg rounded-lg'>
<h3 className='text-red-600 text-2xl mb-3 hover:text-red-700'>3.Question:Tell us the difference between nodejs and express js.?</h3>
<p>Answer: Node.js is a JavaScript runtime that allows developers
 to run JavaScript code on the server-side. It provides
 a set of built-in modules for handling common tasks
 such as file system operations, networking, and more.
Express.js, on the other hand, is a web application 
framework built on top of Node.js. It provides a set
 of abstractions and features for building web applications,
 such as routing, middleware, and template rendering.
In summary, Node.js is the underlying runtime environment,
 while Express.js is a framework that simplifies building web
applications with Node.js by providing additional features and abstractions.</p>
</div>
     <div className='border p-5 hover:bg-base-100 bg-base-300 text-gray-700 text-lg  rounded-lg'>
<h3 className='text-red-600 text-2xl mb-3 hover:text-red-700'>1.Question:What is a custom hook, and why will you create a custom hook?</h3>
<p>Answer: A custom hook in React is a reusable function that
 contains some stateful logic and can be shared 
across multiple components. Custom hooks allow us to 
abstract away complex logic and state management into
 reusable functions, making code more modular and easier
 to read and maintain. Custom hooks can be used to encapsulate
 behavior that is used across multiple components or to abstract
 away complex logic that doesn't belong in a component. 
They can also help to keep components focused on their
 primary responsibilities and improve code reuse. In summary,
 creating a custom hook allows us to encapsulate complex
 logic and state management into reusable functions that can be
 shared across multiple components, resulting 
in more modular and maintainable code.</p>
</div>
    </div>
      </div>
    </div>

  );
};

export default Blog;

