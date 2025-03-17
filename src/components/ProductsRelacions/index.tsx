import { useProducts } from "../../hooks/useProducts"
import { SubTitle } from "../SubTitle"
import { CardProduct } from "../CardProduct"
import { Slider } from "../Slider";

import styles from './styles.module.scss';
import { Link } from "react-router-dom";

import { productRelacions } from "../../data/productRelacion";


interface ProductsRelacionsProps {
    tab?: boolean
}

export const ProductsRelacions = ({ tab = true }: ProductsRelacionsProps) => {

    const { data } = useProducts();
    


    return (
        <>
            <section className={styles.container_product_relacion}>

                <SubTitle border={true}>Produtos relacionados</SubTitle>

                {tab ? (
                <nav className={styles.navigation}>
                    <ul className={styles.navigation_ul}>
                        {productRelacions?.map((prod) => (
                            <>
                                <li key={prod.id}>
                                    <Link 
                                        to='/'
                                        className={`${styles.link} ${prod.is_active ? styles.tab_active : styles.tab}`}    
                                    >
                                        {prod.name}
                                    </Link>
                                </li>
                            </>
                        ))}
                    </ul>
                </nav>

                ): (
                    <div className={styles.navigation}>
                        <Link className={styles.link_view_all} to='/'>Ver todos</Link>
                    </div>
                )}


                <Slider>
                    {data?.map((prod) => (
                        <CardProduct key={prod.productName} data={prod} />
                    ))}
                </Slider>

            </section>
        </>
    )
}