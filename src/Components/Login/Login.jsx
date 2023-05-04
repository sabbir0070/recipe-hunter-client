import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { loading, signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // Loading spinner
    if (loading) {
      return (
        <div className='lg:w-60 h-full md:w-60 items-center text-center  px-20'>
          <progress className="progress  text-center text-green-700"></progress>
        </div>
      )
    }
    setError('');
    setSuccess('')
    if (password.length < 6) {
      setError('Please at least 6 number of password')
    }
    form.reset();
    signInUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from)
        setSuccess('User login Successful')
      })
      .catch(error => {
        //  setError(error.message)
      })
  }
  // google signIn
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        navigate('/')
        setSuccess('Google login successful')
      })
      .catch(error => {
        setError(error.message)
      })
  }
  const handleGithubSignIn = () => {
    githubSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        navigate('/')
        setSuccess('Github login successful')
      })
      .catch(error => {
        setError(error.message)
      })
  }
  return (
    <div className="hero min-h-screen bg-base-200 px-1 mt-5  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className=" lg:w-96 md:w-96 sm:w-full xs:w-full flex-col">
        <div className="text-center mb-3">
          <h3 className="text-5xl font-bold">Please Login! </h3>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
              <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt text-lg link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <button onClick={handleGoogleSignIn} className="btn mt-3 btn-primary">Google Sign In</button>
              <button onClick={handleGithubSignIn} className="btn mt-3 btn-primary">Github Sign In</button>
            </div>
            <p className='text-sky-500 text-center text-lg'><small><Link to='/register'>New Auth User? Please Register</Link></small></p>
            <p className='text-red-500 text-center'>{error}</p>
            <p className='text-green-500 text-center'>{success}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;