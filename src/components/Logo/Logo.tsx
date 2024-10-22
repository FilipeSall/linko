import Image from 'next/image';
import styles from './logo.module.scss';
import logoimg from '@/assets/logo2.png';

function Logo() {
    return (
        <div className={styles.wrapper}>
            <Image 
            src={logoimg} 
            alt='logo'
            height={50} width={50} 
            className={styles.logo} 
            />
            <p>LINKO</p>
        </div>
    )
}

export default Logo