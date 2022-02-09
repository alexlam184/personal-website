import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const Description = () => {
  const { t } = useTranslation('description');
  // Create reference to store the DOM element containing the animation
  const el: any = useRef<HTMLDivElement | null>(null);
  const eltwo: any = useRef<HTMLDivElement | null>(null);
  // Create reference to store the Typed instance itself
  const typed: any = useRef<typeof Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        '<div>' + t('siri') + '</div>^1000 <div> ' + t('define') + '</div>',
      ],
      typeSpeed: 10,
      backSpeed: 10,
    };

    const optionstwo = {
      strings: [
        '`<div>' + t('phonics') + '</div>^1000 <div> ' + t('pos') + '</div>`',
      ],
      typeSpeed: 10,
      backSpeed: 10,
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
      <div className='h-screen bg-white flex justify-center items-center'>
        <div className='bg-black text-white'>
          <div className='h-[50px]'>
            <span className='' ref={el} />
          </div>

          <div className='siri-anime'>
            <div className='flex justify-center items-center'>
              <span>{t('message')}</span>
            </div>
            <div>
              <span>{t('phonics')}</span>
            </div>
            <div>
              <span>{t('pos')}</span>
            </div>
            <div>
              <span>{t('meaning1')}</span>
            </div>
            <div>
              <span>{t('meaning2')}</span>
            </div>
            <div className='italic'>
              <span>{t('motto1')}</span>
            </div>
            <div className='italic'>
              <span>{t('motto2')}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
