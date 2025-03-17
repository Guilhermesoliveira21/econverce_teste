import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface ButtonProps {
    color?: "primary" | "secondary";
    to?: string,
    link: boolean,
    children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ color = 'primary', to, link, children }) => {

    return (
        <>
            {link ? (
                <Link className={`${styles.button_container} ${color === 'primary' ? styles.primary : styles.secondary}`} to={to}>{children}</Link>
            ) : (
                <button className={`${styles.button_container} ${color === 'primary' ? styles.primary : styles.secondary}`}>{children}</button>
            )}

        </>
    )
}