import { featuresJobs } from '@/data/features';
import FeaturesCard from '../featuresCard/FeaturesCard';
import styles from './features.module.scss';

function FeaturesSection() {
    return (
        <section className={styles.features}>
            <h1>
                <span className={styles.wordShadow}>Explore</span> Recursos Essenciais
                para Profissionais
            </h1>
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
    )
}

export default FeaturesSection