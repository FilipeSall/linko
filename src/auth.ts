import NextAuth from "next-auth";
import Credential from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { findUserByEmail } from "./services/auth";
import gitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { UserJWTCallback } from "./types/auth";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: '/signin'
    },
    adapter: PrismaAdapter(prisma),
    session: { strategy: 'jwt' },
    providers: [
        Credential({
            credentials: {
                email: {
                    label: 'Digite seu email cadastrado',
                    type: 'email',
                },
                password: {
                    label: 'Digite sua senha',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                try {
                    const email = credentials.email as string;
                    const password = credentials.password as string;
                    const formmatedEmail = email.toLocaleLowerCase()

                    const user = await findUserByEmail(formmatedEmail);
                    if (!user || !user.password) throw new Error(JSON.stringify({ message: 'Credenciais inválidas' }));

                    const isPasswordValid = await bcrypt.compare(password, user.password);
                    if (!isPasswordValid) throw new Error(JSON.stringify({ message: 'Credenciais inválidas' }));

                    return ({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    });
                } catch (error) {
                    const err = error as Error;
                    throw new Error(err.message);
                }
            }
        }),
        gitHubProvider({
            allowDangerousEmailAccountLinking: true,
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            const userValid = user as UserJWTCallback;
            if (user) {
                token.id = userValid.id as string;
                token.role = userValid.role as string;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string;
                session.user.role = token.role as string;
            }
            return session;
        }
    }
})