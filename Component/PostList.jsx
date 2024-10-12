// components/PostList.js
'use client';
import { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts'); // Make sure this matches your endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='max-w-lg mx-auto my-10'>
      <h1 className='text-2xl mb-6'>Blog Posts</h1>
      {error && <p className='text-red-500'>{error}</p>}
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className='mb-4 p-4 border rounded'>
              <h2 className='text-xl font-bold'>{post.title}</h2>
              <p>{post.desc}</p>
              <p className='text-sm text-gray-500'>By {post.author}</p>
              <p className='text-sm text-gray-400'>
                Created on {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
