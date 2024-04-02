import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
const Index = lazy(() => import('./index/Index.jsx'))
const Navbar = lazy(() => import('./common/Navbar.jsx'))
const Works = lazy(() => import('./works/Works.jsx'))
const Profile = lazy(() => import('./profile/Profile.jsx'))
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path=""
                    element={
                        <Suspense>
                            <Index />
                        </Suspense>
                    }
                />
                <Route
                    path="works"
                    element={
                        <Suspense>
                            <Works />
                        </Suspense>
                    }
                />
                <Route
                    path="contact"
                    element={
                        <Suspense>
                            <Profile />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
