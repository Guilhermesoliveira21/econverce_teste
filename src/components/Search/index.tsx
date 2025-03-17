import { useContext, useState } from 'react';
import searchIcon from '../../assets/icons/search.svg';
import styles from './styles.module.scss';
import { useProducts } from '../../hooks/useProducts';
import { ProductContext } from '../../context/Product';
import { Product } from '../../types/Product';

export const Search = () => {

    const [search, setSearch] = useState('');
    const { openModal } = useContext(ProductContext);

    const { data: products } = useProducts();

    function handleProduct(data: Product) {
        setSearch('');
        openModal(data)
    }

    return (
        <>
            <div className={styles.container_search}>
                <input 
                    type="text"
                    placeholder='O que você está buscando?'
                    name='search'
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    />
                <img src={searchIcon} alt="Pesquisar" />
                {search.length > 0 && (
                     <div className={styles.container_results}>
                     <ul>
                        {products?.filter((i) => i.productName.toLowerCase().includes(search.toLowerCase()))
                        .map((prod) => (
                          <li onClick={() => handleProduct(prod)}>
                             <p>{prod.productName}</p>
                         </li>
                        ))}
                     </ul>
                 </div>
                )}
            </div>
        </>
    )
}