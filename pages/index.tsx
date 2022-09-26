import type { NextPage } from 'next';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import logo from '../public/pokemon-logo.png';
import PokemonCard from '../components/pokemonCard';
import TypesList from '../components/typesList';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonList } from '../components/pokemonList';

export default function Home() {
  const pokemon = usePokemon();

  return (
    <>
      <div>
        <div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
          <div className='flex min-h-0 flex-1 flex-col bg-gray-800'>
            <div className='flex h-16 items-center bg-gray-900 px-4 relative'>
              <Image
                src={logo}
                className='object-contain'
                layout='fill'
                alt='Your Company'
              />
            </div>
            <TypesList />
          </div>
        </div>
        <div className='flex flex-col md:pl-64'>
          <div className='sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow'>
            <div className='flex flex-1 justify-between px-4'>
              <div className='flex flex-1'>
                <form className='flex w-full md:ml-0' action='#' method='GET'>
                  <label htmlFor='search-field' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
                      <MagnifyingGlassIcon
                        className='h-5 w-5'
                        aria-hidden='true'
                      />
                    </div>
                    <input
                      id='search-field'
                      className='block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm'
                      placeholder='Search'
                      type='search'
                      name='search'
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <main className='flex flex-col'>
            <PokemonList />
          </main>
        </div>
      </div>
    </>
  );
}
