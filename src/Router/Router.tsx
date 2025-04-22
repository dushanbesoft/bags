import { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'app/pages/Home/Home';
import { Layout } from 'app/components/Layout/Layout';

export const Router = memo(() => {
    /**
     * Memoize the route list to avoid unnecessary cascading re-renders
     * It should only re-render if the wallet changes
     */

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" Component={Home} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
});
