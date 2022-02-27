import React from 'react';

const Button = ({ isLoading, title, variant, isDisabled, onClick, type }) => {
  let primaryStyles =
    'bg-blue-500 text-white disabled:bg-blue-300 disabled:text-gray-50';

  let outlineStyles =
    'bg-white text-blue-500 border border-blue-500 disabled:border-blue-300 disabled:text-blue-300';

  let varinatStylesToUse = primaryStyles;
  if (variant === 'outline') {
    varinatStylesToUse = outlineStyles;
  }

  return (
    <button
      className={`transition w-full md:w-auto duration-100  py-3 px-4 rounded-sm font-semibold ${varinatStylesToUse}`}
      type={type}
      disabled={isLoading || isDisabled}
      onClick={onClick}
    >
      {isLoading ? '...' : title}
    </button>
  );
};

export default Button;
