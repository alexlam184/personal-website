import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Loadingscreen = (
  <>
    <div className='w-screen h-screen bg-black z-50'>
      Loading....{/*I have an animation here*/}
    </div>
  </>
);

export default function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    // const handleStart = (url) => {
    //   setLoading(true);
    //   console.log('Router change...');
    // };
    // const handleComplete = (url) => {
    //   setLoading(false);
    //   console.log('Router change completed');
    // };
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
