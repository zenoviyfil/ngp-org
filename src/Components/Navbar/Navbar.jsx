import React from 'react'
import css from './Navbar.module.css'
import { SocialIcon } from 'react-social-icons'

const Navbar = () => {
  return (
    <div className={css.headerNavbar}>
      <a href="#index.html">
        <img className={css.logo} src="" alt="logo" />
        <p className={css.npg}>NEW POWERLIFTING GENERATION</p>
      </a>
      <div className={css.linksBar}>
        <ul className={css.navMenu}>
          <li className={css.navMenuBtn}>Головна</li>
          <li className={css.navMenuBtn}>Блог</li>
          <li className={css.navMenuBtn}>Календар</li>
          <li className={css.navMenuBtn}>Про нас</li>
        </ul>
        <ul className={css.socials}>
          <li className={css.socialLink}>
            <a href="" target="_blank" title="Facebook">
            <SocialIcon bgColor='none' fgColor='black' url='https://facebook.com' />
            </a>
          </li>
          <li className={css.socialLink}>
            <a href="" target="_blank" title="Facebook">
            <SocialIcon bgColor='none' fgColor='black' url='https://twitter.com' />
            </a>
          </li>
          <li className={css.socialLink}>
            <a href="" target="_blank" title="Facebook">
            <SocialIcon bgColor='none' fgColor='black' url='https://instagram.com' />
            </a>
          </li>
          <li className={css.socialLink}>
            <a href="" target="_blank" title="Facebook">
            <SocialIcon bgColor='none' fgColor='black' url='https://youtube.com' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar