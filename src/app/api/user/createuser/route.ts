// app/api/users/route.ts
import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();


        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            },
        });

        return NextResponse.json({ user });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Erro interno do servidor.' },
            { status: 500 }
        );
    }
}
