import React from 'react';
import Link from 'next/link';

const Success = () => {
  return (
    <div className='text-center mt-20'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-16 w-16 mx-auto mb-3 text-green-800'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>

      <h3 className='text-gray-800 text-2xl font-bold'>
        School Fees Application Successful
      </h3>
      <p>Your school fees application has been sent successfully</p>

      <p
        onClick={() => {
          window.location.href = '/';
        }}
        className='mt-6 font-medium text-blue-500 hover:underline cursor-pointer my-auto'
      >
        Back to Home
      </p>
    </div>
  );
};

export default Success;
