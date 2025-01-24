// app/api/users/route.ts
import { createUser } from '@/services/auth';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();


        const user = await createUser(email.toLocaleLowerCase(), password, name);

        return NextResponse.json({ user });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Erro interno do servidor.' },
            { status: 500 }
        );
    }
}
