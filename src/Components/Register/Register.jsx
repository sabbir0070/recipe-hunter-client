import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {

const [error, setError] = useState('');
const [success, setSuccess] = useState('')
const {user,createUser,updateProfileAndPhoto} = useContext(AuthContext);


const handleRegister = (event) =>{
event.preventDefault();
const form = event.target;
const name = form.name.value;
const photo = form.photo.value;
const email = form.email.value;
const password = form.password.value;
console.log(email,password,name,photo)
console.log(user)
// if(password > 8){
// setError('Please provide password at least 6 number');
// return
// }
setError('');
setSuccess('');

createUser(email,password)
.then(result=>{
const loggedUser = result.user;
updateUserData(loggedUser,name,photo)
console.log(loggedUser);
setSuccess('account created successfull')

})
.catch(error=>{
setError(error.message)
})
}
 // Set User Name and Photo Link
    const updateUserData = (user, name, photo) => {
      updateProfileAndPhoto(user, name, photo)
        .then(() => {
          console.log('user name update')
        })
        .catch(error => {
          console.log(error.message)
          setError(error.message)
        })
    }


  return (
<div className="hero min-h-screen bg-base-200  px-1 mt-5  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
  <div className="hero-content flex-col">
    <div className="text-center mb-3">
      <h3 className="text-5xl font-bold">Please Register </h3>
    </div>
    <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Your Name</span>
          </label>
          <input type="text" name='name' placeholder=" Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Your Photo</span>
          </label>
          <input type="text" name='photo' placeholder=" Your Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input type="email" name='email' placeholder=" Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Password</span>
          </label>
          <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required / >
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
<p className='text-blue-600 text-lg font-semibold text-center'><small><Link to='/login'>Already Have An Account? Please Login</Link></small></p>
<p className='text-red-600 text-lg font-semibold text-center'><small>{error}</small></p>
<p className='text-green-600 text-lg font-semibold text-center'><small>{success}</small></p>
      </form>
    </div>
  </div>
</div>
  );
};

export default Register;