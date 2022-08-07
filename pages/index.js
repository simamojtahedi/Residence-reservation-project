import Categories from "../components/homePage/Categories";
import Comments from "../components/homePage/Comments";
import HomePageHeader from "../components/homePage/Header";
import axios from 'axios'
import Posts from "../components/homePage/Posts";
import MainContainer from "../containers/MainContainer";
import Team from "../components/homePage/Team";
import Aboutus from "../components/homePage/Aboutus";

export default function Home(props) {

  return (
    <MainContainer>
      <HomePageHeader />
      <div style={{padding: '0 4rem'}}>
        <Posts posts={props.posts} />
        <Categories categories={props.categories} />
        <Aboutus />
        <Team />
        <Comments />
      </div>
    </MainContainer>
  )
}

export async function getServerSideProps () {
  const {data: categories} = await axios.get('http://localhost:5000/api/post-category')
  const {data: posts} = await axios.get('http://localhost:5000/api/posts?page=1&limit=10')

  return {
    props: {
      categories: categories,
      posts: posts
    }
  }
}
