import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import logo from '../public/pokemon-logo.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pokeTypes = ['normal', 'fire', 'ice', 'water', 'vanilla'];

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
            <div className='flex flex-col items-center'>
              {pokeTypes.map((pokeType) => (
                <h1
                  key={pokeType}
                  className={classNames(
                    'bg-gray-700 text-white group  px-auto py-2 text-base font-medium border-2 border-solid border-gray-800 w-full text-center'
                  )}
                >
                  {pokeType}
                </h1>
              ))}
            </div>
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
              <div className='ml-4 flex items-center md:ml-6'>
                <button
                  type='button'
                  className='rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>

          <main className='flex-1'>
            <div className='py-6'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
                <div className='py-4'>
                  <div className=' h-52 rounded-xl border-2 border-solid border-gray-200 flex'>
                    <div className='flex-1 flex flex-col justify-center items-center'>
                      {/* ID Goes here */}
                      {/* image goes here */}
                      <h3>bulbasaur</h3>
                      <p>seed pokemon</p>
                      {/* Types */}
                    </div>
                    <div className='flex-1'>stats</div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
