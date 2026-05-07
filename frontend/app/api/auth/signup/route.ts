import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Name, email, and password are required' }, { status: 400 });
    }

    return NextResponse.json({
      message: 'User registered successfully',
      token: 'mock-jwt-token-user-67890',
      user: {
        id: 'new-user-id-' + Date.now(),
        name,
        email,
        role: 'user'
      }
    }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
