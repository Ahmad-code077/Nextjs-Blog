import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import path from 'path';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure the upload directory exists
    cb(null, './public/uploads'); // Specify your upload directory inside public
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Append the file extension
  },
});

// Create multer upload middleware
const upload = multer({ storage });

// Function to handle the incoming form data
const handleUpload = upload.single('image');

export async function GET(req) {
  try {
    const posts = await prisma.blogPosts.findMany();
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
export async function POST(req) {
  return new Promise((resolve, reject) => {
    handleUpload(req, {}, async (err) => {
      if (err) {
        console.error('Upload error:', err);
        return resolve(
          NextResponse.json(
            { error: 'Failed to upload image' },
            { status: 500 }
          )
        );
      }

      console.log('Uploaded file:', req.file); // Log the uploaded file information

      const body = req.body; // Access body fields directly
      const image = req.file ? req.file.path.replace(/^public/, '') : null;

      if (!image) {
        console.error('No image uploaded'); // Log if no image is found
        return resolve(
          NextResponse.json({ error: 'No image uploaded' }, { status: 400 })
        );
      }

      try {
        const newPost = await prisma.blogPosts.create({
          data: {
            title: body.title,
            desc: body.desc,
            author: body.author,
            content: body.content,
            tags: body.tags,
            image, // Add the image path here
          },
        });
        return resolve(NextResponse.json(newPost, { status: 201 }));
      } catch (error) {
        console.error('Failed to create post:', error);
        return resolve(
          NextResponse.json({ error: error.message }, { status: 500 })
        );
      }
    });
  });
}

// Function to handle requests to specific post by ID
export async function handlePost(req) {
  const { id } = req.url.split('/').pop(); // Extract ID from URL

  if (req.method === 'GET') {
    try {
      const post = await prisma.blogPosts.findUnique({
        where: { id },
      });
      if (!post) {
        return new Response(JSON.stringify({ error: 'Post not found' }), {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
      return new Response(JSON.stringify(post), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Failed to fetch post:', error);
      return new Response(JSON.stringify({ error: 'Failed to fetch post' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } else if (req.method === 'PUT') {
    const { title, desc, author, content, tags } = await req.json();

    try {
      const updatedPost = await prisma.blogPosts.update({
        where: { id },
        data: {
          title,
          desc,
          author,
          content,
          tags,
        },
      });
      return new Response(JSON.stringify(updatedPost), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Failed to update post:', error);
      return new Response(JSON.stringify({ error: 'Failed to update post' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.blogPosts.delete({
        where: { id },
      });
      return new Response(null, {
        status: 204,
      });
    } catch (error) {
      console.error('Failed to delete post:', error);
      return new Response(JSON.stringify({ error: 'Failed to delete post' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } else {
    return new Response(`Method ${req.method} Not Allowed`, {
      status: 405,
      headers: {
        Allow: ['GET', 'PUT', 'DELETE'],
        'Content-Type': 'application/json',
      },
    });
  }
}
