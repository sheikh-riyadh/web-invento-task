import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-full mt-20'>
            <p className='text-7xl font-thin'>L</p>
            <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-600'></div>
            <p className='text-7xl font-thin'>ading....</p>
        </div>
    );
};

export default LoadingSpinner;