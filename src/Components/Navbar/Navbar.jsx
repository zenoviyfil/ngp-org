import React from 'react'
import css from './Navbar.module.css'
import { SocialIcon } from 'react-social-icons'

const Navbar = () => {
  return (
    <div className={css.headerNavbar}>
      {/* <div className={css.logoDiv}>
        <img className={css.logo} src="" alt="logo" />
        <a className={css.npgLink} href="#index.html">
          <p>NEW POWERLIFTING GENERATION</p>
        </a>
      </div> */}
      <div className={css.linksBar}>
        <ul className={css.navMenu}>
          <li><a className={css.navMenuBtn} href='#index.html'>Головна</a></li>
          <li><a className={css.navMenuBtn} href='#blog.html'>Блог</a></li>
          <li><a className={css.navMenuBtn} href='#calendar.html'>Календар</a></li>
          <li><a className={css.navMenuBtn} href='#about.html'>Про нас</a></li>
        </ul>
        <ul className={css.socials}>
          <li>
            <SocialIcon  className={css.socialLink} bgColor='none' fgColor='black' url='https://facebook.com' />
          </li>
          <li>
            <SocialIcon  className={css.socialLink} bgColor='none' fgColor='black' url='https://twitter.com' />
          </li>
          <li>
            <SocialIcon  className={css.socialLink} bgColor='none' fgColor='black' url='https://instagram.com' />
          </li>
          <li>
            <SocialIcon  className={css.socialLink} bgColor='none' fgColor='black' url='https://youtube.com' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar