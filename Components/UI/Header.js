import React from 'react';

const Header = ({ title, description }) => {
  return (
    <>
      <h2 className='text-gray-800 text-2xl font-bold'>{title}</h2>
      <p className='text-md mt-2 text-gray-600'>{description}</p>
    </>
  );
};

export default Header;
