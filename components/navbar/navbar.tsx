/*  ./components/Navbar.jsx     */
import { useState } from 'react';
import * as React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Logo from '../../public/assets/logo/alex-logo.png';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('header'); // change language

  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  const MenuhandleClick = () => {
    setActive(!active);
  };

  const ViewpointClick = () => {
    console.log('Viewpoint=', window.scrollY);
  };

  return (
    <div className='sticky top-0 z-40 w-full'>
      <div
        className={`
          ${active ? '' : 'hidden'}
          absolute h-screen w-screen z-40 bg-bkgroundblack bg-opacity-70 lg:hidden
        `}
      ></div>
      <header className='relative bg-white sm:h-20 flex items-center w-full shadow'>
        <div className='container px-2 mx-auto flex items-center justify-between z-40'>
            <div className='mt-2 w-[150px] md:w-[200px]'>
              <a href='#'>
                <Image src={Logo} alt='Logo' />
              </a>
            </div>
          <div className='flex items-center'>
            <nav
              className={`
                ${
                  active
                    ? 'absolute top-0 left-0 w-10/12 lg:w-full h-screen bg-white z-40 lg:relative lg:w-full lg:h-full'
                    : '-left-80'
                }
                group font-sen text-gray-800 dark:text-white uppercase text-lg ease-in-out duration-150 lg:flex lg:items-center
              `}
            >
              <ul className={`${active ? '' : 'hidden lg:contents'}`}>
                <li className='h-[100px] lg:hidden'>
                  <div className='m-6 h-10 w-[200px] sm:h-10 transition'>
                    <Image src={Logo} alt='Picture of the author' />
                  </div>

                  <svg
                    className='absolute h-8 w-8 top-0 right-1 hover:bg-gray-100'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    onClick={MenuhandleClick}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </li>
                <li className='lg:float-left'>
                  <button
                    className='py-2 px-6 flex text-base font-medium text-gray-500 border-b-4 border-transparent transition duration-100 ease-in-out transform hover:-translate-y-1 hover:text-gray-900 lg:hover:border-black'
                    onClick={ViewpointClick}
                  >
                    Viewpoint
                  </button>
                </li>
                <li className='lg:float-left'>
                  <a
                    href='#'
                    className='py-2 px-6 flex text-base font-medium text-gray-500 border-b-4 border-transparent transition-all duration-100 ease-in-out transform hover:-translate-y-1  hover:text-gray-900 lg:hover:border-black'
                  >
                    {t('Home')}
                  </a>
                </li>
                <li className='lg:float-left'>
                  <a
                    href='#'
                    className='py-2 px-6 flex text-base font-medium text-gray-500 border-b-4 border-transparent transition duration-100 ease-in-out transform hover:-translate-y-1 hover:text-gray-900 lg:hover:border-black'
                  >
                    {t('CV')}
                  </a>
                </li>
                <li className='lg:float-left'>
                  <a
                    href='#'
                    className='py-2 px-6 flex text-base font-medium text-gray-500 border-b-4 border-transparent transition duration-100 ease-in-out transform hover:-translate-y-1 hover:text-gray-900 lg:hover:border-black'
                  >
                    {t('Blog')}
                  </a>
                </li>
                <li className='lg:float-left'>
                  <a
                    href='#'
                    className='py-2 px-6 flex text-base font-medium text-gray-500 border-b-4 border-transparent transition duration-100 ease-in-out transform hover:-translate-y-1 hover:text-gray-900 lg:hover:border-black'
                  >
                    {t('Project')}
                  </a>
                </li>
                <li className='lg:float-left'>
                  <a
                    href='#'
                    className='py-2 px-6 flex text-base font-medium text-gray-500 border-b-4 border-transparent transition duration-100 ease-in-out transform hover:-translate-y-1 hover:text-gray-900 lg:hover:border-black'
                  >
                    {t('Contact')}
                  </a>
                </li>
                <select
                  onChange={changeLanguage}
                  defaultValue={locale}
                  className='py-2 px-6 flex text-white text-shadow-sm text-lg bg-black tracking-wide w-full lg:w-auto'
                >
                  <option className='text-white' value='en'>
                    English
                  </option>
                  <option className='text-white' value='hk'>
                    中文繁體
                  </option>
                </select>
              </ul>
            </nav>
            <button
              className={`
                ${active ? 'outline-none ring-2 ring-inset ring-gray-100' : ''}
                group lg:hidden flex flex-col ml-4 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100
              `}
              onClick={MenuhandleClick}
            >
              <span className='w-6 h-1 bg-gray-800 dark:bg-white mb-1'></span>
              <span className='w-6 h-1 bg-gray-800 dark:bg-white mb-1'></span>
              <span className='w-6 h-1 bg-gray-800 dark:bg-white mb-1'></span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
