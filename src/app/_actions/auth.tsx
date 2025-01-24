'user serve';
import { signOut } from "@/auth";
import { StateError, StateSuccess } from "@/types/auth";
import bcryptjs from 'bcryptjs';
import { signIn } from "next-auth/react";

//Criar novo usuario com Credenciais
export async function createUserAction(state: unknown, formData: FormData): Promise<StateError | StateSuccess> {
    //pegando valores de campos
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    const errors: { [key: string]: string } = {}
    //validando campos
    if (!name || !email || !password || !confirmPassword) {
        errors.generic = 'Os campos não podem ficar vazios.';
    }
    if (name.length <= 3) {
        errors.name = 'Nome muito curto.';
    }
    if (email.indexOf('@') === -1) {
        errors.email = 'E-mail inválido.';
    }
    if (password.length < 8) {
        errors.password = 'Senha muito curta';
    }
    if (password !== confirmPassword) {
        errors.generic = 'As senhas não coincidem';
    }
    // Verifica se existem erros 
    if (Object.keys(errors).length > 0) {
        return errors;
    }

    // Chama a API para verificar se o usuário já existe (passando o e-mail)
    const response = await fetch('/api/user/finduser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });

    const data = await response.json();

    // Verifica se a resposta da API indica que o usuário já existe
    if (data.user) {
        errors.generic = 'Email já cadastrado.';
        return errors;
    }

    // Gerando hash da senha
    const hashedPassword = await bcryptjs.hash(password, 10);
    // Envia os dados para a API que cria o usuário
    const createUserResponse = await fetch('/api/user/createuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            password: hashedPassword,
        }),
    });

    // Verifica a resposta da API
    if (!createUserResponse.ok) {
        const createUserError = await createUserResponse.json();
        errors.generic = createUserError.error || 'Erro ao criar o usuário.';
        return errors;
    }

    // Redireciona o usuário para a página de dashboard após a criação bem-sucedida
    await signIn('credentials', { email, password, redirectTo: '/dashboard' })
}

// Logar usuário
export async function loginUser(state: { error: string } | void, formData: FormData): Promise<void | { error: string }> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        const result = await signIn('credentials', {
            email,
            password,
            redirect: false
        });

        if (result?.error) {
            // Retorna o erro para o cliente
            return { error: 'Credenciais inválidas' };
        }
        window.location.href = '/dashboard';

    } catch {
        return { error: "Ocorreu um erro inesperado, tente novamente mais tarde." };
    }
}

// Deslogar usuário
export async function logoutUser() {
    await signOut({ redirectTo: '/' });
}
