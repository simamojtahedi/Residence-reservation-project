import React from 'react'
import styles from './Header.module.scss'
import {AiOutlineInstagram, AiOutlineYoutube} from 'react-icons/ai'
import {RiTelegramLine} from 'react-icons/ri'
import {BiPhoneCall} from 'react-icons/bi'
import {MdOutlinePhoneIphone} from 'react-icons/md'
import {BsChevronRight} from 'react-icons/bs'
import Link from 'next/link'

const HomePageHeader = () => {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.container}`}>
        <img src='/images/circles.png' className={styles.bg_circles} />
        <img src='/images/circles.png' className={styles.bg_circles_2} />
        <div className={styles.content_container}>
          <div className={styles.main_content}>
            <h1>مجموعه اقامتگاه جنگلی برمودا</h1>
            <p>
              گردشگران و توریست های داخلی و خارجی می توانند از جاذبه های طبیعی و گردشگری شهر سپیدان همچون تنگه گمبیل، تنگ دلخان، چشمه و برم شش پیر و تنگ تیزاب بازدید نمایند و همچنین تفریحاتی چون تیراندازی، پوشیدن لباس محلی و عکاسی، کوهنوردی و پیاده روی و بازدید از زندگی عشایری و روستایی، اسب سواری و آفرود لذت ببرند.
            </p>
            <div className={styles.actions}>
              <Link href='/'><a><BsChevronRight /> اطلاعات بیشتر </a></Link>
              <Link href='/'><a> رزرو فوری </a></Link>
            </div>
          </div>
          <div className={styles.main_image}>
            <img src='/images/a-frame.jpg' />
          </div>
        </div>
        <div className={styles.contact_us}>
          <h5>ارتباط با ما</h5>
          <div className={styles.line}></div>
          <div className={styles.items}>
            <div><MdOutlinePhoneIphone /><span>02199889988</span></div>
            <div><BiPhoneCall /><span>09120000000</span></div>
            <div><AiOutlineInstagram /><span>@bermooda</span></div>
            <div><RiTelegramLine /><span>@bermooda</span></div>
            <div><AiOutlineYoutube /><span>@bermooda</span></div>
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.mouse}></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default HomePageHeader