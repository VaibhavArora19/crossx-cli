import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className='flex items-center justify-between pt-1 px-20 mx-auto font-Poppins bg-black'>
      <Image
        src={'/logo.png'}
        height={150}
        width={150}
        alt='logo'
        className='cursor-pointer'
        onClick={() => {
          router.push('/');
        }}
      />

      <button
        onClick={() => {
          window.open('https://www.npmjs.com/package/crossx', '_blank');
        }}
        className='bg-white py-2  px-10 text-black rounded-full hover:bg-[#7CFEA2] '>
        View package
      </button>
    </div>
  );
};

export default Navbar;
