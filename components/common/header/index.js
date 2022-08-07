
import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header_container}>
          <ul>
            <li><Link href='/'><a>صفحــه اصلی</a></Link></li>
            <li><Link href='/'><a>رزرو فــوری</a></Link></li>
            <li><Link href='/'><a>اتــاق‌ها</a></Link></li>
            <li><Link href='/'><a>دربــاره ما</a></Link></li>
            <li><Link href='/'><a>تمــاس با ما</a></Link></li>
          </ul>
          <Link href='/'><a  className={styles.account}>حساب کاربــری</a></Link>
        </div>
      </div>
    </header>
  )
}

export default Header