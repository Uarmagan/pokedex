import { useQuery } from '@tanstack/react-query';
import { PokeTypes } from '../types/pokeTypes';

const fetchTypes = (): Promise<PokeTypes> => {
  return fetch('https://pokeapi.co/api/v2/type')
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });
};

const useTypes = () => {
  return useQuery(['types'], fetchTypes);
};

export { fetchTypes, useTypes };
