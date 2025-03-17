import partnersImage from '../../assets/images/partners/partners.png';
import { Button } from '../Button';

import styles from './styles.module.scss';

export const Partners = () => {

    return (
        <>
            <section className={styles.container}>
                
                <div className={styles.container_partners}>
                    
                    <div className={styles.container_card}>
                        <div>
                            <img src={partnersImage} alt='Nossos parceiros' />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.content_title}>Parceiros</h3>
                            <p className={styles.content_description}>Lorem ipsum dolor sit <br /> amet, consectetur</p>
                            <div className={styles.content_button}>
                                <Button color='secondary' to='/'>Confira</Button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.container_card}>
                        <div>
                            <img src={partnersImage} alt='Nossos parceiros' />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.content_title}>Parceiros</h3>
                            <p className={styles.content_description}>Lorem ipsum dolor sit <br /> amet, consectetur</p>
                            <div className={styles.content_button}>
                                <Button color='secondary' to='/'>Confira</Button>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>
        </>
    )
}