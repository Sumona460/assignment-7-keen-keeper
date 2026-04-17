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
    <span href='/' className=" text-3xl font-bold ml-5  ">Keen<span className=' text-green-600 font-light'>Keeper</span></span>
  </div>


  <div className="flex">
    <section className="flex gap-3 mr-4 text-gray-500">

    <div className="dropdown lg:hidden md:hidden mr-20">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow ">
        <li><Link href="/" className={pathName === '/' ? 'btn btn-success text-white': 'btn btn-ghost'}> <House className='w-6'></House>Home</Link></li>
        <li><Link className={pathName === '/timeline' ? 'btn btn-success text-white': 'btn btn-ghost'} href="/timeline"  ><Clock1 className='w-5'></Clock1>Timeline</Link></li>

        <li> <Link href="/stats" className={pathName === '/stats' ? 'btn btn-success text-white': 'btn btn-ghost'} ><ChartLine className='w-5' />Stats</Link></li>
      </ul>
    </div>

    <ul className='hidden md:flex lg:flex gap-3 mr-4 text-gray-500'>
      <li><Link href="/" className={pathName === '/' ? 'btn btn-success text-white': 'btn btn-ghost'}> <House className='w-6'></House>Home</Link></li>
        <li><Link className={pathName === '/timeline' ? 'btn btn-success text-white': 'btn btn-ghost'} href="/timeline"  ><Clock1 className='w-5'></Clock1>Timeline</Link></li>

        <li> <Link href="/stats" className={pathName === '/stats' ? 'btn btn-success text-white': 'btn btn-ghost'} ><ChartLine className='w-5' />Stats</Link></li>
    </ul>
  
    </section>
  </div>
</div>
    );
};

export default Navbar;