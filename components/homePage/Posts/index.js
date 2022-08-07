
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import styles from './Posts.module.scss'
import Title from "../../common/title";
import Link from "next/link";

const Posts = (props) => {
    console.log(props)
    return (
        <div>
            <Title> اتــاق‌ها </Title>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{ clickable: true }}
                navigation={false}
                modules={[Pagination]}
                className={styles.posts}
            >
                {props.posts.data.docs.map(item => (
                    <SwiperSlide className={styles.post} key={item._id}>
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
                                <Link href='/'><a>جزئیــات</a></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Posts

