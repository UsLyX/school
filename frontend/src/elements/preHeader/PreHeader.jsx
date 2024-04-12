import React from 'react'
import styles from './preHeader.module.scss'

const preHeader = ({pageName}) => {
  return (
    <div className={styles.preHeader}>
        <div className={styles.wrapper}>
            <p className={styles.logo__text}>ResultSchool</p>
            <p className={styles.pageName}>{pageName}</p>     
        </div>
    </div>
  )
}

export default preHeader
