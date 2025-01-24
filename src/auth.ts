import NextAuth from "next-auth";
import gitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { UserJWTCallback } from "./types/auth";
import Google from 'next-auth/providers/google';
import Dribbble from 'next-auth/providers/dribbble';

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: '/signin'
    },
    adapter: PrismaAdapter(prisma),
    session: { strategy: 'jwt' },
    providers: [
        gitHubProvider({
            allowDangerousEmailAccountLinking: true,
        }),
        Google({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
            allowDangerousEmailAccountLinking:true
        }),
        Dribbble({
            allowDangerousEmailAccountLinking:true
        }),
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