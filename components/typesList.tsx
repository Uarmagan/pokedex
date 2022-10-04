import React from 'react';
import { useTypes } from '../hooks/useTypes';
import { colorPicker } from '../utils';

function TypesList() {
  const { data } = useTypes();
  return (
    <div className='flex flex-col items-center overflow-auto'>
      {data?.map((pokeType) => (
        <h1
          key={pokeType.name}
          className={`bg-gray-700 group  px-auto py-2 text-base tracking-wider font-medium border-2 border-solid border-gray-800 w-full text-center ${colorPicker(
            pokeType.name
          )}`}
        >
          {pokeType.name}
        </h1>
      ))}
    </div>
  );
}

export default TypesList;
