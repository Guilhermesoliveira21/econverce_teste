import { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { ProductContext } from "../../context/Product";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Button";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";

export const ModalVitrini = () => {
    const { product, closeModal } = useContext(ProductContext);
    const [count, setAcount] = useState(1);
   
    if (!product) return null;

    const handleBuyProduct = () => {
        closeModal()
        toast.success(`Parabéns! Você comprou ${product.productName}. 🛍️`);
    }

    return (
        <div className={styles.container_modal} onClick={closeModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
               <div className={styles.modal_image}>
                    <img src={product.photo} alt={product.descriptionShort} />
               </div>
               <div className={styles.modal_content}>
                    <div className={styles.modal_container_name_price}>
                        <h4>{product.productName}</h4>
                        <h5>{formatPrice(product.price * count)}</h5>
                    </div>
                    <div className={styles.modal_container_description}>
                        <p>{product.descriptionShort}</p>
                        <span>Veja mais detalhes do produto {'>'} </span>
                    </div>
                    <div className={styles.modal_buy}>
                        <div className={styles.modal_container_add}>
                            <button onClick={() => setAcount((c) => Math.max(1, c - 1))}>-</button>
                                <span>{count}</span>
                            <button onClick={() => setAcount((c) => c+1)}>+</button>
                        </div>
                        <div onClick={handleBuyProduct}>
                        <Button link={false} color="secondary" >Comprar</Button>
                        </div>
                    </div>
                <span className={styles.close} onClick={closeModal}>
                    <IoCloseSharp />
                </span>
               </div>


            </div>
        </div>
    );
};
