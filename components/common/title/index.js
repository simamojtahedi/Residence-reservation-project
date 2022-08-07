import React from 'react'
import styles from './title.module.scss'

const Title = (props) => {
  return (
    <div className={styles.main_title}>
        <h4>{props.children}</h4>
        <div></div>
    </div>
  )
}

export default Title