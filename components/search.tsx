import { useState } from 'react';

export const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <input
      className='bg-white h-16 rounded-2xl px-4 shadow-lg w-full'
      placeholder='Search Your Pokèmon'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
