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
    .min(5, 'Description is minimum length is 5 characters')
    .max(500, 'Description must be at most 500 characters'),
  author: z
    .string()
    .min(1, 'Author name is at least one character ')
    .max(50, 'Author name must be at most 50 characters'),
  content: z
    .string()
    .min(30, 'Content must be at least 30 characters')
    .max(2000, 'Content must be at most 2000 characters'),
  tags: z
    .string()
    .min(2, 'Tags should be at least 2 characters')
    .max(200, 'Tags must be at most 200 characters'),
  image: z.instanceof(File).optional(),
});

const CreateBlog = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const sendData = Object.fromEntries(formData);

      blogSchema.parse(sendData);

      const file = formData.get('image');
      if (file && !(file instanceof File)) {
        throw new z.ZodError([
          { path: ['image'], message: 'Invalid image file' },
        ]);
      }

      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to create blog post');
      }

      const newPost = await response.json();
      console.log('New Blog Post Created:', newPost);

      setErrors({});
      e.currentTarget.reset();
    } catch (error) {
      const fieldErrors = {};
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
      } else {
        fieldErrors.general = error.message;
      }
      setErrors(fieldErrors);
      console.error('Error creating blog post:', error);
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

      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2' htmlFor='image'>
          Upload Image
        </label>
        <Input type='file' id='image' name='image' accept='image/*' />
        {errors.image && <p className='text-red-500 text-sm'>{errors.image}</p>}
      </div>

      <Button type='submit' className='w-full'>
        Submit
      </Button>

      {errors.general && (
        <p className='text-red-500 text-sm'>{errors.general}</p>
      )}
    </form>
  );
};

export default CreateBlog;
