import styles from './select.module.scss';
import { useEffect, useState } from 'react';
import { Niches } from '@prisma/client';

function Select() {
    const [niches, setNiches] = useState<Niches[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedNiche, setSelectedNiche] = useState<string>(''); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/niches');
                if (!response.ok) {
                    throw new Error('Falha ao buscar os nichos');
                }
                const result: Niches[] = await response.json();
                setNiches(result);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('Erro desconhecido');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    
    if (error) {
        return <div className={styles.error}>Erro: {error}</div>;
    }

    return (
        <div className={styles.inputWrapper}>
            <label htmlFor="niche">Para qual nicho você pretende focar?</label>
            <select
                className={styles.select}
                name="niche"
                value={selectedNiche} 
                onChange={(e) => setSelectedNiche(e.target.value)} 
            >
                {loading ? (
                    <option>Carregando...</option>
                ) : (
                    <>
                        <option className={styles.option} value="" disabled>
                            Selecione uma opção
                        </option>
                        {niches.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.description}
                            </option>
                        ))}
                    </>
                )}
            </select>
        </div>
    );
}

export default Select;
