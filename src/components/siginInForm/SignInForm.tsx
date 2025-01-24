"use client";
import Link from 'next/link'
import styles from './SiginInForm.module.scss';
import { useState } from 'react';
import LoginProviderBtn from '../ui/loginProviderBtn/LoginProviderBtn';
import Image from 'next/image';
import logoImg from '../../../public/assets/logo2.png';
import Loading from '@/app/loading';

function SignInForm() {
    const [providerLoading, setProviderLoading] = useState(false);

    return (
        <div className={styles.form}>
            <div className={styles.logoWrapper}>
                <Link href='/'>
                    <Image src={logoImg} className={styles.logoImg} alt='logo' />
                </Link>
            </div>
            <h1 className={styles.formTitle}>Escolha o Provedor</h1>
            <div className={styles.providersWrapper}>
                {providerLoading ? <Loading /> :
                    <>
                        <LoginProviderBtn provider='github' loading={providerLoading} setLoading={setProviderLoading} />
                        <LoginProviderBtn provider='google' loading={providerLoading} setLoading={setProviderLoading} />
                        <LoginProviderBtn provider='dribbble' loading={providerLoading} setLoading={setProviderLoading} />
                    </>}
            </div>
        </div>
    )
}

export default SignInForm