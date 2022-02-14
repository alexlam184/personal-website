import * as React from 'react';
import Image from 'next/image';
import AlexIcon from '../../public/assets/photo/alex-icon.jpg';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
export const Contact = () => {
  return (
    <>
      <div className=''>
        <div className='relative flex items-center justify-center'>
          <div className='w-full h-screen'>
            <div className='flex justify-center items-center text-6xl my-8 contact-font'>
              <span>GET IN TOUCH</span>
              {/* <Image layout='intrinsic' src={AlexIcon} alt={'My face'} /> */}
            </div>
            <div className=''>
              <div className=' bg-bkroundyellow md:flex'>
                <div className='block mx-auto my-6 border-8 border-black xl:h-[600px] w-8/12 md:w-[400px] xl:w-[600px]'>
                  <div className='flex justify-center text-2xl w-full my-4 contact-font'>
                    <span>~Send me a msg~</span>
                  </div>
                  <form className='text-2xl leading-10'>
                    <div className='flex justify-center m-2'>
                      <input
                        className='bg-black w-10/12 text-white'
                        type='text'
                        name='fname'
                        placeholder='NAME'
                      />
                    </div>
                    <div className='flex justify-center m-2'>
                      <input
                        className='bg-black text-white w-10/12'
                        type='text'
                        name='email'
                        placeholder='EMAIL'
                      />
                    </div>
                    <div className='flex justify-center m-2'>
                      <textarea
                        className='bg-black text-white w-10/12 h-[300px]'
                        name='message'
                        placeholder='MESSAGE'
                      />
                    </div>
                    <div className='flex justify-evenly my-8'>
                      <button className='bg-green-500 w-[150px] h-[60px] text-white'>
                        SUBMIT
                      </button>
                      <button className='bg-red-500 w-[150px] text-4xl'>
                        💀
                      </button>
                    </div>
                  </form>
                </div>
                <div className='block mx-auto my-6 border-8 border-black xl:h-[600px] w-8/12 md:w-[400px] xl:w-[600px]'>
                  <div className='flex justify-center text-2xl w-full my-4 contact-font'>
                    <span>~Connect with me~</span>
                  </div>
                  <div className='flex justify-center'>
                    <div className='text-xl leading-10 font-bold'>
                      <div className='flex justify-start items-center my-8'>
                        <HiOutlineMail className='inline-block md:text-4xl xl:text-7xl mx-8' />
                        <div className='inline-block'>
                          <a href='mailto: lamalex0211@gmail.com'>
                            lamalex0211@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className='flex justify-start items-center my-8'>
                        <AiFillGithub className='inline-block md:text-4xl xl:text-7xl mx-8' />
                        <div className='inline-block'>
                          <a href='https://github.com/alexlam184'>
                            github.com/alexlam184
                          </a>
                        </div>
                      </div>
                      <div className='flex justify-start items-center my-8'>
                        <AiFillLinkedin className='inline-block md:text-4xl xl:text-7xl mx-8' />
                        <div className='inline-block'>
                          <a href='https://www.linkedin.com/in/alex-lam-724992152/'>
                            linkedin.com/in/alex-lam-724992152/
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
