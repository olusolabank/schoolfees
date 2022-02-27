import React from 'react';

const Label = ({ title, lFor }) => {
  return (
    <label className='text-sm text-gray-500 font-medium' htmlFor={lFor}>
      {title}
    </label>
  );
};

export default Label;
