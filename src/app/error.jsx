"use client"
import Link from 'next/link';
import React from 'react';

const error = () => {
    return (
        <div className='flex flex-col space-y-4 items-center justify-center md:w-[500px] shadow-2xl mx-auto py-20 px-6'>
           <h1 className='text-3xl font-bold '> Something Weight wrong !</h1>
           <h2 className='text-center font-medium'>Our team was worked on this Issue please <br /> go anethar Rpute</h2>
           <Link className='font-semibold text-white px-10 py-3.5 rounded-full bg-[#4338CA] shadow-lg shadow-indigo-300 hover:bg-[#3730A3] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200' href={"/"}>Go Home</Link>
        </div>
    );
};

export default error;