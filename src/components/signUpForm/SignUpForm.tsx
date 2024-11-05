"use client";
import styles from './SignUpForm.module.scss';

function SignUpForm() {
    return (
        <form className={styles.form}>
            <div className={styles.inputWrapper}>
                <label htmlFor="name">Digite seu nome</label>
                <input type='text' name="name" className={styles.input} />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="email">Digite seu email</label>
                <input type='email' name="email" className={styles.input} />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="password">Digite uma senha</label>
                <input type='password' name="password" className={styles.input} />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="confirmPassword">Confirme sua senha</label>
                <input type='password' name="confirmPassword" className={styles.input} />
            </div>
            <div className={styles.inputWrapper}>
                <label>Para qual nicho você pretende focar?</label>
                <select className={styles.select} name="niche">
                    <option className={styles.option} value="" disabled>Selecione uma opção</option>
                    <option className={styles.option} value="design">Design: Criação de imagens, paleta de cores e estilo.</option>
                    <option className={styles.option} value="marketing">Marketing: Ads, divulgação e gerador de conteúdo.</option>
                    <option className={styles.option} value="developer">Programação: Bibliotecas, Frameworks e plugins.</option>
                    <option className={styles.option} value="written">Design: Redator: Textos, PDFs, ideais e notícias.</option>
                    <option className={styles.option} value="cook">Cozinha: Criação de imagens, paleta de cores e estilo.</option>
                </select>
            </div>
            <div className={styles.btnWrapper}>
                <button className={styles.btn}>Enviar</button>
            </div>
        </form>
    )
}

export default SignUpForm