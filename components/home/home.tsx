import * as React from 'react';
import Image from 'next/image';
import computer from '../../public/assets/photo/computer2.gif';
import { useTranslation } from 'next-i18next';

export const Home = () => {
  const { t } = useTranslation('home');

  return (
    <div className='relative h-screen bg-bkgroundblue flex'>
      <div className='absolute object-center object-cover pointer-events-none w-1/2 right-0'>
        <Image
          layout='responsive'
          src={computer}
          alt={'computer credit to:Guillaume Kurkdjian'}
        />
      </div>
      <div className='absolute block left-10 top-20 z-1 bg-white border-8 bg-transparent'>
        <div className='m-16'>
          <span className='block text-white text-md md:text-2xl xl:text-4xl'>
            {t('greeting')}
          </span>
          <span className='block bg-bkgrounddarkblue text-white mt-8 text-xl md:text-4xl xl:text-7xl'>
            <strong className=' m-8'>{t('name')}</strong>
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
