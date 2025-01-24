"use client";
import styles from './Input.module.scss';
import { InputSignUpProps } from '@/types/components';

function Input({
    label,
    name,
    type = 'text',
    placeholder,
    required = true,
    inputError,
    ...rest
}: InputSignUpProps) {

     // Extraindo mensagem de erro específica para o campo atual
    const errorMessage = inputError?.[name];

    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                className={styles.input}
                placeholder={placeholder}
                required={required}
                id={name}
                {...rest}
            />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div>
    )
}

export default Input