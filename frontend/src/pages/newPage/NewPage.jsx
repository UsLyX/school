import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import styles from './newPage.module.scss'
import PreHeader from '../../elements/preHeader/PreHeader'
import photo from '../../assets/main_new.png'
import { Link, useParams } from 'react-router-dom'

const NewPage = () => {
  const params = useParams();
  const navigate = useNavigate()
  const [currentNew, setCurrentNew] = useState(null);

  async function getNew() {
    try {
      await axios.get(`http://localhost:5000/news/${params.id}`, {newId: params.id})
      .then(res => {
          setCurrentNew(res.data)
      })
      .catch(error => error.response.status === 400 && navigate('/'))
    } catch (error) {
      console.log('getNew: ' + error)
    }
  }

  useEffect(() => {
    getNew()
  }, [])

  return (
    <div className={styles.newPage}>
        <PreHeader pageName='Новости'></PreHeader>
        <div className={styles.wrapper}>
          <p className={styles.new__title}>{currentNew && currentNew.title}</p>
          <div className={styles.img__box}>
            <img src={currentNew && `http://localhost:5000/${currentNew.image.replace(/\\/g, '/')}`} alt="фото" className={styles.img}/>
          </div>
          <div className={styles.new__description__box}>
            <p className={styles.new__description}>
              {currentNew && currentNew.description}
            </p>
            <p className={styles.new__date}>{currentNew && moment(currentNew.date).format('L').replaceAll('/', '.')}</p>
            <Link to='/' className={styles.btn}>На главную</Link>
          </div>
        </div>
    </div>
  )
}

export default NewPage
