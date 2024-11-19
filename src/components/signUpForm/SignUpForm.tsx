"use client";
import Input from './input/Input';
import styles from './SignUpForm.module.scss';
import Link from 'next/link';

function SignUpForm() {

    const inputs: {
        label: string;
        name: string;
        type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search' | 'url',
        placeholder?:string
    }[] = [
            { label: 'Digite seu nome', type: 'text', name: 'name' },
            { label: 'Digite seu email', type: 'email', name: 'email' },
            { label: 'Digite uma senha', type: 'password', name: 'password', placeholder:'Mínimo 8 caracteres' },
            { label: 'Confirme sua senha', type: 'password', name: 'confirmPassword' }
        ]

    return (
        <form className={styles.form} >
            {inputs.map((input, i) => (
                <Input
                    key={i}
                    label={input.label}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                />
            ))}
            <div className={styles.btnWrapper}>
                <button className={`${styles.btn} ${styles.submitBtn}`} type='submit'>Enviar</button>
                <Link className={`${styles.btn} ${styles.backBtn}`} href='/signin'>Já é cadastrado?</Link>
            </div>
        </form>
    )
}

export default SignUpForm