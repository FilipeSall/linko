import Navlink from '@/components/Navlink/Navlink';
import styles from './hero.module.scss';
import { MdDashboard, MdOutlineTravelExplore } from 'react-icons/md';
import VideoHero from '../videoHero/VideoHero';

function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>
                    <span className={styles.wordShadow}>Organize</span> a internet,{" "}
                    <span className={styles.wordShadow}>Encontre</span> o que importa
                </h1>
                <p>
                    Ferramentas e informações acessíveis, na hora que você precisar.
                </p>
                <div className={styles.btnWrapper}>
                    <Navlink
                        href="links"
                        size="medium"
                        type="cta"
                        icon={<MdOutlineTravelExplore />}>
                        Explorar
                    </Navlink>
                    <div className={styles.mediaCelSignInBtn}>
                        <Navlink href="/api/auth/signin" size="medium" type="ghost" icon={<MdDashboard />}>
                            Dashboard
                        </Navlink>
                    </div>
                </div>
            </div>
            <div className={styles.imgWrapper}>
                <VideoHero />
            </div>
        </section>

    )
}

export default HeroSection