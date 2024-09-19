const Home = () => {
  return (
    <div className='lg:w-2/3 text-center mx-auto'>
      <h1 className=' font-bold text-5xl md:text-6xl xl:text-7xl'>
        Exploring the world of{' '}
        <span className='text-primary dark:text-primary'>
          ideas and stories.
        </span>
      </h1>
      <p className='mt-8'>
        Welcome to our blog, where we dive deep into diverse topics, share
        unique perspectives, and offer valuable insights. Join us on this
        journey of exploration and discovery.
      </p>
      <div className='mt-16 flex flex-col sm:flex-row items-center justify-center sm:gap-x-4 gap-y-4 '>
        <a
          href='#'
          className=' flex h-11 w-full items-center justify-center px-6 rounded-full bg-primary text-foreground font-semibold text-base transition duration-300 hover:scale-105 active:scale-95 sm:w-max'
        >
          Start Reading
        </a>
        <a
          href='#'
          className=' flex h-11 w-full items-center justify-center px-6 rounded-full bg-primary text-foreground font-semibold text-base transition duration-300 hover:scale-105 active:scale-95 sm:w-max'
        >
          Discover More
        </a>
      </div>
      <div className='py-8 mt-16 border-y border-border dark:border-border sm:grid sm:grid-cols-3 gap-8'>
        <div className='text-center'>
          <h6 className='text-lg font-semibold text-muted dark:text-muted'>
            Engaging Content
          </h6>
          <p className='mt-2 text-muted dark:text-muted'>
            Discover articles that captivate and inform.
          </p>
        </div>
        <div className='text-center'>
          <h6 className='text-lg font-semibold text-muted dark:text-muted'>
            Diverse Topics
          </h6>
          <p className='mt-2 text-muted dark:text-muted'>
            Explore a range of subjects from various viewpoints.
          </p>
        </div>
        <div className='text-center'>
          <h6 className='text-lg font-semibold text-muted dark:text-muted'>
            Join the Community
          </h6>
          <p className='mt-2 text-muted dark:text-muted'>
            Connect with fellow readers and share your thoughts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
