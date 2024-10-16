import React from 'react';

type TSearchInputProps = React.InputHTMLAttributes<HTMLInputElement>

const SearchInput: React.FC<TSearchInputProps> = (props) => {
  return <input type="text" {...props} />;
};

export default SearchInput;
