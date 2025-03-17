import { ReactNode, useRef } from "react";
import leftIcon from '../../assets/icons/products/left.svg';
import rightIcon from '../../assets/icons/products/right.svg';

import styles from './styles.module.scss'

interface SilderProps {
    children: ReactNode,
    w?: number
}

export const Slider = ({ children, w = 320 } : SilderProps) => {

    const scrollRef = useRef<HTMLDivElement>(null);

    function scrollSlider(direction: 'left' | 'rigth') {
        if(scrollRef.current) {
            const scrollValue = w;

            if(direction === 'left') {
                scrollRef.current.scrollBy({ left: -scrollValue, behavior: 'smooth' });
            }else {
                scrollRef.current.scrollBy({ left: scrollValue, behavior: 'smooth' });
            };
        }
    }

    return (
        <>
            <div className={styles.container_slider}>
                <span onClick={() => scrollSlider('left')}>
                    <img src={leftIcon} alt="Icone" />
                </span>
                <div ref={scrollRef} className={styles.container_main_slider}>
                {children}
                </div>
                <span onClick={() => scrollSlider('rigth')}>
                    <img src={rightIcon} alt="Icone" />
                </span>
            </div>
        </>
    )

}