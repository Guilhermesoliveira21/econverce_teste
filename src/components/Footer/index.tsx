import { Bottom } from "./Ui/Bottom"
import { Content } from "./Ui/Content"
import { Newsletter } from "./Ui/Newsletter"

export const Footer = () => {
    return (
        <>
            <footer>
                <Newsletter />
                <Content />
                <Bottom />
            </footer>
        </>
    )
}