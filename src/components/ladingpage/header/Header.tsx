import Logo from '@/components/Logo/Logo';
import styles from './header.module.scss';
import Navlink from '@/components/Navlink/Navlink';
import { MdDashboard } from "react-icons/md";

function LadingPageHeader() {
    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.btnWrapper}>
                <Navlink href="/api/auth/signin" size="medium" type="ghost" icon={<MdDashboard />}>
                    Dashboard
                </Navlink>
            </div>
        </header>
    )
}

export default LadingPageHeader