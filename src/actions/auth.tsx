'user server';
import { StateError, StateSuccess } from "@/types/auth";

//Criar novo usuario com Credenciais
export async function createUserAction(state: StateError | StateSuccess, formData: FormData): Promise<StateError | StateSuccess> {
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

    // Chama a API para verificar se o usuário já existe (passando o e-mail)
    const response = await fetch('/api/auth/finduser', {
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
    }

    // Verifica se existem erros antes de continuar
    if (Object.keys(errors).length > 0) {
        return errors;
    } else {
        return { success: true };
    }
}