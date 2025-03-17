import { useContext } from "react";
import { Brands } from "../../components/Brands";
import { Categories } from "../../components/Categories"
import { Hero } from "../../components/Hero"
import { Partners } from "../../components/Partners";
import { ProductsRelacions } from "../../components/ProductsRelacions";

import styles from './styles.module.scss';
import { ProductContext } from "../../context/Product";
import { ModalVitrini } from "../../components/ModalVitrini";
import { MetaTags } from "../../seo/MetaTags";

export const Home = () => {

    const { isOpenModal } = useContext(ProductContext);

    return (
        <>
            <MetaTags 
                title="Página Inicial | Econverce"
                keywords="Teste, desenvolvedor junior, react.js"
                description="Teste prático para a vaga de desenvolvedor front-end júnior, demonstrando habilidades em React, HTML, CSS e boas práticas de desenvolvimento."
            />

            <Hero />
            <main className={styles.container_home_page}>
                <Categories />
                <ProductsRelacions />
                <Partners />
                <ProductsRelacions tab={false}/>
                <Partners />
                <Brands />
                <ProductsRelacions tab={false}/>

                {isOpenModal && <ModalVitrini />}
            </main>
        </>
    )

}