import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './photoPage.module.scss'
import PreHeader from '../../elements/preHeader/PreHeader.jsx'
import photo from '../../assets/photo.png'
import { useLocation } from "react-router-dom";

const Photogalery = () => {
  const [photos, setPhotos] = useState(null)
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  async function getPhotos(){
    try {
      await axios.get('http://localhost:5000/material/photo')
      .then(res => {
        const photos = res.data.reverse().slice(0, 6);
        setPhotos(photos)
      })
      .catch(error => console.log(error))  
    } catch (error) {
      console.log('getPhotos: ' + error) 
    }
  }
  useEffect(() => {
    getPhotos()
  }, [])
  return (
    <>
      <PreHeader pageName='Фотогалерея'></PreHeader>
      <div className={styles.galery}>
        <div className={styles.wrapper}>
          {photos && photos.map((item, index) => <img key={index} src={`http://localhost:5000/${item.image.replace(/\\/g, '/')}`} alt="фото" className={styles.img}/>)}
        </div>
      </div>
    </>
  )
}

export default Photogalery
