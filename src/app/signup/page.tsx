import Image from "next/image";
import styles from "./page.module.scss";
import signupimg from '@/assets/form/signup.webp';

function page() {
  return (
    <main className={styles.content}>
      <div className={styles.formWrapper}>
        <h1 className={styles.formTitle}>Criar uma conta</h1>
        <hr />
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <label htmlFor="name">Digite seu nome</label>
            <input type='text' name="name" className={styles.input}  />
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
            <label>Para qual nicho você pretende focar?</label>
            <select className={styles.select}>
              <option className={styles.option} value="" disabled>Selecione uma opção</option>
              <option className={styles.option} value="design">Design: Criação de imagens, paleta de cores e estilo.</option>
              <option className={styles.option} value="marketing">Marketing: Ads, divulgação e gerador de conteúdo.</option>
              <option className={styles.option} value="programador">Programação: Bibliotecas, Frameworks e plugins.</option>
              <option className={styles.option} value="redator">Design: Redator: Textos, PDFs, ideais e notícias.</option>
              <option className={styles.option} value="design">Cozinha: Criação de imagens, paleta de cores e estilo.</option>
            </select>
          </div>
          <div className={styles.btnWrapper}>
            <button className={styles.btn}>Enviar</button>
          </div>
        </form>
      </div>
      <div className={styles.imgWrapper}>
        <Image src={signupimg} alt="Tudo em um só lugar." width={650} height={980} />
      </div>
    </main>
  );
}

export default page;
