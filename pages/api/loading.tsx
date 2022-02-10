import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../public/assets/logo/alex-logo.png';
const Loadingscreen = (
  <>
    <div className='flex fixed items-center justify-center bg-black w-screen h-screen min-w-full max-w-full min-h-full max-h-full z-50 transition ease-in-out delay-10000'>
      <div className='relative w-96 flex items-center justify-center table-caption'>
        <Image src={Logo} alt='Logo' />
      </div>
      <div className='min-h-screen flex justify-center items-center bg-black'>
        <div className='loader bg-white p-5 rounded-full flex space-x-3'>
          <div className='w-5 h-5 bg-gray-800 rounded-full animate-bounce'></div>
          <div className='w-5 h-5 bg-gray-800 rounded-full animate-bounce'></div>
          <div className='w-5 h-5 bg-gray-800 rounded-full animate-bounce'></div>
        </div>
      </div>
    </div>
  </>
);

export default function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const handleStart = (url) => url !== router.asPath && setLoading(true);
    // const handleComplete = (url) => url === router.asPath && setLoading(false);

    const handleStart = (url) => {
      setLoading(true);
      console.log('Router change...');
    };
    const handleComplete = (url) => {
      setLoading(false);
      console.log('Router change completed');
    };
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return <>{loading && Loadingscreen}</>;
}
