import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Admin mock logic
    if (email === 'admin@95star.com' && password === 'admin') {
      return NextResponse.json({
        message: 'Login successful',
        token: 'mock-jwt-token-admin-12345',
        user: {
          id: '1',
          name: 'Admin User',
          email: 'admin@95star.com',
          role: 'admin'
        }
      });
    }

    // Normal user mock logic
    return NextResponse.json({
      message: 'Login successful',
      token: 'mock-jwt-token-user-67890',
      user: {
        id: '2',
        name: 'Standard User',
        email: email,
        role: 'user'
      }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
