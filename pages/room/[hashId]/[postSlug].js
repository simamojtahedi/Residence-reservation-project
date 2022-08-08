
import axios from 'axios';
import React from 'react'
import MainContainer from '../../../containers/MainContainer';
import styles from './Room.module.scss'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiBookmark} from 'react-icons/fi'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const RoomPage = ({room}) => {
    const router = useRouter()

    const handleLike = () => {
        console.log(room.data._id)
        axios.put(`http://localhost:5000/api/posts/like/${room.data._id}`)
        .then(res => {
            router.push({
                pathname: router.pathname,
                query: router.query
            }, undefined, {scroll: false})
        })
    }
    
    const handleBookemark = () => {
        console.log(room.data._id)
    }

    return (
        <MainContainer>
            <div className={styles.room_page}>
                <div className={styles.room_cover}>
                    <img src={room.data.coverImage} />
                    <div className={styles.header_info}>
                        <h1 className={styles.title}>{room.data.title}</h1>
                        <div>زمان مطالعه: <span>{room.data.readingTime}</span> دقیقه</div>
                        <div>نظرات : <span>{room.data.commentsCount}</span></div>
                        <div>تاریخ انتشار : <span>{new Date(room.data.createdAt).toLocaleDateString("fa-IR")}</span></div>
                    </div>
                </div>

                <br/>
                <h2 className={styles.title}>دربــاره اتاق :</h2>
                <div dangerouslySetInnerHTML={{__html: room.data.text}} className={styles.content}></div>

                <div className={styles.info}>
                    <h3 className={styles.title}>امکانــات</h3>
                    <div>{room.data.titleBrief}</div>
                </div>

                <div className={styles.room_footer}>
                    <h5>{room.data.briefText}</h5>

                    <div className={styles.actions}>
                        <Button onClick={handleLike}><AiOutlineHeart /></Button>
                        <Button onClick={handleBookemark}><FiBookmark /></Button>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default RoomPage

export async function getServerSideProps (ctx) {
    const {query, req} = ctx;

    const {data: room} = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`, {
        withCredential: true,
        headers: {Cookie: req.headers.cookie || ""}
      })

    return {
        props: {
            room
        }
    }
    
}