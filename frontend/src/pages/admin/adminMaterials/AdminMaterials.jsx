import React, { useState, useRef } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from './adminMaterials.module.scss'

import fileImg from '../../../assets/fileImg.svg'

const AdminMaterials = () => {
    const photoInput = useRef()
    const videoInput = useRef()

    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

    async function sendPhoto() {
        try {
            const formData = new FormData();
            formData.append('photo', image)

            await axios.post("http://localhost:5000/material/photo/create", formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then(res => {
                photoInput.current.value = '';
                toast.success(res.data.message);
            })
            .catch(error => console.log(error))
        } catch (error) {
            console.log('sendPhoto: ' + error)
        }
    }      

    async function sendVideo() {
        try {
            const formData = new FormData();
            formData.append('video', video)

            await axios.post("http://localhost:5000/material/video/create", formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then(res => {
                videoInput.current.value = '';
                toast.success(res.data.message);
            })
            .catch(error => console.log(error))
        } catch (error) {
            console.log('sendPhoto: ' + error)
        }
    }     
    return (
        <div className={styles.adminMaterials}>
            <div className={styles.wrapper}>
                <div className={styles.laod__box}>
                    <p className={styles.title}>Загрузка фотографии</p>
                    <p className={styles.photo__label}>Прикрепите фото</p>
                    <label htmlFor='photo' className={styles.photo__box}>
                        <img id="upload-photo" src={fileImg} className={styles.fileImg}/>
                        <input ref={photoInput} onChange={e => setImage(e.target.files[0])} type="file" id="photo" className={styles.file}/>
                    </label>
                    <button onClick={sendPhoto} className={styles.btn}>Загрузить фотографию</button>
                </div>
                <div className={styles.laod__box}>
                    <p className={styles.title}>Загрузка видео</p>
                    <p className={styles.photo__label}>Загрузите видео</p>
                    <label htmlFor='video' className={styles.photo__box}>
                        <img id="upload-video" src={fileImg} className={styles.fileImg}/>
                        <input ref={videoInput} onChange={e => setVideo(e.target.files[0])} type="file" id="video" className={styles.file}/>
                    </label>
                    <button onClick={sendVideo} className={styles.btn}>Загрузить видеоролик</button>
                </div>
            </div>
        </div>
    )
    }

export default AdminMaterials
