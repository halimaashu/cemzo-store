import React from 'react';
import { MoonLoader } from "react-spinners";
const loading = () => {
    return (
        <div className='flex justify-center items-center text-center mx-auto h-screen'>
           

       <MoonLoader color="#4338CA" />
        </div>
    );
};

export default loading;