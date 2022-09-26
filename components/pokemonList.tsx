import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemonData, usePokemon } from '../hooks/usePokemon';
import PokemonCard from './pokemonCard';

export const PokemonList = () => {
  const { data, isLoading } = usePokemon();
  if (isLoading) return <p>Loading...</p>;
  console.log(data);
  return (
    <div className='flex flex-col items-center '>
      <div className='mx-auto px-4 sm:px-6 md:px-8  min-w-full py-4 space-y-10'>
        {data?.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};
