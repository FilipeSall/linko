import { BtnLoginProviderProps } from '@/types/components';
import styles from './loginproviderbtn.module.scss';
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { PiDribbbleLogoFill } from "react-icons/pi";

function LoginProviderBtn({ provider, loading, setLoading }: BtnLoginProviderProps) {

    const handleLogin = async () => {
        setLoading(true);
        try {
            await signIn(provider, { callbackUrl: '/dashboard' });
        } catch (error) {
            console.error('Erro ao logar com o provedor:', error);
        } finally {
            setLoading(false);
        }
    };

    const getIcon = (provider: string) => {
        switch (provider) {
            case 'github':
                return <FaGithub size={32} fill='black' aria-label='GitHub' />
            case 'google':
                return <FcGoogle size={32} aria-label='Google'/>
            case 'dribbble':
                return <PiDribbbleLogoFill fill='#FF4081' size={32} aria-label='Dribbble'/>
            default:
                return null
        }
    }

    return (
        <button type='button' className={`${styles.btn}`} disabled={loading} onClick={handleLogin}>
            {loading ? (
                'Aguarde...'
            ) : (
                <>
                    Entrar com {provider} {getIcon(provider)}
                </>
            )}
        </button>
    )
}

export default LoginProviderBtn