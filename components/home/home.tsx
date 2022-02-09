import * as React from 'react';
import Image from 'next/image';
import computer from '../../public/assets/photo/computer2.gif';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const Home = () => {
  const { t } = useTranslation('home');
  // Create reference to store the DOM element containing the animation
  const el: any = useRef<HTMLDivElement | null>(null);
  // Create reference to store the Typed instance itself
  const typed: any = useRef<typeof Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        '🖱️ ' + t('developer'),
        '🏀 ' + t('baller'),
        '🥊 ' + t('boxer'),
        '🤖 ' + t('freelancer'),
      ],
      typeSpeed: 80,
      backSpeed: 75,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className='relative h-screen bg-bkgroundblue flex justify-center items-center'>
      <div className='fixed object-center overflow-hidden object-cover pointer-events-none  w-11/12 xl:w-1/2 xl:right-0'>
        <Image
          layout='responsive'
          src={computer}
          alt={'computer credit to:Guillaume Kurkdjian'}
        />
      </div>
      {/* <div className='absolute xl:left-20 block w-10/12 md:w-auto xl:top-20 md:top-50 z-1 border-8 bg-transparent'> */}
      <div className='absolute xl:left-20 block w-10/12 md:w-auto xl:top-20 md:top-50 z-1 bg-transparent'>
        <div className='m-4 md:m-12 xl:m-10'>
          <span className='block text-white text-4xl md:text-6xl xl:text-4xl'>
            {t('greeting')}
          </span>
          <span className='block bg-bkgrounddarkblue text-white mt-7 md:mt-14 xl:mt-6 text-4xl md:text-9xl xl:text-7xl'>
            <div className='p-4 md:p-8'>
            <strong>
              <div>
              <span>{t('fullname')}</span>
              </div>
              <div>
                
                <span>{t('surname')}</span>
              </div>
            </strong>
            </div>
          </span>
          <div className='block text-white text-3xl md:text-6xl xl:text-5xl mt-7 md:mt-14 xl:mt-6 h-[100px]'>
            <span className='' ref={el} />
          </div>
        </div>
      </div>
    </div>
  );
};
