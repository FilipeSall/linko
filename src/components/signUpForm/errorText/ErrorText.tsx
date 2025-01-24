import styles from './errortext.module.scss'

type ErrorTextProps = {
    errorText: string 
}

function ErrorText({ errorText }: ErrorTextProps) {
    return (
        <p className={styles.errorText}>{errorText}</p>
    )
}

export default ErrorText