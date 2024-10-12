import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
  const { title, desc, author, content, tags } = await req.json();

  try {
    const newPost = await prisma.blogPosts.create({
      data: {
        title,
        desc,
        author,
        content,
        tags,
      },
    });
    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Failed to create post:', error);
    return new Response(JSON.stringify({ error: 'Failed to create post' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// Add a function to handle requests to specific post by ID
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
