import Input from './input/Input';
import Select from './select/Select';
import styles from './SignUpForm.module.scss';

async function SignUpForm() {

    const inputs: { label: string; name: string; type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search' | 'url' }[] = [
        {
            label: 'Digite seu nome',
            type: 'text',
            name: 'name'
        },
        {
            label: 'Digite seu email',
            type: 'email',
            name: 'email',
        },
        {
            label: 'Digite uma senha',
            type: 'password',
            name: 'password'
        },
        {
            label: 'Confirme sua senha',
            type: 'password',
            name: 'confirmPassword'
        }
    ]

    return (
        <form className={styles.form}>
            {inputs.map((input, i) => (
                <Input
                    key={i}
                    label={input.label}
                    name={input.name}
                    type={input.type}
                />
            ))}
            <Select />
            <div className={styles.btnWrapper}>
                <button className={styles.btn}>Enviar</button>
            </div>
        </form>
    )
}

export default SignUpForm