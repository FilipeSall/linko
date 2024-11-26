import { User, DefaultSession } from 'next-auth'

export interface ObjectKeysStringErrors {
    [key: string]: string | undefined;
}

export type StateError = { [key: string]: string };

export type StateSuccess = { success: boolean } | void;

export interface UserJWTCallback extends User {
    role: string
}

// Extende a interface do `Session` para incluir `id` e `role`
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            role: string;
        } & DefaultSession["user"]; // Mantém as outras propriedades da user do NextAuth
    }
}