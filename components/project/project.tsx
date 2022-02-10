import * as React from 'react';
import Image from 'next/image';

export const Project = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <div className='relative h-screen bg-bkgroundpurple'>
          <div className='absolute z-10'>
            <div className='absolute text-stroke text-style'>CREATIVE</div>
            <div className='absolute text-fill-black text-style'>CREATIVE</div>
            <div className='absolute text-fill-white text-style'>CREATIVE</div>
          </div>

          <div className='absolute top-0 bg-white text-bkgroundpurple m-16 p-2 text-bold text-6xl h-[100px] w-[300px] flex justify-center items-center z-20'>
            <div>
              <span>TEE.AI</span>
            </div>
          </div>

          {/* <div className=''>
                PRODUCTIVE
            </div>
            <div className=''>
                COMPETITIVE
            </div> */}
        </div>
      </div>
    </>
  );
};
