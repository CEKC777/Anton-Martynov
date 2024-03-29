import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './index/Index.jsx'
import Navbar from './common/Navbar.jsx'
import Works from './works/Works.jsx'
import Profile from './profile/Profile.jsx'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="" element={<Index />} />
                <Route path="works" element={<Works />} />
                <Route path="contact" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
