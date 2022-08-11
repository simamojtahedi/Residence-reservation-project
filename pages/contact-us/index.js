
import React from 'react'
import Title from '../../components/common/title'
import MainContainer from '../../containers/MainContainer'
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { RiTelegramLine } from 'react-icons/ri'
import styles from './ContactUs.module.scss'

const ContactUs = () => {
  return (
    <MainContainer>
        <div className='p-4'>
            <Title> تمــاس با ما </Title>
            <p style={{marginBottom: '3rem'}}>
                اجازه دهید صفحه درباره ما بگوید شرکت چگونه شروع به کار کرده است. یک روایت کوتاهی را به اشتراک بگذارید که انگیزه‌ای برای تشکیل شرکت بوده است. یک نوار زمان (timeline) از آنچه که شرکت انجام داده، ارائه کنید. در این صفحه بیان کنید که چرا شرکت شما در مورد آنچه که انجام می‌دهید پر اشتیاق است و اجازه دهید تا افراد با مطالعه این صفحه تا حد بیشتری با شما و نقاط قوتی که شرکت شما با سایر رقبا در حوزه کاری خود دارد، آشنا شوند. مشتریان دوست دارند وضعیت یک کسب و کار را درک کنند.
            </p>

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
    </MainContainer>
  )
}

export default ContactUs