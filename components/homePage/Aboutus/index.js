
import React from 'react'
import Title from '../../common/title'
import styles from './Aboutus.module.scss'

const Aboutus = () => {
  return (
    <div className={styles.about_us_container}>
        <Title> دربــاره ما </Title>
        <div className={styles.about_us}>
            <div className={styles.image}>
                <div><img src='/images/slide4.jpg' /></div>
                <img src='/images/plus.png' className={styles.plus} />
                <img src='/images/dots.png' className={styles.dots} />
            </div>
            <div className={styles.content}>
                <img src='/images/circles.png' className={styles.bg_circles} />
                <img src='/images/circles.png' className={styles.bg_circles_2} />
                <h2> اقامت در برمــودا </h2>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای الات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <h2> امکــانات برمــودا </h2>
                <div>
                    <span>چیلر</span>-<span>مینی‌بار غیررایگان</span>-<span>صندوق امانات در اتاق</span>-<span>چای‌ساز</span>-<span>سرویس بهداشتی فرنگی</span>-<span>تلفن</span>-<span>مبلمان</span>-<span>یخچال</span>-<span>میز و صندلی</span>-<span>صابون</span>-<span>دوش</span>-<span>اینترنت رایگان و نامحدود در اتاق</span>-<span>حوله</span>-<span>سشوار</span>-<span>دمپایی</span>-<span>خمیردندان</span>-<span>مسواک</span>-<span>شامپو</span>-<span>رخت‌آویز</span>-<span>آباژور</span>-<span>کمد لباس</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus