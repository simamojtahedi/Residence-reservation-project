import { TextField, Button } from '@mui/material'
import React from 'react'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { RiTelegramLine } from 'react-icons/ri'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer_container}>
        <div className={`container ${styles.container}`}>
            <div className={styles.footer_map}>
                <div className={styles.footer_title}>
                    <h4>با ما از طریق اطلاعات زیر در ارتــباط باشید </h4>
                </div>
                <div className={styles.contact_info}>
                    <div className={styles.footer_address}>
                        <h6>آدرس</h6>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                    <div className={styles.footer_contact}>
                        <h6>تلفن</h6>
                        <div><span>021-99889988</span><span>09120000000</span><span>ساعات پاسخ گویی 8 تا 20</span></div>
                    </div>
                    <div className={styles.footer_social}>
                        <h6>شبکه های اجتماعی</h6>
                        <div className={styles.res_social}>
                            <div><AiOutlineInstagram /><span>@bermooda</span></div>
                            <div><RiTelegramLine /><span>@bermooda</span></div>
                            <div><AiOutlineYoutube /><span>@bermooda</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer_info}>
                <div>
                    <h4> دربــاره ما </h4>
                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                    </p>
                </div>
                <div className={styles.feed}>
                    <div>
                        <TextField placeholder='لطفا آدرس ایمیــل خود را وارد کنید' variant="outlined" />
                        <Button>عضویت</Button>
                    </div>
                    <p> برای دریافت آخرین اخبار، ایمیل خود را برای ما وارد کنید.</p>
                </div>
                <h6> تمامی حقوق برای اقامتگاه برمــودا محفوظ است</h6>
            </div>
        </div>
    </div>
  )
}

export default Footer