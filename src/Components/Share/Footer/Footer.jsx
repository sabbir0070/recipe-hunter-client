
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-slate-900 text-white mt-10 text-center py-5   md:px-10 lg:px-10  mx-auto  xs:w-xl  sm:max-w-xl md:max-w-full lg:max-w-screen-xl '>
            <h2 className='font-bold text-5xl text-center pt-5 hover:text-green-200'>GOOD FOOD</h2>
            <ul className='flex justify-center mt-5'>
                <li className='md:px-2 px-1 md:font-bold text-green-200 hover:text-white'>HOME</li>
                <li className='md:px-2 px-1 md:font-bold text-green-200 hover:text-white'>RECIPES</li>
                <li className='md:px-2 px-1 md:font-bold text-green-200 hover:text-white'>ABOUT US</li>
                <li className='md:px-2 px-1 md:font-bold text-green-200 hover:text-white'>EVENT</li>
                <li className='md:px-2 px-1 md:font-bold text-green-200 hover:text-white'>CONTACT</li>
            </ul>

            <ul className='flex justify-center mt-5'>
                <li className='px-2 text-2xl text-white cursor-pointer'>
               <FaFacebook></FaFacebook>
                </li>
                <li className='px-2 text-2xl cursor-pointer'>
                    <FaLinkedinIn></FaLinkedinIn>
                </li>
                <li className='px-2 text-2xl cursor-pointer'>
                    <FaInstagram></FaInstagram>
                </li>
                <li className='px-2 text-2xl cursor-pointer'>
                    <FaTwitter></FaTwitter>
                </li>
            </ul>
            <footer className='divide-y  text-gray-800'>
                <div className='px-10 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
                </div>
                <div className='py-6 text-md text-center text-gray-400'>
                    © 2023 copy right. All rights reserved food.
                </div>
            </footer>
        </div>




    );
};

export default Footer; <h3>this is footer</h3>