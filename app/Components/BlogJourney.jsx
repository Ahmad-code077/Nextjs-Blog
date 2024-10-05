const BlogJourney = () => {
  return (
    <section className='flex flex-col md:flex-row lg:-mx-8 mt-16 gap-10'>
      <div className='w-full lg:w-1/2 lg:px-8'>
        <h6 className='text-sm uppercase font-semibold tracking-widest text-center '>
          Our Blogging Journey
        </h6>
        <h2 className='text-3xl leading-tight font-bold mt-4 text-center md:text-left'>
          Welcome to <span className='text-primary'>Ahmad Blogs</span> –
          Insights and Tutorials for Developers
        </h2>
        <p className='text-lg mt-4 text-center md:text-left'>
          Empowering Developers with Knowledge and Tools
        </p>
        <p className='mt-2 mb-6 md:mb-0 leading-relaxed text-center md:text-left'>
          At Ahmad Blogs, we explore the latest in web development, share coding
          tutorials, and offer insightful articles on best practices. Whether
          youre learning the basics of front-end development or diving into
          full-stack applications, weve got something for everyone.
        </p>
      </div>

      <div className='w-full lg:w-1/2 lg:px-8'>
        <div className='flex'>
          <div>
            <div className='w-8 h-8 bg-primary rounded-full'></div>
          </div>
          <div className='ml-8'>
            <h4 className='text-xl font-bold'>
              All Coding Resources in One Place
            </h4>
            <p className='mt-2 leading-relaxed'>
              Our comprehensive blog covers everything you need – from
              step-by-step tutorials, development tips, and best tools to
              improve you&apos;re workflow, all designed to support developers
              at every stage of their journey.
            </p>
          </div>
        </div>

        <div className='flex mt-8'>
          <div>
            <div className='w-8 h-8 bg-primary rounded-full'></div>
          </div>
          <div className='ml-8'>
            <h4 className='text-xl font-bold'>
              Developer-Centered Learning Experience
            </h4>
            <p className='mt-2 leading-relaxed'>
              At Ahmad Blogs, our content is crafted with developers in mind.
              Whether you&apos;re working on personal projects or professional
              applications, our focus is on practical, real-world solutions to
              help you succeed in your coding journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogJourney;
