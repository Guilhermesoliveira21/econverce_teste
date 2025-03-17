import { Link } from 'react-router-dom';
import logotipo from '../../../../assets/logotipo.png';


import boxIcon from '../../../../assets/icons/Group.svg'
import heartIcon from '../../../../assets/icons/Heart.svg'
import userIcon from '../../../../assets/icons/user.svg';
import cartIcon from '../../../../assets/icons/cart.svg';

import styles from './styles.module.scss';
import { Search } from '../../../Search';

export const HeaderContent = () => {

    return (
        <>
            <div className={styles.container_content}>
                <div>
                    <Link to='/'>
                        <img src={logotipo} alt="Logo Econverce" />
                    </Link>
                </div>
                <Search />
                <div className={styles.container_icons}>
                    <Link to='/'>
                        <img src={boxIcon} alt="Caixa" />
                    </Link>
                    <Link to='/'>
                        <img src={heartIcon} alt="Favoritos" />
                    </Link>
                    <Link to='/'>
                        <img src={userIcon} alt="Entrar" />
                    </Link>
                    <Link to='/'>
                        <img src={cartIcon} alt="Carrinho" />
                    </Link>
                </div>
            </div>
        </>
    )
}