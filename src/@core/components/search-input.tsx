import Image from 'next/image';
import React from 'react';

interface TSearchInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  productsCount: number; 
}

const SearchInput: React.FC<TSearchInputProps> = ({productsCount,...props}) => {
  return <div className="max-w-[90%] md:max-w-[740px] mx-auto m-7 mb-6">
        <p className='text-[#285F9D] text-lg'>Search products by keyword</p>
        <div className="relative border-2 border-[#006483D1] bg-[#F3F3F3] rounded-lg h-12 overflow-hidden px-3 flex items-center my-5">
          <Image 
            src={'search.svg'} 
            width={20} 
            height={20} 
            alt='search icon' 
            className='absolute top-1/2 -translate-y-1/2 right-3'
            />
          <input 
            type="text" 
            {...props} 
            className='w-full block bg-transparent focus-visible:outline-0'
            />
        </div>
        <p className="">
          Total results count: {productsCount}
        </p>
  </div>
};

export default SearchInput;
