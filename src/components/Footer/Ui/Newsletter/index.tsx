import { Form } from '../Form';
import styles from './styles.module.scss';

export const Newsletter = () => {

    return (
        <div className={styles.container}>
            <div className={styles.container_newsletter}>
                <div className={styles.content}>
                    <h4>Inscreva-se na nossa newsletter</h4>
                    <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos <br /> da Econverse.</p>
                </div>
                <div className={styles.form}>
                    <Form/>
                </div>
            </div>
        </div>
    )

}