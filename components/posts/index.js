
import React from 'react'
import Grid from '@mui/material/Grid';
import Link from 'next/link'
import styles from './Posts.module.scss'

const Posts = ({item}) => {
  return (
        <Grid item className={styles.post}>
            <div className={styles.post_image}>
                <img src={item.coverImage} />
            </div>
            <div className={styles.post_content}>
                <h2>{item.title}</h2>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی  ایپسوم متن ساختگی ایپسوم متن ساختگی نامفهوم از صنعت چاپ 
                </p>
                <div className={styles.actions}>
                    <h5>{item.briefText}</h5>
                    <Link href={`/room/${item.hashId}/${item.slug}`}><a>جزئیــات</a></Link>
                </div>
            </div>
        </Grid>
  )
}

export default Posts