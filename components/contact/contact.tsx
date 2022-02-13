import * as React from 'react';
import Image from 'next/image';
import AlexIcon from '../../public/assets/photo/alex-icon.jpg';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

export const Contact = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <div className='relative h-screen bg-bkroundyellow'>
          <div className='block flex justify-center'>
            <span>GET IN TOUCH</span>
            {/* <Image layout='intrinsic' src={AlexIcon} alt={'My face'} /> */}
          </div>
          <div className='block flex justify-center  md:w-[800px] md:h-[500px]'>
            <div className='border-2 inline-block w-full m-4 md:w-5/12'>
              <span>Send me a msg~~</span>
              <form>
                <div>
                  <label>Name:</label>
                  <input type='text' name='fname' />
                </div>
                <div>
                  <label>Email</label>
                  <input type='text' name='email' />
                </div>
                <div>
                  <label>Message</label>
                  <input type='textbox' name='message' />
                </div>
              </form>
            </div>
            <div className='border-2 inline-block w-full m-4 md:w-[800px] md:h-[500px]'>
              <div>
                <AiOutlineMail />
                <span>lamalex0211@gmail.com</span>
              </div>
              <div>
                <AiFillGithub />
                <span>https://github.com/alexlam184</span>
              </div>
              <div>
                <AiFillLinkedin />
                <span>https://www.linkedin.com/in/alex-lam-724992152/</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
