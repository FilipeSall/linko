import Image from "next/image";
import styles from "./page.module.scss";
import signupimg from '../../../public/assets/form/signup.webp';
import SignUpForm from "@/components/signUpForm/SignUpForm";

function page() {
  return (
    <main className={styles.content}>
      <div className={styles.formWrapper}>
        <h1 className={styles.formTitle}>Criar uma conta</h1>
        <hr />
        <SignUpForm />
      </div>
      <div className={styles.imgWrapper}>
        <Image src={signupimg} alt="Tudo em um só lugar." width={600} height={930} priority />
      </div>
    </main>
  );
}

export default page;
