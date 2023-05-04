import React, { useEffect, useState } from 'react';
import ChefCard from '../pages/ChefCard/ChefCard';

const ChefAllData = () => {

  const [chefDatas, setChefDatas] = useState([]);
  useEffect(() => {
    fetch(`https://chef-receipe-hunter-server-sabbir0070.vercel.app/chefdatas`)
      .then(res => res.json())
      .then(data => setChefDatas(data))

  }, [])

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 md:gap-8 px-10 py-5 mx-auto  xs:w-xl sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
      {
        chefDatas.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
      }
    </div>
  );
};

export default ChefAllData;