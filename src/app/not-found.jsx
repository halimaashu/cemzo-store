import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center text-center'>
          <div className="">
             <Image src={"/not found.webp" }alt='Not fount image' width={1000} height={1000} className='h-screen '>

           </Image>
          </div>
           <Link href={"/"} className='z-10 text-center mx-auto'><Button >Go Home</Button></Link>
        </div>
    );
};

export default NotFound;