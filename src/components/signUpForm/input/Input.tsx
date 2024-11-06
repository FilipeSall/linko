import { InputProps } from '@/types/components';
import styles from './Input.module.scss';

function Input({
    label,
    name,
    type = 'text',
    placeholder = '',
    required = false,
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
                {...rest}
            />
        </div>
    )
}

export default Input