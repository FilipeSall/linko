import prisma from "@/lib/db";
import { CreateUser } from "@/types/auth";

//criar usuario
export async function createUser({ confirmPassword, email, name, password, nicheId}: CreateUser) {

    if(!email || !name || !password || !nicheId) throw new Error('Campos inválidos');
    if (password !== confirmPassword) throw new Error('Senhas não conferem');

    try {
        await prisma.users.create({
            data: {
                name:name,
                email:email,
                password:password,
                nicheId: Number(nicheId)
            }
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

