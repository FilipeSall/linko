import { findUserByEmail } from '@/services/auth';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        // Parse do corpo da requisição (espera-se um JSON com o email)
        const { email } = await req.json();

        // Verificar se o e-mail foi fornecido
        if (!email) {
            return NextResponse.json({ message: 'Email is required' }, { status: 400 });
        }

        // Buscar o usuário no banco de dados pelo email
        const user = await findUserByEmail(email);

        // Retornar o usuário encontrado
        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        // Em caso de erro, retorna um erro genérico
        const err = error as Error;
        return NextResponse.json({ message: 'An error occurred', error: err.message }, { status: 500 });
    }
}
