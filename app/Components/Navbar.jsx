import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { ModeToggle } from './ThemeBtn';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
  return (
    <nav className=' shadow-lg sticky top-0 left-0 w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/' className='text-2xl font-bold'>
              Logo
            </Link>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <Link href='/about' className=' hover:text-blue-500'>
              About
            </Link>
            <Link href='/blog' className=' hover:text-blue-500'>
              Blog
            </Link>
            <Link href='/contact' className=' hover:text-blue-500'>
              Contact
            </Link>
            <Link href='/login' className=' hover:text-blue-500'>
              Login/Signup
            </Link>
          </div>
          <div className='flex items-center gap-4'>
            <Sheet>
              <SheetTrigger>
                <FaBars className='md:hidden text-2xl' />
              </SheetTrigger>
              <SheetContent className='dark:bg-black bg-white'>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
