import Image from 'next/image';
import React from 'react';
import { Pokemon } from '../types/pokemon';
import { colorPicker, padId } from '../utils';

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const capFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div className=' h-52 rounded-xl border-2 border-solid border-gray-200 flex'>
      <div className='flex-1 flex flex-col items-center place-content-around'>
        <div className='relative w-full h-24 '>
          <h3 className='absolute top-2 left-1/2 transform -translate-x-1/2 text-8xl opacity-10 italic font-bold'>
            {padId(pokemon.id)}
          </h3>
          <div className='w-20 h-20 absolute top-4 left-1/2 transform -translate-x-1/2'>
            <Image
              src={pokemon.sprites.front_default}
              layout='responsive'
              width='20'
              height='20'
            />
          </div>
        </div>
        <h3 className=' text-xl font-semibold '>{pokemon.name}</h3>
        <div className='flex space-x-2'>
          {pokemon.types
            .map(({ type }) => (
              <p className={`font-medium ${colorPicker(type.name)}`}>
                {capFirstLetter(type.name)}
              </p>
            ))
            .reduce((prev, curr): any => [
              prev,
              <span className='font-extrabold text-lg '> &#183; </span>,
              curr,
            ])}
        </div>
        <p className='-mt-3'>
          {pokemon.abilities
            .map(({ ability }) => ability.name)
            .reduce((prev, curr): any => [prev, ' ', curr])}
        </p>
      </div>
      <div className='flex-1'>stats</div>
    </div>
  );
}
