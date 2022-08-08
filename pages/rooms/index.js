import React from 'react'
import axios from 'axios'
import MainContainer from '../../containers/MainContainer'
import Posts from '../../components/posts'
import styles from './rooms.module.scss'
import Title from '../../components/common/title'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Rooms = (props) => {
  const router = useRouter()
  console.log(router)

  return (
    <MainContainer>
      <div style={{padding: '0 4rem', marginTop: '50px'}}>
        <Title> اتــاق‌ها </Title>
        <div className={styles.categories}>
          <Link href='/rooms'><a className={router.pathname === '/rooms' && styles.active_link}>همه اتاق‌ها</a></Link>
          {props.categories.data.map(category => (
            <Link href={`/rooms/${category.englishTitle}`} key={category._id}><a className={router.query.categorySlug === category.englishTitle && styles.active_link}>{category.title}</a></Link>
            ))}
        </div>
        <div className={styles.rooms_container}>
          {props.posts.data.docs.map(item => (
              <Posts item={item} key={item._id} />
          ))}
        </div>
      </div>
    </MainContainer>
  )
}
export default Rooms

export async function getServerSideProps ({req}) {
    const {data: categories} = await axios.get('http://localhost:5000/api/post-category')
    const {data: posts} = await axios.get('http://localhost:5000/api/posts?page=1&limit=10' , {
      withCredential: true,
      headers: {Cookie: req.headers.cookie || ""}
    })
  
    return {
      props: {
        categories: categories,
        posts: posts
      }
    }
  }