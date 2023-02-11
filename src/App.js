import React from 'react'

import './App.css'
import About from './components/about/About'
import Home from './components/home/Home'

import Navbar from './components/navbar/Navbar'
import Qualification from './components/qualification/Qualification'
import Services from './components/service/Services'
import Skills from './components/skills/Skills'
import Testimonials from './components/testimonial/Testimonials'

const App = () => {
    return (
        <>
            <Navbar />
            <main className='main'>
                <Home />
                <About />
                {/* <Skills /> */}
                <Services />
                <Qualification />
                <Testimonials />
            </main>
        </>
    )
}

export default App
