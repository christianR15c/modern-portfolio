import React from 'react'

import './App.css'
import About from './components/about/About'
import Home from './components/home/Home'

import Navbar from './components/navbar/Navbar'

const App = () => {
    return (
        <>
            <Navbar />
            <main className='main'>
                <Home />
                <About />
            </main>
        </>
    )
}

export default App
