import React from 'react';
import { useTypes } from '../hooks/useTypes';

function TypesList() {
  const { data } = useTypes();
  return (
    <div className='flex flex-col items-center overflow-auto'>
      {data?.map((pokeType) => (
        <h1
          key={pokeType.name}
          className='bg-gray-700 text-white group  px-auto py-2 text-base font-medium border-2 border-solid border-gray-800 w-full text-center'
        >
          {pokeType.name}
        </h1>
      ))}
    </div>
  );
}

export default TypesList;
