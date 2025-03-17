import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const SiteLayout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )

}