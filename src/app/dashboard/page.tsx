import { redirect } from 'next/navigation';
import styles from './dashboard.module.scss';
import { auth } from '@/auth';
import LogoutBtn from '@/components/ui/logoutBtn/LogoutBtn';

async function Dashboard() {

    const session = await auth();
    if (!session?.user?.email){
        redirect('/')
    }

    if (session === null) {
        redirect('/');
    }
    const user = session.user;

    return (
        <main className={styles.main}>
            <p>Olá , {user?.name}</p>
            <LogoutBtn />
        </main>
    )
}

export default Dashboard