import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
const {user,loading} = useContext(AuthContext);
const location = useLocation();
// console.log(location)
if(loading){
return (
<div className='lg:w-40   md:w-60  lg:px-20 md:px-20 h-full items-center text-center'>
<progress className="progress  text-center text-green-700"></progress>
</div>

)
}

if(user){
return children;
}

  return <Navigate to="/login" state={{from:location}} replace ></Navigate>
 
};

export default PrivateRoute;