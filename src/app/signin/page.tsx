"use client";
import Link from 'next/link';
import styles from './page.module.scss';
import Image from 'next/image';
import modalImg from '../../../public/assets/form/signin.webp';
import logoImg from '../../../public/assets/logo2.png';
import { loginUser } from '../_actions/auth';
import { useActionState, useState } from 'react';
import LoginProviderBtn from '@/components/ui/loginProviderBtn/LoginProviderBtn';

function Page() {
    const [state, action, pending] = useActionState(loginUser, { error: '' });
    const [providerLoading, setProviderLoading] = useState(false);

    const errorMessage = state?.error;

    return (
        <main className={styles.pageContainer}>
            <div className={styles.modalContainer}>
                <form className={styles.form} action={action}>
                    <div className={styles.logoWrapper}>
                        <Link href='/'>
                            <Image src={logoImg} className={styles.logoImg} alt='logo' />
                        </Link>
                    </div>
                    <h1 className={styles.formTitle}>Entrar com Email</h1>
                    <div className={styles.inputWrapper}>
                        <label htmlFor='email'>Digite seu email cadastrado</label>
                        <input name='email' required disabled={pending} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor='password'>Digite sua senha</label>
                        <input name='password' type='password' required disabled={pending} />
                    </div>
                    {errorMessage && (
                        <div className={styles.errorMessage}>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    <div className={styles.btnWrapper}>
                        <button className={`${styles.loginBtn} ${styles.btn}`} type='submit' disabled={pending || providerLoading}>{pending ? 'Aguarde' : 'Entrar'}</button>
                        <Link className={`${styles.signUpBtn} ${styles.btn} ${pending && styles.hiddenElement}`} href='/signup'>Não é cadastrado?</Link>
                    </div>
                    <div className={styles.providersWrapper}>
                        <p>ou</p>
                        <div className={styles.providersBtnWrapper}>
                            <LoginProviderBtn provider='github' loading={providerLoading} setLoading={setProviderLoading} />
                        </div>
                    </div>
                </form>
                <div className={styles.imgWrapper}>
                    <Image src={modalImg} priority alt='Vários favicons saindo de um computador' className={styles.modalImg} />
                </div>
            </div>
        </main>
    )
}

export default Page