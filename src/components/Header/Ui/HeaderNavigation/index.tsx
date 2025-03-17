import { Link } from "react-router-dom"
import crownIcon from '../../../../assets/icons/crown.svg'
import styles from './styles.module.scss';

export const HeaderNavigation = () => {

    return (
        <>
            <div className={styles.container}>
                <nav className={styles.container_navigation}>
                    <ul className={styles.container_navigation_ul}>
                        <li>
                            <Link to='/'>Todas cartegorias</Link>
                        </li>
                        <li>
                            <Link to='/'>Supermercado</Link>
                        </li>
                        <li>
                            <Link to='/'>Livros</Link>
                        </li>
                        <li>
                            <Link to='/'>Moda</Link>
                        </li>
                        <li>
                            <Link to='/'>Lançamentos</Link>
                        </li>
                        <li>
                            <Link to='/'>Ofertas do dia</Link>
                        </li>
                        <li>
                            <img src={crownIcon} alt="" />
                            <Link to='/'>Assinatura</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}