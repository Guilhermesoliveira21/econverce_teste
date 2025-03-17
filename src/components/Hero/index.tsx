import hero from '../../assets/images/hero/hero.png';
import { Button } from '../Button';
import styles from './styles.module.scss';

export const Hero = () => {

    return (
        <>

            <section className={styles.container_hero}>
                <img src={hero} alt="" />
                <div className={styles.container_hero_content}>
                    <div className={styles.container_content_hero}>
                        <div className={styles.container_content}>
                            <div className={styles.hero_content}>
                                <h1>Venha conhecer nossas <br />promoções</h1>
                                <h3><span>50% Off</span> nos produtos </h3>
                            </div>
                            <div>
                                <Button link={false} color='secondary' to='/'>Ver Produto</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}