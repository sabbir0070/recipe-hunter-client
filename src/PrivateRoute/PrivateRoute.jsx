import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
const {user,loading} = useContext(AuthContext);
const location = useLocation();
// console.log(location)
if(loading){
return (
<div className='w-full h-full items-center text-center  px-20'>
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