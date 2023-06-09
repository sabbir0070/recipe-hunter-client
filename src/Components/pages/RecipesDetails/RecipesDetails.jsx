
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaRegStar, FaStar, } from 'react-icons/fa';
import Rating from 'react-rating';

const RecipesDetails = ({ recipe }) => {
  const { Picture, rating, name, total_View, making_details, ingradiants } = recipe;
  const [favourite, setFavourite] = useState(true);

  const handleToasty = (event) => {
    toast(" Succuessfully added to favourite")
    console.log(444)
    setFavourite(event.target.checked)
  }


  return (
    <div>
      <div className="card lg:w-96 md:w-96 bg-base-200 hover:bg-base-100 shadow-xl w-full ">
        <figure className="px-10 pt-10">
          <img src={Picture} alt="Shoes" className="w-60 h-40 rounded-xl" />
        </figure>
        <div className="card-body items-center hover:bg-base text-left">
          <h2 className="text-left font-bold text-2xl">Recipe Name: <span className='text-lime-500 hover:text-lime-600'>{name} </span> </h2>
          <p className=' text-gray-600 text-lg font-semibold '>{making_details}</p>
          <hr className='bg-lime-500 h-2 w-full border' />
          <div className="card-actions">
            <div className=''>
              <h2 className='text-left disabled text-2xl font-bold text-blue-500 hover:text-blue-600'>INGREDIENTS:</h2>
              <div className='text-left text-lg text-gray-600 '>
                <p>1: {ingradiants.onions} </p>
                <p>2: {ingradiants.oil} </p>
                <p>2: {ingradiants.poteto} </p>
                <p>2: {ingradiants.salt} </p>
                <p>2: {ingradiants.mix} </p>
              </div>
            </div>
            <hr className='bg-lime-500 h-2 w-full border' />

            <p className='mt-2 text-lg font-semibold items-center text-gray-600 text-yellow-800'> Rating : <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar className='w-10 h-6 mt-1 '></FaRegStar>}
              placeholderSymbol={<FaStar className=' w-10 h-6 text-orange-400 mt-1'></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
            </p>
            <div className='pt-3 flex justify-between items-center gap-10'>
              <div>
                <p className='text-gray-600 text-lg font-semibold  text-yellow-800'>Views : <span className='text-green-500'>{total_View}</span>  </p>
              </div>
              <p className='ml-10'>
                <button onClick={handleToasty} disabled={!favourite} className='btn bg-indigo-600'>Favourite</button>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </p>
              <div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;