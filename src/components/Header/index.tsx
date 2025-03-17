import { HeaderContent } from './Ui/HeaderContent/HeaderContent';
import { HeaderNavigation } from './Ui/HeaderNavigation';
import { HeaderTop } from './Ui/HeaderTop/HeaderTop';
import styles from './styles.module.scss';


export const Header = () => {
    return (
        <>
            <header className={styles.container_header}>
                <HeaderTop />
                <HeaderContent />
                <HeaderNavigation />
            </header>
        </>
    )
}