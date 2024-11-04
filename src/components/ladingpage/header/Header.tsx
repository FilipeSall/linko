import Logo from '@/components/Logo/Logo';
import styles from './header.module.scss';
import Navlink from '@/components/Navlink/Navlink';
import { CiLogin } from 'react-icons/ci';

function LadingPageHeader() {
    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.btnWrapper}>
                <Navlink href="/signin" size="medium" type="ghost" icon={<CiLogin />}>
                    Entrar
                </Navlink>
                <Navlink href="/signup" size="medium" type="solid">
                    Cadastre-se
                </Navlink>
            </div>
        </header>
    )
}

export default LadingPageHeader