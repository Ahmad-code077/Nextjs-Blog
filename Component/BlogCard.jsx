import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link'; // Correct import statement
import Image from 'next/image'; // Correct import statement
import javaScript from '../app/assets/javascript.png';
import typescript from '../app/assets/typescript.png';
import nextjs from '../app/assets/nextjs.jpeg';
import react from '../app/assets/react.png';
import tailwind from '../app/assets/Tailwind.png';
// import { Section } from 'lucide-react';

export const blogs = [
  {
    id: '1',
    title: 'Mastering JavaScript: Tips and Tricks for Beginners',
    image: javaScript,
    desc: 'Dive into the world of JavaScript with essential tips and tricks to enhance your coding skills and make your learning journey smoother.',
    author: 'Alice Green',
    content:
      'JavaScript is a versatile programming language that powers most of the web. For beginners, mastering the fundamentals is crucial. Start with understanding variables, data types, and functions before diving into more complex topics like asynchronous programming. One useful tip is to practice writing clean, readable code by following JavaScript best practices and using built-in debugging tools to catch errors early.\n\nAnother key to mastering JavaScript is to continuously challenge yourself with small projects. As you progress, experiment with ES6+ features such as arrow functions, template literals, and destructuring assignments to write more concise and efficient code.',
    tag: ['JavaScript', 'Programming', 'Web Development', 'Coding Tips'],
  },
  {
    id: '2',
    title: 'Getting Started with React: A Comprehensive Guide',
    image: react,
    desc: 'Explore the fundamentals of React, from components to state management, and learn how to build dynamic user interfaces efficiently.',
    author: 'Bob White',
    content:
      'React has become one of the most popular JavaScript libraries for building interactive user interfaces. It revolves around components, reusable blocks of code that handle both structure and behavior. Learning React starts with understanding JSX, a syntax extension that allows you to write HTML within JavaScript. Once comfortable, dive into hooks like `useState` and `useEffect` to manage state and side effects in your applications.\n\nReact’s virtual DOM and component-based architecture provide a highly efficient way to develop dynamic UIs. As you progress, mastering state management techniques like Context API or integrating third-party libraries such as Redux will elevate your React skills.',
    tag: [
      'React',
      'JavaScript',
      'Web Development',
      'UI Design',
      'State Management',
    ],
  },
  {
    id: '3',
    title: 'Building High-Performance Applications with Next.js',
    image: nextjs,
    desc: 'Discover how to create fast and user-friendly web applications using Next.js, including server-side rendering and static site generation.',
    author: 'Cathy Blue',
    content:
      'Next.js is a powerful framework built on top of React, providing developers with out-of-the-box tools for building fast, scalable web applications. One of its key features is server-side rendering (SSR), which enhances page load performance and SEO by generating HTML on the server instead of the client. Another feature, static site generation (SSG), allows you to pre-render pages at build time, further optimizing performance.\n\nIn addition to performance benefits, Next.js simplifies the development process with features like file-based routing, API routes, and built-in CSS and image optimization. This makes it a go-to choice for developers aiming to build high-performance web apps with minimal configuration.',
    tag: ['Next.js', 'React', 'Performance', 'SSR', 'SSG'],
  },
  {
    id: '4',
    title: 'Styling with Tailwind CSS: A Modern Approach to Design',
    image: tailwind,
    desc: 'Learn how to leverage Tailwind CSS to create beautiful, responsive designs without the hassle of custom styles.',
    author: 'David Black',
    content:
      'Tailwind CSS is a utility-first CSS framework that allows developers to style applications by composing utility classes directly in HTML. Instead of writing custom CSS rules, you apply pre-defined classes to your elements, drastically reducing the need for manually managing CSS files. This approach improves design consistency and speeds up development by eliminating the need to switch between HTML and CSS files.\n\nWith Tailwind’s responsive design utilities and customization options, you can easily create mobile-friendly, aesthetically pleasing designs. Its popularity has grown among developers who appreciate the balance between speed and flexibility in their design workflows.',
    tag: [
      'CSS',
      'Tailwind',
      'Web Design',
      'Responsive Design',
      'Utility-First',
    ],
  },
  {
    id: '5',
    title: 'Getting Started with TypeScript: The Basics',
    image: typescript,
    desc: 'Understand the basics of TypeScript, its benefits over JavaScript, and how to integrate it into your projects for better type safety and maintainability.',
    author: 'Emma Thompson',
    content:
      'TypeScript is a statically typed superset of JavaScript that introduces optional types, allowing developers to catch errors during development rather than runtime. One of the primary benefits of TypeScript is type safety, which helps avoid common bugs related to type coercion in JavaScript. Learning TypeScript involves understanding its type system, including primitives, arrays, objects, and more complex types such as unions and generics.\n\nIntegrating TypeScript into a project is straightforward, especially with existing JavaScript codebases. By gradually adding TypeScript annotations and using tools like `tsc`, the TypeScript compiler, developers can enhance the maintainability and scalability of their code.',
    tag: [
      'TypeScript',
      'JavaScript',
      'Static Typing',
      'Web Development',
      'Type Safety',
    ],
  },
];

const BlogList = () => {
  return (
    <>
      <h1 className='text-5xl text-center text-primary my-6'>Blogs.</h1>
      <main className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 my-8'>
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className='flex h-full flex-col shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-primary-foreground  '
          >
            <CardHeader className='flex-grow'>
              <div className='h-40 w-full'>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={200}
                  priority
                  className='h-full w-full rounded-t-lg object-cover'
                />
              </div>
              <CardTitle className='mt-4 text-2xl'>{blog.title}</CardTitle>
            </CardHeader>
            <CardContent className='flex-grow dark:text-gray-300 text-gray-700'>
              <p>{blog.desc}</p>
            </CardContent>
            <CardFooter className='flex items-center justify-between'>
              <span className='text-sm dark:text-gray-300 text-gray-700'>
                By <span className='text-primary'>{blog.author}</span>
              </span>
              <Link href={`/blog/${blog.id}`}>
                <Button variant='outline'>Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </main>
    </>
  );
};

export default BlogList;
