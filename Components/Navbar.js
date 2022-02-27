import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const { pathname } = useRouter();
  const isLoan = pathname.includes('loanApplication');
  const isFoodBasket = pathname.includes('foodBasket');

  return (
    <nav
      className=' px-5 md:px-16 mt-5 py-6 sticky top-0 flex bg-white'
      style={{ maxHeight: '100px' }}
    >
      {(isLoan || isFoodBasket) && (
        <Link href='/'>
          <p className='mr-4 text-sm font-semibold text-gray-400 cursor-pointer my-auto'>
            Back to Home
          </p>
        </Link>
      )}

      <h1 className='font-bold text-blue-500 text-md uppercase my-auto'>
        {isLoan && 'Loan Application'}
        {isFoodBasket && 'Food Basket'}
      </h1>
    </nav>
  );
};

export default Navbar;
