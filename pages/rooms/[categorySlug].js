import React from 'react'
import axios from 'axios'
import MainContainer from '../../containers/MainContainer'
import Posts from '../../components/posts'
import styles from './rooms.module.scss'
import Title from '../../components/common/title'
import queryString from 'query-string'
import Link from 'next/link'
import { useRouter } from 'next/router'

const CategoryPage = (props) => {
  const router = useRouter()
  console.log(router.query.categorySlug)

    return (
      <MainContainer>
          <div style={{padding: '0 4rem', marginTop: '50px'}}>
            <Title> اتــاق‌ها </Title>
            <div className={styles.categories}>
            <Link href='/rooms' className={styles.category} ><a>همه اتاق‌ها</a></Link>
              {props.categories.data.map(category => (
                <Link href={`/rooms/${category.englishTitle}`} className={styles.category} key={category._id}><a className={router.query.categorySlug === category.englishTitle && styles.active_link}>{category.title}</a></Link>
              ))}
            </div>
            <div className={styles.rooms_container}>
              {props.posts.data.docs.map(item => (
                  <Posts item={item}  key={item._id} />
              ))}
            </div>
          </div>
      </MainContainer>
    )
}

export default CategoryPage

export async function getServerSideProps (ctx) {
    const {query, req} = ctx;
    const {data: categories} = await axios.get('http://localhost:5000/api/post-category')
    const {data: posts} = await axios.get(`http://localhost:5000/api/posts?${queryString.stringify(query)}&page=1&limit=10`, {
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