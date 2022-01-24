import * as React from 'react';
import Image from 'next/image';
import icon from '../../public/assets/photo/alex-icon.jpg';

export const Home = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='block bg-white border-2'>
        <div className='flex justify-center items-center inline-block font-bold'>
          <span className='block'>Hi, My name is </span>
          <span className='block bg-black text-white'>Lam Alexander</span>
        </div>
        <div className='inline-block bg-black w-[100px] h-[100px]'>
          <Image src={icon} alt='Picture of the author' />
        </div>
      </div>
      <div className="block">© 2022 by Lam Alexander</div>
    </div>
  );
};
