import { Routes, Route, Navigate } from 'react-router-dom';

import { Home, About, Logement, Error404 } from '@/Pages/Public/Index';

import Layout from '@/Layouts/Layout';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/Home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;