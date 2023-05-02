import React, { useContext, useState } from 'react';
import { Bars3Icon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user.photoURL)
  return (
    <div className='px-1 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl '>
      <div className='flex justify-between items-center p-10 bg-gray-200'>
        <Link className='text-3xl font-bold inline-flex items-center'>Food & Recipe</Link>
        <ul className='items-center hidden space-x-8 lg:flex text-gray-600 text-lg'>
          <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}>Home</NavLink>
          <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}>blog</NavLink>
          <NavLink to='/login' className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}> Login </NavLink>
          <NavLink to='/register' className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}>Register</NavLink>
          {user ?
            <> <Link aria-label='user' title={user.displayName}> <UserCircleIcon className='w-8 h-8 text-red-500'></UserCircleIcon>  </Link> <Link><button> Logout</button></Link> </> :
            <Link to="/login"><button className=''>Login</button></Link>
          }
        </ul>
        <div className='lg:hidden'>
          < button aria-label='Open Menu'
            title='Open Menu'
            // className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)} >
            <Bars3Icon className="h-8 w-8 text-indigo-600"></Bars3Icon>
          </button>
          {isMenuOpen && (
            <div className='absolute z-10   top-0 left-0 w-full '>
              <div className='p-5 bg-gray-200 mb-10  border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to="" className='text-3xl font-bold inline-flex items-center'>Food & recipe</Link>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      //   className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="h-8 w-8 text-red-600"></XMarkIcon>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link
                        to='/'
                        aria-label='home'
                        title='home'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        aria-label='blog'
                        title='blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/login'
                        aria-label='login'
                        title='login'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Login
                      </Link>
                    </li>

                    <li>
                      <Link
                        to='/register'
                        aria-label='register'
                        title='register'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Register
                      </Link>
                    </li>
                    <li>

                       {user ?
            <> <Link aria-label='user' title={user.displayName}> <UserCircleIcon className='w-8 h-8 text-red-500'></UserCircleIcon>  </Link> <Link><button> Logout</button></Link> </> :
            <Link to="/login"><button className=''>Login</button></Link>
          }
                      
                    </li>
                    
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;