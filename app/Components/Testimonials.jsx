import Image from 'next/image';
import hamid from '../assets/hamid.jpeg';
import sufiyan from '../assets/sufiyan.jpeg';
import tulaib from '../assets/tulaib.jpeg';
import waleedImg from '../assets/waleedImg.jpeg';

const testimonialsData = [
  {
    id: 1,
    text: "I'm loving these templates! Very nice features and layouts.",
    name: 'Hamid',
    position: 'CEO SomeCompany',
    image: hamid,
  },
  {
    id: 2,
    text: 'Really digging this service. Now I can quickly bootstrap any project.',
    name: 'Tulaib',
    position: 'CEO SomeCompany',
    image: tulaib,
  },
  {
    id: 3,
    text: 'Extremely helpful in every single project we have released.',
    name: 'Sufyan',
    position: 'CEO SomeCompany',
    image: sufiyan,
  },
  {
    id: 4,
    text: 'Finally a quick and easy system I can use for any type of project.',
    name: 'Waleed',
    position: 'CEO SomeCompany',
    image: waleedImg,
  },
];

const Testimonials = () => {
  return (
    <div>
      <div className='flex-col items-center'>
        <div className='flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center'>
          <p className='my-5 text-base font-medium tracking-tight  uppercase'>
            FeedBack from my friends
          </p>
          <h2 className='text-4xl font-extrabold leading-10 tracking-tight  sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl'>
            Testimonials
          </h2>
          <p className='my-6 text-xl font-medium text-foreground'>FeedBack</p>
        </div>
        <div className='grid'>
          {testimonialsData.map(({ id, text, name, position, image }) => (
            <div key={id} className='w-full xl:w-1/2 xl:pr-8'>
              <blockquote className='flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease'>
                <div className='flex flex-col pr-8'>
                  <p className='mt-2 text-base text-gray-600'>{text}</p>
                  <h3 className='pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate'>
                    {name}{' '}
                    <span className='mt-1 text-sm leading-5 text-gray-500 truncate'>
                      - {position}
                    </span>
                  </h3>
                </div>
                <Image
                  className='flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0'
                  src={image}
                  alt={name}
                  width={96}
                  height={96}
                />
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
