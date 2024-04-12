import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from 'react-select'

import styles from './adminPlane.module.scss'


const urok = [
  { value: '1 Урок', label: '1 Урок' },
  { value: '2 Урок', label: '2 Урок' },
  { value: '3 Урок', label: '3 Урок' },
  { value: '4 Урок', label: '4 Урок' },
  { value: '5 Урок', label: '5 Урок' },
  { value: '6 Урок', label: '6 Урок' },
  { value: '7 Урок', label: '7 Урок' },
  { value: '8 Урок', label: '8 Урок' },
];

const AdminPlane = () => {

  const [classes, setClasses] = useState(null);
  const [days, setDays] = useState(null);
  const [lessons, setLessons] = useState(null);

  const [selectedClass, setSelectedClass] = useState('1 Класс');
  const [selectedDay, setSelectedDay] = useState('Понедельник');
  const [selectedUrok, setSelectedUrok] = useState('1 Урок');
  const [selectedLesson, setSelectedLesson] = useState('Математика');

  const getClasses = async () => {
    try {
      await axios.get('http://localhost:5000/schedule/classes')
      .then(res => setClasses(res.data.map(item => 
      {
        return {value: item.className, label: item.className}
      })))
      .catch(error => console.log(error))
    } catch (error) {
      console.log('getClasses: ' + error)
    }
  }
  const getDays = async () => {
    try {
      await axios.get('http://localhost:5000/schedule/days')
      .then(res => setDays(res.data.map(item => 
      {
        return {value: item.dayName, label: item.dayName}
      })))
      .catch(error => console.log(error))
    } catch (error) {
      console.log('getDays: ' + error)
    }
  }
  const getLessons = async () => {
    try {
      await axios.get('http://localhost:5000/schedule/lessons')
      .then(res => setLessons(res.data.map(item => 
      {
        return {value: item.lessonName, label: item.lessonName}
      })))
      .catch(error => console.log(error))
    } catch (error) {
      console.log('getLessons: ' + error)
    }
  }

  const scheduleUpdate = async () => {
    try {
      const data = {
        selectedClass: selectedClass,
        selectedDay: selectedDay, 
        selectedUrok: selectedUrok,
        selectedLesson: selectedLesson
      }
      await axios.patch('http://localhost:5000/schedule/update', data)
      .then(res => {
        toast.success(res.data.message)
      })
      .catch(error => console.log(error))
    } catch (error) {
      console.log('scheduleUpdate: ' + error)
    }
  }

  useEffect(() => {
    getClasses()
    getDays()
    getLessons()
  }, [])


  return (
    <div className={styles.adminPlane}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Редактировать расписание</p>
        {classes && (
          <div className={styles.select__box}>
            <label htmlFor="classes" className={styles.label}>Выберите класс</label>
            <Select onChange={e => setSelectedClass(e.value)} defaultValue={classes[0]} id='classes' options={classes} placeholder="Выберите класс" className='w-full pt-[15px]'/>
          </div>
        )}
        {days && (
          <div className={styles.select__box}>
            <label htmlFor="days" className={styles.label}>Выберите день недели</label>
            <Select onChange={e => setSelectedDay(e.value)} defaultValue={days[0]} id='days' options={days} placeholder="Выберите день недели" className='w-full pt-[15px]'/>
          </div>
        )}
        <div className={styles.select__box}>
          <label htmlFor="urok" className={styles.label}>Выберите урок</label>
          <Select onChange={e => setSelectedUrok(e.value)} defaultValue={urok[0]} id='urok' options={urok} placeholder="Выберите урок" className='w-full pt-[15px]'/>
        </div>
        {lessons && (
          <div className={styles.select__box}>
            <label htmlFor="lessons" className={styles.label}>Выберите предмет</label>
            <Select onChange={e => setSelectedLesson(e.value)} defaultValue={lessons[0]} id='lessons' options={lessons} placeholder="Выберите предмет" className='w-full pt-[15px]'/>
          </div>
        )}

        <button onClick={scheduleUpdate} className={styles.btn}>Сохранить изменения</button>
      </div>
    </div>
  )
}

export default AdminPlane
