import React from 'react'
import { services } from '../../constants'
import './services.css'

const Services = () => {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container">
                {
                    services.map((service, index) => (
                        <div className='services__content' key={index}>
                            <i class={`${service.icon} services__icon`}  ></i>
                            <p className='services__subtitle'>{service.desc}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Services


