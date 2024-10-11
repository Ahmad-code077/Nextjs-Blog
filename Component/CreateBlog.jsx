'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { z } from 'zod';

// Define Zod schema for validation
const blogSchema = z.object({
  title: z
    .string()
    .min(2, 'Provide title greater than 2 characters')
    .max(100, 'Title must be at most 100 characters'),
  desc: z
    .string()
    .min(5, 'Description is  minimum length is 5 characters')
    .max(500, 'Description must be at most 500 characters'),
  author: z
    .string()
    .min(1, 'Author name is At least one character ')
    .max(50, 'Author name must be at most 50 characters'),
  content: z
    .string()
    .min(30, 'Content must be at least 30 characters')
    .max(2000, 'Content must be at most 2000 characters'),
  tags: z
    .string()
    .min(2, 'Tags should be at least 2 characters')
    .max(200, 'Tags must be at most 200 characters'),
});

const CreateBlog = () => {
  // const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({}); // For storing validation errors

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setImageFile(file); // Store the selected file in the state
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log('submit');

    try {
      const sendData = Object.fromEntries(formData);
      blogSchema.parse(sendData);

      // if (!imageFile) {
      //   throw new Error('Image file is required ');
      // }

      // Append the image file to formData
      // formData.append('image', imageFile);

      console.log('Form Data:', sendData);

      console.log('Form submitted successfully');
      setErrors({});
      e.currentTarget.reset();
      // setImageFile(null);
    } catch (error) {
      const fieldErrors = {};
      if (error instanceof z.ZodError) {
        console.log(error);
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
      }
      setErrors(fieldErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-lg mx-auto my-10'>
      <h1 className='text-2xl mb-6'>Add New Blog Post</h1>

      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2' htmlFor='title'>
          Title
        </label>
        <Input id='title' name='title' />
        {errors.title && <p className='text-red-500 text-sm'>{errors.title}</p>}
      </div>

      {/* <div className='mb-4'>
        <label className='block text-sm font-bold mb-2' htmlFor='image'>
          Upload Image
        </label>
        <Input
          id='image'
          name='image'
          type='file'
          accept='image/*'
          onChange={handleFileChange}
        />
        {errors.image && <p className='text-red-500 text-sm'>{errors.image}</p>}
      </div> */}

      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2' htmlFor='desc'>
          Description
        </label>
        <Textarea id='desc' name='desc' />
        {errors.desc && <p className='text-red-500 text-sm'>{errors.desc}</p>}
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2' htmlFor='author'>
          Author
        </label>
        <Input id='author' name='author' />
        {errors.author && (
          <p className='text-red-500 text-sm'>{errors.author}</p>
        )}
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2' htmlFor='content'>
          Content
        </label>
        <Textarea id='content' name='content' />
        {errors.content && (
          <p className='text-red-500 text-sm'>{errors.content}</p>
        )}
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2' htmlFor='tags'>
          Tags (comma separated)
        </label>
        <Input id='tags' name='tags' />
        {errors.tags && <p className='text-red-500 text-sm'>{errors.tags}</p>}
      </div>

      <Button type='submit' className='w-full'>
        Submit
      </Button>
    </form>
  );
};

export default CreateBlog;
