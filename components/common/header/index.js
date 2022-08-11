
import React from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button';
import styles from './Header.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { userSignout } from '../../../redux/user/userActions';

const Header = () => {
  const user = useSelector(state => state.userSignin)
  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header_container}>
          <ul>
            <li><Link href='/'><a>صفحــه اصلی</a></Link></li>
            <li><Link href='/rooms'><a>اتــاق‌ها</a></Link></li>
            <li><Link href='/about-us'><a>دربــاره ما</a></Link></li>
            <li><Link href='/contact-us'><a>تمــاس با ما</a></Link></li>
          </ul>
          <div>
            {user?.user ?
              <div>
                <Button onClick={() => dispatch(userSignout())} className={styles.account}>{user?.user.name} | خروج</Button>
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