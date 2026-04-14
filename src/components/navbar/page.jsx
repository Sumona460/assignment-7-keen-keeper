'use client'
import { House, Timer, Clock, Clock1, ChartLine } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = () => {
const pathName = usePathname();
// console.log('path name in the navbar', pathName);

    return (
        <div className="navbar  bg-base-100 shadow-sm flex justify-between">
  <div className="">
    <span href='/' className=" text-3xl font-bold ml-5  ">Keen<span className='font-light text-gray-500'>Keeper</span></span>
  </div>


  <div className="flex">
    <span className=" flex gap-3 mr-4 text-gray-500">

         <Link href="/" className={pathName === '/' ? 'btn btn-success text-white': 'btn btn-ghost'}> <House className='w-6'></House>Home</Link>
  

      <Link className={pathName === '/timeline' ? 'btn btn-success text-white': 'btn btn-ghost'} href="/timeline"  ><Clock1 className='w-5'></Clock1>Timeline</Link>

      <Link href="/stats" className={pathName === '/stats' ? 'btn btn-success text-white': 'btn btn-ghost'} ><ChartLine className='w-5' />Stats</Link>
      
        
         
    </span>
  </div>
</div>
    );
};

export default Navbar;