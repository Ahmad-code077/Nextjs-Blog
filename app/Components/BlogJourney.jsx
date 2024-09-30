const BlogJourney = () => {
  return (
    <section class='flex flex-col md:flex-row lg:-mx-8 mt-16'>
      <div class='w-full lg:w-1/2 lg:px-8'>
        <h6 class='text-sm uppercase font-semibold tracking-widest'>
          Our Blogging Journey
        </h6>
        <h2 class='text-3xl leading-tight font-bold mt-4'>
          Welcome to Ahmad Blogs – Insights and Tutorials for Developers
        </h2>
        <p class='text-lg mt-4'>
          Empowering Developers with Knowledge and Tools
        </p>
        <p class='mt-2 leading-relaxed'>
          At Ahmad Blogs, we explore the latest in web development, share coding
          tutorials, and offer insightful articles on best practices. Whether
          you're learning the basics of front-end development or diving into
          full-stack applications, we've got something for everyone.
        </p>
      </div>

      <div class='w-full lg:w-1/2 lg:px-8'>
        <div class='flex'>
          <div>
            <div class='w-8 h-8 bg-primary rounded-full'></div>
          </div>
          <div class='ml-8'>
            <h4 class='text-xl font-bold'>All Coding Resources in One Place</h4>
            <p class='mt-2 leading-relaxed'>
              Our comprehensive blog covers everything you need – from
              step-by-step tutorials, development tips, and best tools to
              improve your workflow, all designed to support developers at every
              stage of their journey.
            </p>
          </div>
        </div>

        <div class='flex mt-8'>
          <div>
            <div class='w-8 h-8 bg-primary rounded-full'></div>
          </div>
          <div class='ml-8'>
            <h4 class='text-xl font-bold'>
              Developer-Centered Learning Experience
            </h4>
            <p class='mt-2 leading-relaxed'>
              At Ahmad Blogs, our content is crafted with developers in mind.
              Whether you're working on personal projects or professional
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
