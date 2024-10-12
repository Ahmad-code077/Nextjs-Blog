// app/api/auth/login/route.js

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request) {
  const { email, password } = await request.json();
  // Find user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return new Response(
      JSON.stringify({ error: 'Invalid email or password' }),
      { status: 401 }
    );
  }

  // Check if password is valid
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return new Response(
      JSON.stringify({ error: 'Invalid email or password' }),
      { status: 401 }
    );
  }

  // Optionally, you can implement a session or token here for authentication
  return new Response(JSON.stringify({ message: 'Login successful', user }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
