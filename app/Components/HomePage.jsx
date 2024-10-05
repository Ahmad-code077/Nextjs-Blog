import { Button } from '@/components/ui/button';

const CardData = [
  {
    id: 1,
    heading: 'Engaging Content',
    para: 'Discover articles that captivate and inform.',
  },
  {
    id: 2,
    heading: 'Diverse Topics ',
    para: 'Explore a range of subjects from various viewpoints.',
  },
  {
    id: 3,
    heading: 'Join the Community',
    para: 'Connect with fellow readers and share your thoughts.',
  },
];
const HomePage = () => {
  return (
    <>
      <div className='text-center mt-8 '>
        <h1 className=' font-bold text-5xl md:text-6xl xl:text-7xl'>
          Exploring the world of{' '}
          <span className='text-primary dark:text-primary'>
            ideas and stories.
          </span>
        </h1>
        <p className='mt-8 lg:w-2/3 text-center mx-auto'>
          Welcome to our blog, where we dive deep into diverse topics, share
          unique perspectives, and offer valuable insights. Join us on this
          journey of exploration and discovery.
        </p>
        <div className='mt-16 flex flex-col sm:flex-row items-center justify-center sm:gap-x-4 gap-y-4 '>
          <Button
            size='lg'
            className='text-lg rounded-lg text-white transition duration-300 hover:scale-105 w-full sm:w-max '
          >
            Start Reading{' '}
          </Button>

          <Button
            size='lg'
            variant='outline'
            className='text-lg rounded-lg border-2 border-primary transition duration-300 hover:scale-105 w-full sm:w-max '
          >
            Discover More
          </Button>
        </div>
        <div className='py-8 mt-16 border-y border-border dark:border-border sm:grid sm:grid-cols-3 gap-8'>
          {CardData.map((item) => {
            const { id, heading, para } = item;
            return (
              <>
                <div className='text-center' key={id}>
                  <h6 className='text-lg font-semibold  '>{heading}</h6>
                  <p className='mt-2 '>{para} </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
