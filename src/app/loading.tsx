import Image from 'next/image';
import loadingicon from '../../public/assets/loading.svg';
import styles from './page.module.scss';

function Loading() {
    return (
        <div className={styles.loadingOverlay}>
            <Image src={loadingicon} className={styles.loadingIcon} width={150} height={150} alt='carregando...' />
        </div>
    );
}

export default Loading;
