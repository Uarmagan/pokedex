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
