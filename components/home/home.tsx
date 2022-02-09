import * as React from 'react';
import Image from 'next/image';
import computer from '../../public/assets/photo/computer2.gif';
import { useTranslation } from 'next-i18next';

export const Home = () => {
  const { t } = useTranslation('home');

  return (
    <div className='relative h-screen bg-bkgroundblue flex justify-center items-center'>
      <div className='xl:absolute md:relative object-center object-cover pointer-events-none md:w-[800px] xl:w-1/2 right-0'>
        <Image
          layout='responsive'
          src={computer}
          alt={'computer credit to:Guillaume Kurkdjian'}
        />
      </div>
      <div className='absolute block left-10 xl:top-20 md:top-72 z-1 bg-white border-8 bg-transparent'>
        <div className='md:my-16 xl:m-16'>
          <span className='block text-white text-md md:text-6xl xl:text-4xl'>
            {t('greeting')}
          </span>
          <span className='block bg-bkgrounddarkblue text-white mt-8 text-xl md:text-8xl xl:text-10xl'>
            <strong className=''>{t('name')}</strong>
          </span>
          <ul className='option text-4xl'>
            <li>
              <span>🖱️ {t('developer')}</span>
            </li>
            <li>
              <span>🏀 {t('baller')}</span>
            </li>
            <li>
              <span>🥊 {t('boxer')}</span>
            </li>
            <li>
              <span>🤖 {t('freelancer')}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
