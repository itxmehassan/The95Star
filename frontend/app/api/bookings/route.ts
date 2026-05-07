import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    return NextResponse.json({ 
      ...body, 
      _id: "mock-id-" + Date.now(), 
      status: 'pending' 
    }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
