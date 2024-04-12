import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './videoPage.module.scss'
import PreHeader from '../../elements/preHeader/PreHeader.jsx'
import { useLocation } from "react-router-dom";

const Videogalery = () => {
  const [videos, setVideos] = useState(null)
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  async function getVideos(){
    try {
      await axios.get('http://localhost:5000/material/video')
      .then(res => {
        const videos = res.data.reverse().slice(0, 12);
        setVideos(videos)
      })
      .catch(error => console.log(error))  
    } catch (error) {
      console.log('getVideos: ' + error) 
    }
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <>
      <PreHeader pageName='Видеогалерея'></PreHeader>
      <div className={styles.galery}>
        <div className={styles.wrapper}>
          {videos && videos.map((item, index) => {
              return (
                <video controls key={index} className={styles.video} >
                  <source src={`http://localhost:5000/${item.video.replace(/\\/g, '/')}`} type="video/mp4"/>
                </video>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Videogalery
