export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-gray-200'>
      <div className='mx-auto max-ws7xl sm:px-6 lg:px-8 w-full '>
        {children}
      </div>
    </div>
  );
}
