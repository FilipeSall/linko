import NextAuth from "next-auth";
import Credential from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { findUserByEmail } from "./services/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: '/signin'
    },
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

                    const user = await findUserByEmail(email);
                    if (!user || !user.password) throw new Error(JSON.stringify({ message: 'Credenciais inválidas' }));

                    const isPasswordValid = await bcrypt.compare(password, user.password);
                    if (!isPasswordValid) throw new Error(JSON.stringify({ message: 'Credenciais inválidas' }));

                    return ({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                    });
                } catch (error) {
                    const err = error as Error;
                    throw new Error(err.message);
                }
            }
        })
    ],
})