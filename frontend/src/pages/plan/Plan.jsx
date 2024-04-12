import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './plan.module.scss'
import Select from 'react-select'
import PreHeader from '../../elements/preHeader/PreHeader';
import { useLocation } from "react-router-dom";


const Plan = () => {
  const { pathname } = useLocation()
  const [classes, setClasses] = useState(null);
  const [selectedClass, setSelectedClass] = useState('1 Класс');
  const [currentSchedule, setCurrentSchedule] = useState(null);


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

  const getSchedule = async () => {
    try {
      await axios.post('http://localhost:5000/schedule', {selectedClass: selectedClass})
      .then(res => setCurrentSchedule(res.data))
      .catch(error => console.log(error))
    } catch (error) {
      console.log('getSchedule: ' + error)
    }
  }


  useEffect(() => {
    getClasses()
    getSchedule()
  }, [])

  useEffect(() => {
    getSchedule()
  }, [selectedClass])


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={styles.plane}>
      <PreHeader pageName='Учебный план'></PreHeader>
      { classes && (
        <>
        <div className={styles.wrapper}>
          <Select defaultValue={classes[0]} onChange={e => setSelectedClass(e.value)} options={classes} placeholder="Выберите класс" className='my-[30px] w-[20%]'/>
        </div>
        <div className={styles.plane__box}>
          <div className={styles.wrapper}>
            {currentSchedule && currentSchedule.classRasp.map((item, index) => (
            <div className={styles.plane__item}>
              <p className={styles.plane__date}>{item.dayName}</p>
              <div className={styles.plane__cols}>
                <div className={styles.plane__col}>
                  {item.lessons.map((lesson, index) => index < 4 && (
                    <div className={styles.plane__lesson}>
                      <p className={styles.lesson}>{index + 1} урок</p>
                      <p className={styles.lesson__name}>{lesson}</p>
                    </div>
                  ))}
                </div>
                <div className={styles.plane__col}>
                  {item.lessons.map((lesson, index) => index >= 4 && (
                    <div className={styles.plane__lesson}>
                      <p className={styles.lesson}>{index + 1} урок</p>
                      <p className={styles.lesson__name}>{lesson}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        </>
      )}
    </div>  
  )
}

export default Plan
