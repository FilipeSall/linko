"use client";
import { FeaturesCardsProps } from '@/interfaces';
import styles from './FeaturesCard.module.scss';
import Image from 'next/image';
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';


function FeaturesCard({ description, img, title, index }: FeaturesCardsProps) {

    const boxShadowClasses = ['boxShadow1', 'boxShadow2', 'boxShadow3', 'boxShadow4'];
    const [randomClass, setRandomClass] = useState('');

    useEffect(() => {
        const selectedClass = boxShadowClasses[Math.floor(Math.random() * boxShadowClasses.length)];
        setRandomClass(selectedClass);
    }, [boxShadowClasses]);

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ rotate: index % 2 === 0 ? 1 : -1 }}
            viewport={{ once: true }}
            className={`${styles.cardWrapper} ${styles[randomClass]}`}>

            <Image src={img} alt={title} className={styles.cardImg} height={300} width={500} />
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardDescription}>{description}</p>

        </motion.div>
    )
}

export default FeaturesCard