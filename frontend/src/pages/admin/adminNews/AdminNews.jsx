import React, {useState, useRef} from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'

import styles from './adminNews.module.scss'

import fileImg from '../../../assets/fileImg.svg'

const AdminNews = () => {
  const fileInputRef = useRef();
  
  const [image, setImage] = useState('')
  const [title, setTtile] = useState('')
  const [description, setDescription] = useState('')

  const sendNew = async () => {
    try {
      const formData = new FormData()
      formData.append('newImg', image)
      formData.append('title', title)
      formData.append('description', description)

      await axios.post(`${process.env.REACT_APP_API_URL}/news/create`, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        } 
      })
      .then(() => {
        fileInputRef.current.value = '';
        setTtile('')
        setDescription('')
        toast.success('Новость опубликована')
      })
      .catch(error => console.log(error))

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.adminNews}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Создание новости</p>
        <p className={styles.photo__label}>Прикрепите фото</p>
        <label htmlFor='file' className={styles.photo__box}>
            <img id="upload-image" src={fileImg} className={styles.fileImg}/>
            <input ref={fileInputRef} onChange={e => setImage(e.target.files[0])} type="file" id="file" className={styles.file}/>
        </label>
        <div className={styles.news__box}>
            <label htmlFor="description">Описание новости</label>
            <input value={title} id="description" onChange={e => setTtile(e.target.value)} placeholder='Введите заголовок...' />
        </div>
        <div className={styles.news__box}>
            <label htmlFor="description">Описание новости</label>
            <textarea value={description} id="description" onChange={e => setDescription(e.target.value)} placeholder='Напишите новость...'></textarea>
        </div>
        <button onClick={sendNew} className={styles.btn}>Опубликовать</button>
      </div>
    </div>
  )
}

export default AdminNews
