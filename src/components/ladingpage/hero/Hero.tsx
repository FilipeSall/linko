import Navlink from '@/components/Navlink/Navlink';
import styles from './hero.module.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
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
                <Navlink
                    href="links"
                    size="medium"
                    type="cta"
                    icon={<MdOutlineTravelExplore />}
                >
                    Explorar
                </Navlink>
            </div>
            <div className={styles.imgWrapper}>
                <VideoHero />
            </div>
        </section>

    )
}

export default HeroSection