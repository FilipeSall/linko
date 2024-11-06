"use client";
import { FeaturesCardsProps } from '@/types/components';
import styles from './FeaturesCard.module.scss';
import Image from 'next/image';
import { motion } from "framer-motion"

function FeaturesCard({ description, img, title, index }: FeaturesCardsProps) {
    const boxShadowClasses = ['boxShadow1', 'boxShadow2', 'boxShadow3', 'boxShadow4'];
    const randomClass = boxShadowClasses[Math.floor(Math.random() * boxShadowClasses.length)];

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ rotate: index % 2 === 0 ? 1 : -1, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            layoutId={`card-${index}`}
            className={`${styles.cardWrapper} ${styles[randomClass]}`}
            suppressHydrationWarning
            >
            <Image src={img} alt={title} className={styles.cardImg} height={190} width={500} priority />
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardDescription}>{description}</p>

        </motion.div>
    );
}

export default FeaturesCard