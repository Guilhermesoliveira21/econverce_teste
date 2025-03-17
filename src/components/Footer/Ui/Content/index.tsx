import styles from './styles.module.scss';
import logotipo from '../../../../assets/logotipo.png';

import instagranIcon from '../../../../assets/icons/footer/instagram.svg';
import facebookIcon from '../../../../assets/icons/footer/facebook.svg';
import linkedinIcon from '../../../../assets/icons/footer/linkedin.svg';
import { Link } from 'react-router-dom';

export const Content = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.container_content}>
                    <div className={styles.content_logo_and_info}>
                        <div className={styles.logo_and_info}>
                            <img src={logotipo} alt="Logotipo" />
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                        </div>
                        
                        <div className={styles.container_icons}>
                            <img src={instagranIcon} alt="Instagran" />
                            <img src={facebookIcon} alt="Facebook" />
                            <img src={linkedinIcon} alt="Linkedin" />
                        </div>
                    </div>
                    <span className={styles.border}></span>
                    <div className={styles.container_navigation}>
                        <nav className={styles.navigation}>
                            <ul>
                                <li className={styles.title}><h4>Institucional</h4></li>
                                <li><Link to='/'>Sobre Nós</Link></li>
                                <li><Link to='/'>Movimento</Link></li>
                                <li><Link to='/'>Trabalhe conosco</Link></li>
                            </ul>

                            <ul>
                                <li className={styles.title}><h4>Ajuda</h4></li>
                                <li><Link to='/'>Suporte</Link></li>
                                <li><Link to='/'>Fale Conosco</Link></li>
                                <li><Link to='/'>Perguntas Frequentes</Link></li>
                            </ul>

                            <ul>
                                <li className={styles.title}><h4>Termos</h4></li>
                                <li><Link to='/'>Termos e Condições</Link></li>
                                <li><Link to='/'>Política de Privacidade</Link></li>
                                <li><Link to='/'>Troca e Devolução</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}