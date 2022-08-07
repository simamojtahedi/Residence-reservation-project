import React from 'react'
import Title from '../../common/title'
import styles from './Comments.module.scss'

const Comments = () => {
  return (
    <div>
        <Title> نظــرات شما </Title>
        <div className={styles.comments_container}>
            <img src='/images/map.png' />

            <div className={styles.comment_1}>
                <div className={styles.comment_header}><span>حامد غفاری</span><span>1401/02/18</span></div>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            </div>

            <div className={styles.comment_2}>
                <div className={styles.comment_header}><span>حامد غفاری</span><span>1401/02/18</span></div>
                <p>من حامد نیستم و این درست نیست</p>
            </div>

            <div className={styles.comment_3}>
                <div className={styles.comment_header}><span>حامد غفاری</span><span>1401/02/18</span></div>
                <p>من حامد نیستم و این درست نیست</p>
            </div>

            <div className={styles.comment_4}>
                <div className={styles.comment_header}><span>حامد غفاری</span><span>1401/02/18</span></div>
                <p>من حامد نیستم و این درست نیست</p>
            </div>
        </div>

    </div>
  )
}

export default Comments