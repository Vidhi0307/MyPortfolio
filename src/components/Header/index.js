import { useState } from 'react'
import DP from '../../assets/images/vid.jpg'
import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
 } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
 

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/">
       
        <img src={DP} alt="Logo" />
       
      </Link>
      <nav className="">
        <NavLink 
          exact="true"
          activeclassname="active"
          href="/"
         >
          <FontAwesomeIcon className='fa-2x' icon={faHome } color="#4d4d4e" />
        </NavLink>
        <NavLink 
         exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          >
          <FontAwesomeIcon  className='fa-2x' icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
         exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
                 >
          <FontAwesomeIcon className='fa-2x' icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
         exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"         
        >
          <FontAwesomeIcon className='fa-2x' icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
         </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/vidhi-sharma-0559b9a0/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon  fa-2x"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Vidhi0307"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
             
              color="#4d4d4e"
              className="anchor-icon fa-2x"
            />
          </a>
        </li>
        
       
      </ul>
      <FontAwesomeIcon 
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Header