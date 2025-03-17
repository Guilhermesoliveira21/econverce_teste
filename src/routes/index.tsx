import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteLayout } from '../layouts/SiteLayout';
import { Home } from '../pages/Home';

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SiteLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}