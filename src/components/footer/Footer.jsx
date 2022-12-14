import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Mauricio-Guerrero-Arciniegas"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/mauricio-guerrero-827582220/"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mauricio Guerrero - All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer