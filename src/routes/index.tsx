import React from 'react';
import { Route, Routes } from 'react-router';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<div>teste</div>} />
                <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
        </>
    )
}

export default Router;