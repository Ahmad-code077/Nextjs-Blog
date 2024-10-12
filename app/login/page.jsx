'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
// import { toast } from 'react-toastify'; // Optional: for notifications

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState(''); // Add a name state for signup

  const handleLogin = async () => {
    if (!email || !password) {
      console.error('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      console.log('Login successful:', data);
      // Optionally handle success (like redirecting the user)
    } catch (error) {
      console.error('Error logging in:', error);
      console.error(error.message);
    }
  };

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword || !name) {
      console.error('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
      }

      console.log('Signup successful:', data);
      // Optionally handle success (like redirecting the user)
    } catch (error) {
      console.error('Error signing up:', error);
      console.error(error.message);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-6'>
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        {!isLogin && (
          <Input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='mb-4'
          />
        )}

        <Input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='mb-4'
        />

        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='mb-4'
        />

        {!isLogin && (
          <Input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='mb-4'
          />
        )}

        <Button
          onClick={isLogin ? handleLogin : handleSignup}
          className='w-full mb-4'
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className='text-sm text-blue-600 hover:underline'
        >
          {isLogin ? 'Create an account' : 'Already have an account?'}
        </button>
      </div>
    </div>
  );
};

export default Login;
