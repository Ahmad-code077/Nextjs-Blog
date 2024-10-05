import Image from 'next/image';
import hamid from '../assets/hamid.jpeg';
import sufiyan from '../assets/sufiyan.jpeg';
import tulaib from '../assets/tulaib.jpeg';
import waleedImg from '../assets/waleedImg.jpeg';

const testimonialsData = [
  {
    id: 1,
    text: 'These templates are fantastic! They combine modern design with practical features, making my projects stand out effortlessly.',
    name: 'Hamid',
    position: 'CEO, Tech Innovations',
    image: hamid,
  },
  {
    id: 2,
    text: 'This service is a lifesaver! It allows me to quickly set up projects and focus on creating impactful applications.',
    name: 'Tulaib',
    position: 'Lead Developer, Creative Solutions',
    image: tulaib,
  },
  {
    id: 3,
    text: 'Incredibly helpful! This platform has streamlined our project workflow, enabling us to deliver high-quality results consistently.',
    name: 'Sufyan',
    position: 'Project Manager, NextGen Apps',
    image: sufiyan,
  },
  {
    id: 4,
    text: 'An all-in-one solution! The ease of use and versatility of this system make it my first choice for any project.',
    name: 'Waleed',
    position: 'Founder, StartSmart Agency',
    image: waleedImg,
  },
];

const Testimonials = () => {
  return (
    <section className='my-8'>
      <div className='flex-col items-center'>
        <div className='flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center'>
          <p className='my-5 text-sm uppercase font-semibold tracking-widest text-center text-primary'>
            FeedBack from my friends
          </p>
          <h2 className='text-4xl font-extrabold leading-10 tracking-tight  sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl'>
            Testimonials
          </h2>
          <p className='my-6 text-xl font-medium text-primary'>FeedBack</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {testimonialsData.map(({ id, text, name, position, image }) => (
            <blockquote
              className='flex flex-col-reverse items-center justify-between w-full p-6  transition-all duration-200  rounded-lg md:flex-row ease-in-out border-primary border text-center lg:text-left'
              key={id}
            >
              <div className='flex flex-col gap-6'>
                <p className='mt-2 text-base text-gray-600 dark:text-gray-300 '>
                  {text}
                </p>
                <h3 className='mt-3 text-base font-medium leading-5 truncate'>
                  <span className='text-primary '>{name}</span>
                  <span className='mt-1 text-sm leading-5  truncate'>
                    - {position}
                  </span>
                </h3>
              </div>
              <Image
                className='flex-shrink-0 border-primary border-2 object-cover w-40 h-40 mb-5  rounded-full md:mb-0 hover:scale-105 transition-all duration-200'
                src={image}
                alt={name}
                priority
                width={96}
                height={96}
              />
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
