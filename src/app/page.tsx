import VideoHero from '@/components/videoHero/VideoHero';
import styles from './page.module.scss';
import Logo from '@/components/Logo/Logo';
import Navlink from '@/components/Navlink/Navlink';
import { CiLogin } from "react-icons/ci";
import { MdOutlineTravelExplore } from "react-icons/md";
import { featuresJobs } from '@/data/features';
import FeaturesCard from '@/components/featuresCard/FeaturesCard';

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <Logo />
        <div className={styles.btnWrapper}>
          <Navlink href='/newUser' size='medium' type='ghost' icon={<CiLogin />}>Entrar</Navlink>
          <Navlink href='/newUser' size='medium' type='solid'>Cadastre-se</Navlink>
        </div>
      </header>
      
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1><span className={styles.wordShadow}>Organize</span> a internet, <span className={styles.wordShadow}>Encontre</span> o que importa</h1>
          <p>Ferramentas e informações acessíveis, na hora que você precisar.</p>
          <Navlink href='links' size='medium' type='cta' icon={<MdOutlineTravelExplore />}>Explorar</Navlink>
        </div>
        <div className={styles.imgWrapper}>
          <VideoHero />
        </div>
      </section>

      <section className={styles.features}>
        <h1><span className={styles.wordShadow}>Explore</span> Recursos Essenciais para Profissionais</h1>
        <div className={styles.cardsWrapper}>
          {featuresJobs.map((feature, i) => (
            <FeaturesCard
            key={i}
            description={feature.description}
            img={feature.img}
            title={feature.title}
            index={i}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
