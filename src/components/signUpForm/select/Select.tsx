import { getAllNiches } from '@/services/nicheServices';
import styles from './select.module.scss';

async function Select() {

    const niches = await getAllNiches();

    return (
        <div className={styles.inputWrapper}>
            <label htmlFor='niche'>Para qual nicho você pretende focar?</label>
            <select className={styles.select} name="niche">
                <option className={styles.option} value="" disabled>Selecione uma opção</option>
                {niches.length > 0 ? niches.map((option) => (
                    <option key={option.id} value={option.id}>{option.description}</option>
                )) : <option disabled>Banco de dados indisponível no momento</option>}
            </select>
        </div>
    )
}

export default Select