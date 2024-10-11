import { blogs } from '@/Component/BlogCard';
import Image from 'next/image';

function SingleBlog({ params }) {
  const { id } = params;

  const singleItem = blogs.find((item) => item.id === id);
  const { title, image, desc, author, content, tag } = singleItem;

  return (
    // <h1>heelo</h1>
    <section className='mx-auto max-w-3xl px-4 py-6'>
      <div className='flex items-center justify-center'>
        <div className='relative -z-10 h-[500px] w-[100%]'>
          {image && (
            <Image
              src={image}
              alt={title || 'image'}
              priority
              fill
              style={{ objectFit: 'cover' }}
              className='rounded-lg'
            />
          )}
        </div>
      </div>
      <h1 className='mt-4 text-3xl lg:text-5xl my-8 font-bold text-center '>
        {title}{' '}
      </h1>
      <p className='mt-2 text-lg'>{desc}</p>
      <p className='mt-1  text-primary'>Writer : {author}</p>
      <p className='mt-1 text-lg'>{content}</p>
      <div className='mt-6 flex flex-wrap items-center justify-center'>
        {tag?.map((tag) => (
          <span
            className='mb-2 mr-2 rounded bg-blue-200 px-2.5 py-0.5  font-medium text-blue-800 text-xl'
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}

export default SingleBlog;
