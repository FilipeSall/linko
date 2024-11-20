import SignUpForm from '@/components/signUpForm/SignUpForm'
import signupImg from '../../../public/assets/form/signup.webp';
import Image from 'next/image';
import styles from './page.module.scss';

function page() {
  return (
    <main className={styles.content}>
        <div className={styles.formWrapper}>
          <h1 className={styles.formTitle}>Criar uma conta</h1>
          <hr />
          <SignUpForm />
        </div>
        <Image src={signupImg} priority  alt='imagem psicodelica de um computador conectado a varios'/>
    </main>
  )
}

export default page