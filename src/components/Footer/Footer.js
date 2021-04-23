import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
    return(
        <div>
  
  <footer className="footer-distributed">
    <div className="footer-left">
      <h3>Exchange<span>Book</span></h3>
      <p className="footer-links">
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">Price</a>
        <a href="#">About</a>
        <a href="#">Faq</a>
        <a href="#">Contact</a>
      </p>
      <p className="footer-company-name"> HCMC University of Technical and Education © 2019</p>
    </div>
    <div className="footer-center">
      <div className='footer-label'>
        <FontAwesomeIcon className='icon' icon = {faMarker} />
        <p><span>01 Vo Van Ngan </span> TP Thu Duc, TP Ho Chi Minh</p>
      </div>
      <div className='footer-label'>
      <FontAwesomeIcon className='icon' icon = {faPhone} />
        <p> 0839890931 </p>
      </div>
      <div className='footer-label'>
      <FontAwesomeIcon className='icon' icon = {faEnvelope} />
        <p>contact@exchangebook.com</p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <span>About the webpage</span>
        This webpage buying, selling, exchanging old books in Ho Chi Minh City area 
      </p>
    </div>
    <div className="footer-icon">
      <a href="#" className='icon'><FontAwesomeIcon icon = {faFacebook} /></a>
      <a href="#" className='icon'><FontAwesomeIcon icon = {faTwitter} /></a>
      <a href="#" className='icon'><FontAwesomeIcon icon = {faInstagram} /></a>
    </div>
  </footer>
</div>
    )   
}
