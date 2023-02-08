import React from 'react'

import './App.css'
import Home from './components/home/Home'

import Navbar from './components/navbar/Navbar'

const App = () => {
    return (
        <>
            <Navbar />
            <main className='main'>
                <Home />
            </main>
        </>
    )
}

export default App
