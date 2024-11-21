import prisma from '@/lib/db'; 
import { NextResponse } from 'next/server';

export async function POST(req:Request) {
    try{
        const { name, email, password } = await req.json();
        const user = await prisma.user.create({ data: { name, email, password } });

        return NextResponse.json({ user })
    }catch(error){
        const err = error as Error;
        return NextResponse.json({error: err.message}, {status:500})
    }
    
}