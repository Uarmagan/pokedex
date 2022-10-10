import { SearchBar } from '../components/search';

export default function PokedexV2() {
  return (
    <main className='grid grid-cols-[2fr_1fr] h-screen py-8 gap-x-7'>
      <div className='flex flex-col gap-y-10'>
        <SearchBar />
        <div className='bg-orange-500 h-16 '>Sorting</div>
        <div className='bg-green-400 h-16 '>Filtering</div>
        <div className='bg-teal-400 flex-auto'>Filtering</div>
      </div>
      <div className='bg-blue-500 flex flex-col rounded-lg flex-1  '>
        this is highlight section
      </div>
    </main>
  );
}
