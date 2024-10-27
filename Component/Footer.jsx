import Link from 'next/link';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  const resources = [
    {
      name: 'Shadcn',
      url: 'https://ui.shadcn.com/',
    },
    {
      name: 'Tailwind CSS',
      url: 'https://tailwindcss.com/',
    },
    {
      name: 'Next.js',
      url: 'https://nextjs.org/',
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className='inline mr-2' />,
      name: 'GitHub',
      url: 'https://github.com/Ahmad-code077',
    },
    {
      icon: <FaLinkedin className='inline mr-2' />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muhammad-ahmad-5847502b0',
    },
    {
      icon: <FaGlobe className='inline mr-2' />,
      name: 'Portfolio',
      url: 'https://ahmadmamoon.netlify.app/',
    },
  ];

  const legalLinks = [
    {
      name: 'Privacy Policy',
      url: '#',
    },
    {
      name: 'Terms & Conditions',
      url: '#',
    },
  ];

  return (
    <footer className='bg-white dark:bg-gray-900 border-t  border-primary '>
      <div className='max-w-6xl mx-auto px-4 py-6 lg:py-8  '>
        <div className='md:flex justify-evenly'>
          <div className='mb-6 md:mb-0 flex flex-col gap-4 '>
            <Link
              href='/'
              className='self-center text-2xl font-semibold text-start whitespace-nowrap text-primary'
            >
              Ahmad Blogs
            </Link>
            <p className='hidden lg:block max-w-52 text-gray-500 dark:text-gray-400 items-center'>
              Ahmad Blogs is a platform dedicated to sharing insightful
              articles, tutorials, and resources for developers.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Resources
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium '>
                {resources.map((resource, index) => (
                  <li className='mb-4' key={index}>
                    <a
                      href={resource.url}
                      target='_blank'
                      className='hover:underline'
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Follow Me
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                {socialLinks.map((link, index) => (
                  <li className='mb-4' key={index}>
                    <a
                      href={link.url}
                      className='hover:underline'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {link.icon}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Legal
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                {legalLinks.map((link, index) => (
                  <li className='mb-4' key={index}>
                    <a href={link.url} className='hover:underline'>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='flex items-center justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2024 <span className='text-primary'>AhmadBlogs</span> . All Rights
            Reserved.
          </span>
          <div className='flex  sm:justify-center sm:mt-0'>
            <a
              href='https://github.com/Ahmad-code077'
              className='text-gray-500 hover:text-gray-900 transition-all duration-300 dark:hover:text-white ms-5'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='w-4 h-4' />
              <span className='sr-only'>GitHub account</span>
            </a>
            <a
              href='https://www.linkedin.com/in/muhammad-ahmad077'
              className='text-gray-500 transition-all duration-300 hover:text-gray-900 dark:hover:text-white ms-5 text-12'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='w-4 h-4' />
              <span className='sr-only'>LinkedIn profile</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
