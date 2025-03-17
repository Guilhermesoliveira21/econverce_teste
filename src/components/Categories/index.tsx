import { categories } from "../../data/categories"
import { Card } from "./Ui/Card"
import './styles.scss';

export const Categories = () => {

    return (
        <>
            <section className="container_categories">
                {categories?.map((cate) => (
                    <Card data={cate} key={cate.id}/>     
                ))}
            </section>
        </>
    )
}