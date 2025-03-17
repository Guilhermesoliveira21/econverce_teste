import { SubTitle } from "../SubTitle"
import logotipo from '../../assets/logotipo.png';

import styles from './styles.module.scss';

export const Brands = () => {


    return (
        <>
        
            <div className={styles.container}>
                <SubTitle border={false}>Navegue por marcas</SubTitle>
                <div className={styles.container_brands}>
                    <div className={styles.brands}>
                        <img src={logotipo} alt="Marcas" />
                    </div>
                    <div className={styles.brands}>
                        <img src={logotipo} alt="Marcas" />
                    </div>
                    <div className={styles.brands}>
                        <img src={logotipo} alt="Marcas" />
                    </div>
                    <div className={styles.brands}>
                        <img src={logotipo} alt="Marcas" />
                    </div>
                    <div className={styles.brands}>
                        <img src={logotipo} alt="Marcas" />
                    </div>
                </div>
            </div>

        </>
    )
}