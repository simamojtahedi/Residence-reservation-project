
import React from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button';
import { useAuth, useAuthActions } from '../../../context/AuthContext'
import styles from './Header.module.scss'

const Header = () => {
  const user = useAuth()
  const dispatch = useAuthActions()

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header_container}>
          <ul>
            <li><Link href='/'><a>صفحــه اصلی</a></Link></li>
            <li><Link href='/rooms'><a>اتــاق‌ها</a></Link></li>
            <li><Link href='/'><a>دربــاره ما</a></Link></li>
            <li><Link href='/'><a>تمــاس با ما</a></Link></li>
          </ul>
          <div>
            {user?.user ?
              <div>
                <Link href='/'><a className={styles.account}>{user?.user.name}</a></Link>
                <Button onClick={() => dispatch({type: "SIGNOUT"})}>خروج</Button>
              </div>
            :
              <Link href='/sign-in'><a className={styles.account}>ورود</a></Link>
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header