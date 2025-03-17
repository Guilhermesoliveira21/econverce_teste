import { ReactNode } from "react"
import './styles.scss';

interface subTitleProps {
    children: ReactNode,
    border?: boolean
}

export const SubTitle = ({ children, border = false }: subTitleProps) => {

    return (
        <>
            <div className="container_subtitle">
                <span className={border ? 'sub_title_border' : ''}></span>
                    <h3 className="subtitle_text">{children}</h3>
                <span className={border ? 'sub_title_border' : ''}></span>
            </div>
        </>
    )
}