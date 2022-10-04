import { useQuery } from '@tanstack/react-query';
import { Pokemon, PokemonIdentifier } from '../types/pokemon';

const fetchPokemonNames = (
  offset: number = 0,
  limit: number = 10
): Promise<PokemonIdentifier[]> => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });
};

const fetchPokemonData = async (
  offset: number,
  limit: number
): Promise<Pokemon[]> => {
  const fetchedPokemon = await fetchPokemonNames(offset, limit);
  const pokemonData = await Promise.all(
    fetchedPokemon.map((pokemon: PokemonIdentifier) => {
      return fetch(pokemon.url)
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
    })
  );
  return pokemonData;
};

const usePokemon = (offset: number = 0, limit: number = 10) => {
  return useQuery(['pokemons'], () => fetchPokemonData(offset, limit));
};

export { fetchPokemonNames, fetchPokemonData, usePokemon };
