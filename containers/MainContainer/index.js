
import React from 'react'
import Footer from '../../components/common/footer'
import Header from '../../components/common/header'

const MainContainer = (props) => {
  return (
    <>
        <Header />
        <div>{props.children}</div>
        <Footer />
    </>
  )
}

export default MainContainer