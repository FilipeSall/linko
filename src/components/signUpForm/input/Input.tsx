"use client";
import styles from './Input.module.scss';
import { InputProps } from '@/types/components';

function Input({
    label,
    name,
    type = 'text',
    placeholder,
    required = true,
    ...rest
}: InputProps) {

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

        </div>
    )
}

export default Input