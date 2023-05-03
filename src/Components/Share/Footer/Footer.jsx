import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCediSign, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div>
    <footer className='divide-y  text-gray-800'>
      <div className='px-10 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
<div>
<FontAwesomeIcon icon={faCediSign}/>
</div>

</div>
      <div className='py-6 text-sm text-center text-gray-400'>
        © 2023 Job Circular Inc. All rights reserved.
      </div>
    </footer>
    </div>
  );
};

export default Footer;<h3>this is footer</h3>