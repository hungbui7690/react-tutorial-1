import React from 'react'
import { iconLinks } from '../data'
import PageLinks from './PageLinks' // 4.

const Footer = () => {
  return (
    <footer className='section footer'>
      {/* 5. it does not work well since the style is different -> next lecture */}
      <PageLinks />

      {/* <ul className='footer-links'>
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className='footer-link'>
                {link.text}
              </a>
            </li>
          )
        })}
      </ul> */}

      <ul className='footer-icons'>
        {iconLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className='footer-icon'
              >
                <i className={link.icon}></i>
              </a>
            </li>
          )
        })}
      </ul>

      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
