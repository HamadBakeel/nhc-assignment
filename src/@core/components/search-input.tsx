import Image from 'next/image';
import React from 'react';

type TSearchInputProps = React.InputHTMLAttributes<HTMLInputElement>

const SearchInput: React.FC<TSearchInputProps> = (props) => {
  return <div className="max-w-[90%] md:max-w-[740px] m-auto">
        <p className='text-[#285F9D] text-lg mb-3'>Search products by keyword</p>
        <div className="relative border-2 border-[#006483D1] bg-[#F3F3F3] rounded-lg h-12 overflow-hidden px-3 flex items-center">
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
  </div>
};

export default SearchInput;
