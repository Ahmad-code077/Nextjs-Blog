import React from 'react';
import { Button } from '@/components/ui/button'; // Ensure the button component from ShadCN is correctly imported
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 my-8 rounded-md'>
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <h1 className='text-4xl font-bold text-center text-gray-900 dark:text-white'>
          About <span className='text-primary'>Ahmad Blogs</span>
        </h1>
        <p className='mt-4 text-lg text-gray-700 dark:text-gray-300 text-center'>
          Ahmad Blogs is a platform dedicated to sharing insightful articles,
          tutorials, and resources for developers. Here, you'll find a wealth of
          knowledge to enhance your coding skills and stay updated with the
          latest trends in technology.
        </p>
        <p className='mt-4 text-lg text-gray-700 dark:text-gray-300 text-center'>
          Our mission is to create a community where developers can learn,
          share, and grow together. From beginner-friendly guides to advanced
          topics, we strive to cater to all levels of expertise. You can explore
          various subjects, including web development, programming languages,
          frameworks, and best practices.
        </p>
        <p className='mt-4 text-lg text-gray-700 dark:text-gray-300 text-center'>
          We believe in the power of open-source knowledge and the importance of
          collaboration. Whether you’re looking to refine your skills or find
          new projects to contribute to, Ahmad Blogs is here to support you on
          your journey. Join us as we explore the ever-evolving world of
          technology!
        </p>
        <div className='mt-8 flex flex-col items-center'>
          <h2 className='text-2xl font-semibold text-gray-900 dark:text-white '>
            Connect with Me
          </h2>
          <div className='flex mt-4 gap-4 items-center justify-center flex-wrap'>
            <Button variant='outline' asChild className='bg-primary '>
              <a
                href='https://github.com/Ahmad-code077'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-white  hover:text-primary transition-colors duration-300 '
              >
                <FaGithub className='mr-2' />
                GitHub
              </a>
            </Button>
            <Button variant='outline' asChild className='bg-primary'>
              <a
                href='https://www.linkedin.com/in/muhammad-ahmad-5847502b0'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-white hover:text-primary transition-colors duration-300'
              >
                <FaLinkedin className='mr-2' />
                LinkedIn
              </a>
            </Button>
            <Button variant='outline' asChild className='bg-primary'>
              <a
                href='https://ahmadmamoon.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-white  hover:text-primary transition-colors duration-300'
              >
                <FaGlobe className='mr-2' />
                Portfolio
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
