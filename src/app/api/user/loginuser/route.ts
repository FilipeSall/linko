import { signIn } from "next-auth/react";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (!result || !result.ok) {
            return new Response(
                JSON.stringify({ error: "Credenciais inválidas." }),
                { status: 401, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(
            JSON.stringify({ message: "Login bem-sucedido!" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        if (error instanceof Error) {
            return new Response(
                JSON.stringify({ error: "Erro interno no servidor." }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        }
    }
}
