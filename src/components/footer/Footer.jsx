import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Christian</h1>

                <ul className='footer__list'>
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#testimonial" className="footer__link">Testimonial</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-facebook"></i>
                    </a>
                    <a href="" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-twitter"></i>
                    </a>
                    <a href="https://twitter.com/habinezac15" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-instagram"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Christian. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer
