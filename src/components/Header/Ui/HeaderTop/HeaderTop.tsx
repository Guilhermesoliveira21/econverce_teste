import securityIcon from '../../../../assets/icons/security.svg'
import truckIcon from '../../../../assets/icons/Truck.svg';
import creditCardIcon from '../../../../assets/icons/CreditCard.svg';

import styles from './styles.module.scss';

export const HeaderTop = () => {

    return (
        <div className={styles.container_header_top}>
            <div className={styles.container_header_top_content}>
                <img src={securityIcon} alt="Compra 100% segura" />
                <p>Compra <span>100% segura</span></p>
            </div>
            <div className={styles.container_header_top_content}>
                <img src={truckIcon} alt="Frete grátis acima de R$ 200" />
                <p><span>Frete grátis</span> acima de R$ 200</p>
            </div>
            <div className={styles.container_header_top_content}>
                <img src={creditCardIcon} alt="Parcele suas compras" />
                <p><span>Parcele</span> suas compras</p>
            </div>
        </div>
    )
}