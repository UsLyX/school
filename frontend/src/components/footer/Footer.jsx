import React from 'react'
import styles from './footer.module.scss'
import { Link } from 'react-router-dom'
import geolocationIcon from '../../assets/geoWhite.svg'
import phoneIcon from '../../assets/phoneWhite.svg'
import emailIcon from '../../assets/mailWhite.svg'
import facebook from '../../assets/fbViolet.svg'
import instagram from '../../assets/instViolet.svg'
import twitter from '../../assets/twViolet.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__top}>
            <div className={styles.wrapper}>
                <div className={`${styles.col} ${styles.col1}`}>
                    <Link to='/' className={styles.logo__text}>ResultSchool</Link>
                    <Link to='/#about' className={styles.link}>О нас</Link>
                    <Link to='/#teachers' className={styles.link}>Преподаватели</Link>
                    <Link to='/#news' className={styles.link}>Новости</Link>
                    <Link to='/#contacts' className={styles.link}>Контакты</Link>
                </div>
                <div className={`${styles.col} ${styles.col2}`}>
                    <Link to='/#feedbacks' className={styles.link}>Отзывы</Link>
                    <Link to='/#connection' className={styles.link}>Связаться с нами</Link>
                    <Link to='/plane' className={styles.link}>Учебный план</Link>
                </div>
                <div className={`${styles.col} ${styles.col3}`}>
                    <p className={styles.category}>Материалы</p>
                    <Link to='/photogalery' className={styles.link}>Фотогалерея</Link>
                    <Link to='/videogalery' className={styles.link}>Видеогалерея</Link>
                </div>
                <div className={`${styles.col} ${styles.col4}`}>
                  <p className={styles.category}>Контакты</p>
                  <div className={styles.contact__info}>
                    <img src={geolocationIcon} alt="локация" />
                    <p className={styles.contact__info_p}>Воронеж, улица 9 Января, 30</p>
                  </div>
                  <div className={styles.contact__info}>
                    <img src={phoneIcon} alt="телефон" />
                    <p className={styles.contact__info_p}>+7 (900) 999-99-99</p>
                  </div>
                  <div className={styles.contact__info}>
                    <img src={emailIcon} alt="почта" />
                    <p className={styles.contact__info_p}>resultschool@gmail.com</p>
                  </div>
                </div>
            </div>
        </div>
        <div className={styles.footer__bottom}>
            <div className={styles.wrapper}>
                <p className={styles.copyright}>ResultSchool | Все права защищены</p>
                <div className={styles.social__box}>
                    <img src={facebook} alt="фейсбук" />
                    <img src={instagram} alt="инстаграм" />
                    <img src={twitter} alt="твиттер" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
