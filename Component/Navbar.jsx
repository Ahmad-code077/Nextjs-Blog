import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { ModeToggle } from './ThemeBtn';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const data = [
  { id: 4, link: '/', title: 'Home' },
  {
    id: 1,
    link: '/about',
    title: 'About',
  },
  {
    id: 2,
    link: '/blog',
    title: 'Blog',
  },
  { id: 3, link: '/contact', title: 'Contact' },
  { id: 5, link: '/createBlog', title: 'Create Blog' },
];
const Navbar = () => {
  return (
    <nav className='bg-opacity-30 backdrop-blur-sm  shadow-lg sticky top-0 left-0 w-full '>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between h-16 items-center '>
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/' className='text-2xl font-bold'>
              AHMADBLOGS
            </Link>
          </div>
          <div className='hidden md:flex items-center gap-x-8 font-bold'>
            {data.map((item) => {
              const { id, link, title } = item;
              return (
                <Link
                  href={link}
                  key={id}
                  className='hover:text-primary transition duration-300'
                >
                  {title}
                </Link>
              );
            })}
          </div>
          <div className='flex items-center gap-4'>
            <Sheet>
              <SheetTrigger>
                <FaBars className='md:hidden text-2xl' />
              </SheetTrigger>
              <SheetContent className='dark:bg-black bg-white p-4'>
                <SheetHeader>
                  <SheetTitle>
                    <Link className='flex' href={'/'}>
                      Logo
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className=' flex flex-col mt-10  font-bold'>
                  {data.map((item) => {
                    const { id, link, title } = item;
                    return (
                      <Link
                        href={link}
                        key={id}
                        className='hover:text-primary  border-b-2 py-4 transition duration-300'
                      >
                        {title}
                      </Link>
                    );
                  })}
                </div>
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
