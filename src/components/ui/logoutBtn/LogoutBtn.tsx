import { logoutUser } from '@/app/_actions/auth';
import styles from './logoutbtn.module.scss';
import { redirect } from 'next/navigation';

function LogoutBtn() {

    const handleLogout = async () => {
        'use server';
        await logoutUser();
        redirect('/');
    };

    return (
        <button className={styles.logoutBtn} onClick={handleLogout}>Sair</button>
    )
}

export default LogoutBtn