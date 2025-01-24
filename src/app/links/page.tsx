import Navlink from '@/components/Navlink/Navlink';
import styles from './page.module.scss';
import { FaFilter } from "react-icons/fa";
import { CiLogin } from 'react-icons/ci';

function page() {
    return (
        <main className={styles.page}>
            <header className={styles.header}>
                <div className={styles.inputWrapper}>
                    <input className={styles.input} placeholder='Filtrar links...' />
                    <button type='button' className={styles.filterButn}><FaFilter fill='#121113' size={20} /></button>
                </div>
                <div>
                    <Navlink href="/api/auth/signin" size='medium' type="ghost" icon={<CiLogin />}>
                        Entrar
                    </Navlink>
                </div>
            </header>
            <section className={styles.sectionLinks}>

            </section>
        </main>
    )
}

export default page