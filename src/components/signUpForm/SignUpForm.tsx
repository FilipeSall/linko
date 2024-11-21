"use client";
import { useActionState } from 'react';
import Input from './input/Input';
import styles from './SignUpForm.module.scss';
import Link from 'next/link';
import { createUserAction } from '@/actions/auth';
import { StateError, StateSuccess } from '@/types/auth';

function SignUpForm() {

    const [state, action, pending] = useActionState(createUserAction, {});

    //Função que verifica se o retorno da action foi um erro
    function isErrorState(state: StateError | StateSuccess): state is { [key: string]: string } {
        return typeof state === 'object' && !('success' in state);
    }
    
    const inputs: {
        label: string;
        name: string;
        type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search' | 'url',
        placeholder?: string
    }[] = [
            { label: 'Digite seu nome', type: 'text', name: 'name' },
            { label: 'Digite seu email', type: 'email', name: 'email' },
            { label: 'Digite uma senha', type: 'password', name: 'password', placeholder: 'Mínimo 8 caracteres' },
            { label: 'Confirme sua senha', type: 'password', name: 'confirmPassword' }
        ]

    return (
        <form className={styles.form} action={action}>
            {inputs.map((input, i) => (
                <Input
                    key={i}
                    label={input.label}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    inputError={isErrorState(state) ? state : undefined}
                />
            ))}
            {isErrorState(state) && <p className={styles.errorMessage}>{state.generic}</p>}
            <div className={styles.btnWrapper}>
                <button className={`${styles.btn} ${styles.submitBtn}`} type='submit' disabled={pending}>{pending ? 'Enviando...' : 'Enviar'}</button>
                {!pending && <Link className={`${styles.btn} ${styles.backBtn}`} href='/signin'>Já é cadastrado?</Link>}
            </div>
        </form>
    )
}

export default SignUpForm