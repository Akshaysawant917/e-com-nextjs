'use server';

import dbConnect from '@/lib/mongoose';
import User from '../../modals/User.js';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginUser({ email, password }) {
  await dbConnect();

  const user = await User.findOne({ email: email.trim() }).select('+password userId');

  if (!user || !(await bcrypt.compare(password.trim(), user.password))) {
    return { message: 'Invalid credentials' };
  }

  // ✅ Use mutable cookies
  const cookieStore = await cookies(); // returns a *mutable* instance in Server Action
  cookieStore.set('userId', String(user.userId), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  redirect('/');
}
