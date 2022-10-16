import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { classNames } from '../utils/tailwindUtils';

export const SortLimit = () => {
  return (
    <div className='flex items-center'>
      <div className=' h-16 flex items-center flex-1'>
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex w-full justify-center py-2 text-md text-gray-700 hover:text-gray-500 font-bold'>
              Ascending
              <ChevronDownIcon
                className='-mr-1 ml-2 h-5 w-5'
                aria-hidden='true'
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Ascending
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Descending
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className='flex space-x-4 '>
        <div className=''>
          <label htmlFor='from' className='text-sm font-bold'>
            From
          </label>
          <input
            type='text'
            name='from'
            value={0}
            readOnly
            className='bg-white w-16 py-2 border border-gray-300 rounded-xl text-right pr-2 ml-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'
          />
        </div>
        <div>
          <label htmlFor='to' className='text-sm font-bold'>
            To
          </label>
          <input
            type='text'
            name='to'
            value={20}
            readOnly
            className='bg-white w-16 py-2 border-gray-300 border-[1px] rounded-xl text-right pr-2 ml-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'
          />
        </div>
      </div>
    </div>
  );
};

{
  /* <button className='h-16 w-20 m-0 p-0'>Ascending</button>
<svg
  xmlns='http://www.w3.org/2000/svg'
  fill='none'
  viewBox='0 0 24 24'
  strokeWidth={1.5}
  stroke='currentColor'
  className='w-4 h-4'
>
  <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
  />
</svg> */
}
