import { useContext } from "react";
import { ProductContext } from "../../context/Product";
import { Product } from "../../types/Product"
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Button";
import styles from './styles.module.scss';

export const CardProduct = ({ data }: Product) => {

    const { openModal } = useContext(ProductContext);


    return (
        <>

            <div className={styles.container_card}>
                <div className={styles.card}>

                    <div className={styles.card_image}>
                        <img src={data.photo} alt={data.productName} />
                    </div>

                    <div className={styles.card_content}>
                        <p className={styles.card_content_description}>
                            {data.productName}
                        </p>

                        <div className={styles.card_price}>
                            <p className={styles.card_content_descount}>R$ 56,98</p>

                            <p className={styles.card_content_price}>{formatPrice(data.price)}</p>
                        </div>

                        <p className={styles.card_content_installment}>ou 2x de R$ 49,95 sem juros</p>

                        <p className={styles.card_content_frete}>Frete grátis</p>
                    </div>

                    <div onClick={() => openModal(data)}>
                        <Button link={false} color="primary">COMPRAR</Button>
                    </div>
                </div>

            </div>

        </>
    )
}