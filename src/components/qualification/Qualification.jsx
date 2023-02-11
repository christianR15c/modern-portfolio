import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {

    const [toggle, setToggle] = useState(1)

    const toggleTab = (index) => {
        setToggle(index)
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <p className="section__subtitle">My personal journey</p>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={`qualification__button button--flex ${toggle === 1 ? 'qualification__active' : ''}`}
                        onClick={() => toggleTab(1)}>
                        <i className='uil uil-graduation-cap'></i>
                        Education
                    </div>
                    <div
                        className={`qualification__button button--flex ${toggle === 2 ? 'qualification__active' : ''}`}
                        onClick={() => toggleTab(2)}>
                        <i className='uil uil-briefcase-alt'></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={`qualification__content ${toggle === 1 ? 'qualification__content-active' : ''}`}>
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Andela technical Leadership Program</h3>
                                <span className="qualification__subtitle">Andela</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    2021 - 2022
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Fullstack Engineer career path course</h3>
                                <span className="qualification__subtitle">CodeCademy</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    2021 - 2022
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">AWS cloud developer course</h3>
                                <span className="qualification__subtitle">Udacity</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    June - August 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Complete Javascript course</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    2019 - 2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>

                    <div className={`qualification__content ${toggle === 2 ? 'qualification__content-active' : ''}`}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Fullstack Developer</h3>
                                <span className="qualification__subtitle">SmartHire</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Software Developer apprentice</h3>
                                <span className="qualification__subtitle">Rodhes & Scwarz Asia Pte, Rwanda Branch</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    Aug - Dec 2021
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">oftware Developer</h3>
                                <span className="qualification__subtitle">LitSoft</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    2019 - 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Qualification