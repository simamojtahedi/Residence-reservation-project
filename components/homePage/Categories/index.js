import Link from 'next/link'
import React from 'react'
import styles from './Categories.module.scss'

const Categories = (props) => {
    return (
        <div className={styles.categories_contianer}>
            <div className={styles.cat_info}>
                <h2> دستــه بندی‌ها </h2>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                </p>
                <Link href='/'><a> مشاهده دسته بندی‌ها </a></Link>
            </div>
            <div className={styles.categories}>
            {props.categories.data.map(item => (
                <div className={styles.category} key={item._id}>
                    <img src={item.description} />
                    <div>
                        <h5>{item.title}</h5>
                        <h6> دو نوع رو به جنگل و رو به جاده</h6>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Categories