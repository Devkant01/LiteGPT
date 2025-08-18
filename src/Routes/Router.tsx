import React from 'react'
import { Routes, Route } from 'react-router'
import ChatUI from '../pages/ChatUI'
import Home from '../pages/Home'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/liteChat' element={<ChatUI/>} />
        </Routes>
    )
}

export default Router