import React from 'react'

import './App.css'
import About from './components/about/About'
import Home from './components/home/Home'

import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills'

const App = () => {
    return (
        <>
            <Navbar />
            <main className='main'>
                <Home />
                <About />
                {/* <Skills /> */}
            </main>
        </>
    )
}

export default App
