import styles from './styles.module.scss';

interface dataProps {
    id: number,
    name: string,
    icon: string,
    is_select: boolean
};

export const Card = ({ data }: { data: dataProps }) => {

    return (
        <>
        
            <div className={styles.container_card}>
                <div className={`${styles.card_media} ${data.is_select ? styles.card_active : styles.card_desactive}`}>
                    <img src={data.icon} alt={data.name} />
                </div>
                <div className={styles.card_content}>
                    <p className={data.is_select ? styles.card_active_text : styles.card_desactive_text}>{data.name}</p>
                </div>
            </div>
        
        </>
    )
}