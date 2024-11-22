import prisma from '@/lib/db';

export async function findUserByEmail(email: string) {
    return prisma.user.findFirst({ where: { email } });
}

export async function createUser(email: string, password: string, name: string) {
    return prisma.user.create({
        data: {
            email,
            password,
            name
        }
    });
}