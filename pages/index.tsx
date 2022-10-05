import type { NextPage } from 'next';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import logo from '../public/pokemon-logo.png';
import PokemonCard from '../components/pokemonCard';
import TypesList from '../components/typesList';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonList } from '../components/pokemonList';
import Link from 'next/link';
export default function Home() {
  return (
    <div className='flex flex-col mx-2 my-3 space-y-2'>
      <Link href='/v1'>
        <a>Pokedex v1</a>
      </Link>
      <Link href='/v2'>
        <a>Pokedex v2</a>
      </Link>
    </div>
  );
}
