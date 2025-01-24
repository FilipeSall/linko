import styles from './page.module.scss';
import Image from 'next/image';
import modalImg from '../../../public/assets/form/signin.webp';
import SignInForm from '@/components/siginInForm/SignInForm';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

async function Page() {

    const session = await auth();

    if (session !== null) {
        redirect('/dashboard');
    }

    return (
        <main className={styles.pageContainer}>
            <div className={styles.modalContainer}>
                <SignInForm />
                <div className={styles.imgWrapper}>
                    <Image src={modalImg} priority alt='Vários favicons saindo de um computador' className={styles.modalImg} />
                </div>
            </div>
        </main>
    )
}

export default Page