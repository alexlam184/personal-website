import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiTypescript,
  SiPython,
} from 'react-icons/si';
export const Description = () => {
  const { t } = useTranslation('description');
  // Create reference to store the DOM element containing the animation
  const el: any = useRef<HTMLDivElement | null>(null);
  // Create reference to store the Typed instance itself
  const typed: any = useRef<typeof Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        '<div>' + t('siri') + '</div>^1000 <div> ' + t('define') + '</div>',
      ],
      typeSpeed: 10,
      backSpeed: 10,
      cursorChar: '',
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
    <>
      <div className='relative '>
        <div className='h-screen bg-bkgroundorange sm:flex md:block items-center'>
          <div className='block text-white text-6xl md:text-9xl w-[200px]'>
            About Me
          </div>
          <div className=''>
            <div className='md:w-1/2 bg-bkgroundnude text-bkgroundorange text-2xl md:text-6xl'>
              <span className='' ref={el} />
            </div>
          </div>
        </div>
        <div className='absolute top-0 right-0 siri-anime md:inline-block w-screen md:w-1/2 h-screen  bg-black text-bkgroundorange flex justify-center items-center'>
          <div className=''>
            <div className='flex justify-center items-center text-6xl m-2'>
              <span>{t('message')}</span>
            </div>
            <div className='m-8 md:text-xl xl:text-3xl'>
              <span>{t('phonics')}</span>
            </div>
            <div className='mx-4 md:text-xl xl:text-3xl'>
              <div>
                <span>{t('pos')}</span>
              </div>
              <div className='my-5'>
                <span>{t('meaning1')}</span>
              </div>
              <div className='my-5'>
                <span>{t('meaning2')}</span>
              </div>
              <div className='block text-6xl'>
                <div className='inline-block m-4 group relative'>
                  <FaReact />
                  <span
                    className={`absolute left-0 top-0 w-auto p-2 mt-20 min-w-max rounded-md shadow-md bg-white text-bkgroundorange text-xs z-20 font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100`}
                  >
                    React.js
                  </span>
                </div>
                <div className='inline-block m-4 group relative'>
                  <SiTypescript />
                  <span
                    className={`absolute left-0 top-0 w-auto p-2 mt-20 min-w-max rounded-md shadow-md bg-white text-bkgroundorange text-xs z-20 font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100`}
                  >
                    Typescript
                  </span>
                </div>
                <div className='inline-block m-4 group relative'>
                  <FaNodeJs />
                  <span
                    className={`absolute left-0 top-0 w-auto p-2 mt-20 min-w-max rounded-md shadow-md bg-white text-bkgroundorange text-xs z-20 font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100`}
                  >
                    Node.js
                  </span>
                </div>
                <div className='inline-block m-4 group relative'>
                  <SiPython />
                  <span
                    className={`absolute left-0 top-0 w-auto p-2 mt-20 min-w-max rounded-md shadow-md bg-white text-bkgroundorange text-xs z-20 font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100`}
                  >
                    Python
                  </span>
                </div>
              </div>
            </div>
            {/* <div className='italic'>
                <span>{t('motto1')}</span>
              </div>
              <div className='italic'>
                <span>{t('motto2')}</span>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
