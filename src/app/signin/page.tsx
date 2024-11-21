import Link from 'next/link';
import styles from './page.module.scss';
import Image from 'next/image';
import modalImg from '../../../public/assets/form/signin.webp';
import logoImg from '../../../public/assets/logo2.png';

function page() {
    return (
        <main className={styles.pageContainer}>
            <div className={styles.modalContainer}>
                <form className={styles.form}>
                    <div className={styles.logoWrapper}>
                        <Link href='/'>
                            <Image src={logoImg} className={styles.logoImg} alt='logo' />
                        </Link>
                    </div>
                    <h1 className={styles.formTitle}>Entrar com Email</h1>
                    <div className={styles.inputWrapper}>
                        <label htmlFor='email'>Digite seu email cadastrado</label>
                        <input name='email' required  />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor='password'>Digite sua senha</label>
                        <input name='password' type='password' required  />
                    </div>
                    <div className={styles.btnWrapper}>
                        <button className={`${styles.loginBtn} ${styles.btn}`} type='submit'>Entrar</button>
                        <Link className={`${styles.signUpBtn} ${styles.btn}`} href='/signup'>Não é cadastrado?</Link>
                    </div>
                </form>
                <div className={styles.imgWrapper}>
                    <Image src={modalImg} priority alt='Vários favicons saindo de um computador' className={styles.modalImg} />
                </div>
            </div>
        </main>
    )
}

export default page