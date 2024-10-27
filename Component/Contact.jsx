'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const sendData = Object.fromEntries(data);
    console.log(sendData);
  };

  return (
    <div className='max-w-2xl mx-auto p-6 space-y-6  rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold text-center'>Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className='space-y-4 bg-slate-900 rounded-lg p-9'
      >
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-300'
          >
            Name
          </label>
          <Input
            id='name'
            name='name'
            type='text'
            placeholder='Your Name'
            className='mt-1 block w-full border-gray-300 text-gray-300 rounded-md shadow-sm'
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-300'
          >
            Email
          </label>
          <Input
            id='email'
            name='email'
            required
            type='email'
            placeholder='you@example.com'
            className='mt-1 block w-full border-gray-300 text-gray-300 rounded-md shadow-sm'
          />
        </div>
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-300'
          >
            Message
          </label>
          <Textarea
            id='message'
            name='message'
            placeholder='Your message...'
            className='mt-1 block w-full border-gray-300 text-gray-300   rounded-md shadow-sm'
            rows={8}
            aria-describedby='message-description'
          />
          <p id='message-description' className='sr-only'>
            Please enter your message in the text area.
          </p>
        </div>
        <Button
          type='submit'
          className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md'
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
