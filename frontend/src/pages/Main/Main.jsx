import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from 'moment'
import { useLocation, Link } from 'react-router-dom'

import styles from './main.module.scss'

import Category from '../../elements/category/Category'
import Description from '../../elements/description/Description'
import Title from '../../elements/title/Title'

import bgColorImage from '../../assets/bgColorImage.svg'
import mainImg from '../../assets/main__img.png'
import cardOne from '../../assets/cardOne.svg'
import aboutImg from '../../assets/aboutImg.png'
import teacher from '../../assets/teacher.png'
import teach2 from '../../assets/teach2.jpg'
import teach3 from '../../assets/teach3.jpg'
import teach4 from '../../assets/teach4.jpg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import geolocationIcon from '../../assets/geolocationIcon.svg'
import phoneIcon from '../../assets/phoneIcon.svg'
import emailIcon from '../../assets/mailIcon.svg'
import feedback from '../../assets/feedback.png'
import otz2 from '../../assets/otz2.jpg'
import otz3 from '../../assets/otz3.jpeg'
import otz4 from '../../assets/otz4.jpg'
import star from '../../assets/star.svg'
import connect from '../../assets/connect.png'

moment.locale('ru');

const Main = () => {

  const { pathname, hash, key } = useLocation();
  const [news, setNews] = useState(null)

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  const getNews = async () => {
    await axios.get('http://localhost:5000/news/get').then(res => {
      const news = res.data.reverse().slice(0, 3);
      setNews(news)
    }).catch(error => console.log(error))
  }

  useEffect(() => {
    getNews()
  }, [])

  const getStatement = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name: name,
        phone: phone,
        description: description
      }
      
      await axios.post('http://localhost:5000/statements/create', data)
      .then(() => {
        toast.success('Заявление отправлено')
        setName('')
        setPhone('')
        setDescription('')
      })
      .catch(error => console.log(error))
    } catch (error) {
      console.log('getStatement: ' + error)
    }
  } 

  return (
    <>
      <section className={styles.banner}>
          <div className={styles.banner__top}>
            <div className={styles.wrapper}>
              <div className={styles.banner__top__descr}>
                <p className={styles.sub__category__text}>Школьное образование</p>
                <h1 className={styles.main__text}>Лучшее обучение ждёт вас!</h1>
                <p className={styles.sup__description}>Наши учителя найдут персональный подход для каждого ученика!</p>
                <Link to='/#about' className={styles.check__more__btn}>Узнать больше</Link>
              </div>
              <div className={styles.banner__top__photo}>
                <div className={styles.main__photo__box}>
                  <img src={bgColorImage} alt="задний фон" className={styles.bgColorImage}/>
                  <img src={mainImg} alt="Основная картинка" className={styles.mainImg}/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.banner__bottom}>
            <div className={styles.card__box}>
              <div className={styles.card}>
                <img src={cardOne} alt="" className={styles.card__img}/>
                <p className={styles.card__title}>Отличная атмосфера</p>
                <hr></hr>
                <p className={styles.card__description}>
                  У нас проводитьсь большое 
                  количество различных мероприятий,
                  где можно найти новые знакомства
                </p>
              </div>
              <div className={styles.card}>
              <img src={cardOne} alt="" className={styles.card__img}/>
                <p className={styles.card__title}>Глубокий процесс обучения</p>
                <hr></hr>
                <p className={styles.card__description}>
                  Благодаря правильной системе
                  обучения у нас достигается 
                  хорошее усвоение материала</p>
              </div>
              <div className={styles.card}>
              <img src={cardOne} alt="" className={styles.card__img}/>
                <p className={styles.card__title}>Лучшие преподаватели</p>
                <hr></hr>
                <p className={styles.card__description}>
                  Наши преподаватели являются 
                  проффесионалами своего дела и
                  могут научить любого
                </p>
              </div>
            </div>
          </div>
      </section>
      <section id='about' className={styles.about__section}>
        <div className={styles.wrapper}>
          <div className={styles.about__box}>
            <hr />
            <p className={styles.about__title}>О НАС</p>
            <p className={styles.about__descpiption}>
              Наша школа - это место, где каждый ученик найдет
              возможность для раскрытия своего потенциала и 
              достижения успеха. Мы создаем уникальные условия
              для обучения, развивая не только знания и навыки, 
              но и личностные качества каждого ученика. 
            </p>
          </div>
          <div className={styles.about__img__box}>
            <img src={aboutImg} alt="" className={styles.about__img}/>
          </div>
        </div>
      </section>
      <section id="info" className={styles.info__section}>
        <div className={styles.wrapper}>
          <div className={styles.stat__card}>
            <p className={styles.stat}>15K</p>
            <p className={styles.stat__description}>Обученных учеников</p>
          </div>
          <div className={styles.stat__card}>
            <p className={styles.stat}>150K</p>
            <p className={styles.stat__description}>Заявлений ежегодно</p>
          </div>
          <div className={styles.stat__card}>
            <p className={styles.stat}>15</p>
            <p className={styles.stat__description}>Филиалов по всей России</p>
          </div>
          <div className={styles.stat__card}>
            <p className={styles.stat}>23</p>
            <p className={styles.stat__description}>Года вместе</p>
          </div>
        </div>
      </section>
      <section id="teachers" className={styles.teachers__section}>
        <div className={styles.wrapper}>
          <Category>Команда</Category>
          <Title>Наши преподаватели</Title>
          <Description>
            Только опытные специалисты, которые обладают высоким 
            уровнем профессионализма и любовью к своей работе
          </Description>
          <div className={styles.teach__cards}>
            <div className={styles.teach__card}>
              <img src={teacher} alt="учитель" className={styles.teach__img}/>
              <p className={styles.name}>Матвей Миронов</p>
              <p className={styles.speciality}>Преподаватель Информатики</p>
              <div className={styles.social__box}>
                <img src={facebook} alt="фейсбук" />
                <img src={instagram} alt="инстаграм" />
                <img src={twitter} alt="твиттер" />
              </div>
            </div>
            <div className={styles.teach__card}>
              <img src={teach2} alt="учитель" className={styles.teach__img}/>
              <p className={styles.name}>Дмитрий Лавров</p>
              <p className={styles.speciality}>Преподаватель Физики</p>
              <div className={styles.social__box}>
                <img src={facebook} alt="фейсбук" />
                <img src={instagram} alt="инстаграм" />
                <img src={twitter} alt="твиттер" />
              </div>
            </div>
            <div className={styles.teach__card}>
              <img src={teach3} alt="учитель" className={styles.teach__img}/>
              <p className={styles.name}>Елизавета Егорова</p>
              <p className={styles.speciality}>Преподаватель Химии</p>
              <div className={styles.social__box}>
                <img src={facebook} alt="фейсбук" />
                <img src={instagram} alt="инстаграм" />
                <img src={twitter} alt="твиттер" />
              </div>
            </div>
            <div className={styles.teach__card}>
              <img src={teach4} alt="учитель" className={styles.teach__img}/>
              <p className={styles.name}>Игорь Кузнецов</p>
              <p className={styles.speciality}>Преподаватель Математики</p>
              <div className={styles.social__box}>
                <img src={facebook} alt="фейсбук" />
                <img src={instagram} alt="инстаграм" />
                <img src={twitter} alt="твиттер" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="news" className={styles.news__section}>
        <div className={styles.wrapper}>
          <div className={styles.news__header}>
            <Category>Жизнь школы</Category>
            <Title>Новости</Title>
            <Description>Самые свежие новости о жизни нашей школы</Description>
          </div>
          {news && news.reverse().map((item, index) => {
            return index === news.length - 1 && 
            (
              <div key={index} className={styles.main__new}>
                <img src={`http://localhost:5000/${item.image.replace(/\\/g, '/')}`} alt="основная новость" className={styles.mn__img}/>
                <div className={styles.mn__description__box}>
                  <p className={styles.new__title}>{item.title}</p>
                  <p className='text-[#737373] text-sm mb-[50px]'>
                    {item.description}
                  </p>
                  <Link to={`/news/${item._id}`} className={styles.btn__link}>Посмотреть новость</Link>
                </div>
              </div>
            )
          })}
          <div className={styles.second__news}>
            {news && news.reverse().map((item, index) => {
              return  index !== 0 && (
                <div key={index} className={styles.new}>
                  <img src={`http://localhost:5000/${item.image.replace(/\\/g, '/')}`} alt="новость" className={styles.new__img}/>
                  <p className={styles.new__title}>{item.title}</p>
                  <p className={styles.new__description}>{item.description}</p>
                  <p className={styles.new__date}>{moment(item.date).format('L').replaceAll('/', '.')}</p>
                  <Link to={`/news/${item._id}`} className={styles.btn__link}>Перейти</Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section id="contacts" className={styles.contacts__section}>
        <div className={styles.wrapper}>
          <div className={styles.contacts__header}>
            <Category color='green'>Где мы находимся?</Category>
            <Title color='white'>Контакты</Title>
            <Description color='white'>
              Только опытные специалисты, которые обладают высоким 
              уровнем профессионализма и любовью к своей работе
            </Description>
          </div>
          <div className={styles.contacts__info__box}>
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
          <div className={styles.map__box}>
            <div className={styles.map__border}>
              <iframe className={styles.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3A8cfefe9936b537f6c9f2c66e18d08d1208290dc7539633dca51aaddc75d2c89e&amp;source=constructor" width="1000" height="350"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section id="feedbacks" className={styles.feedback__section}>
        <div className={styles.wrapper}>
          <div className={styles.feedback__header}>
            <Category>Отзывы</Category>
            <Title>Как нас оценивают</Title>
            <Description>Более 95% положительных отзывов</Description>
          </div>
          <div className={styles.feedbacks__box}>
            <div className={styles.feedback}>
              <img src={feedback} alt="фото" className={styles.feedback__img}/>
              <Description className={`w-full ${styles.feedback__description}`}>
                Ни разу не пожалела что отдала своего ребёнка в данную школу.
                Ребёнку очень нравится. У ребёнка улучшилась успеваемость и
                ушла социальная замкнутость!
              </Description>
              <div className={styles.stars__box}>
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
              </div>
              <p className={styles.feedback__author}>Варвара Муравьёва</p>
              <Description className='text-center'>Клиент</Description>
            </div>
            <div className={styles.feedback}>
              <img src={otz2} alt="фото" className={styles.feedback__img}/>
              <Description className={`w-full ${styles.feedback__description}`}>
                Я абсолютно уверена, что правильно было выбрано данное учебное заведение для моего ребёнка.
                Ребёнок остался доволен. Его успехи в учёбе заметно улучшились, а социальная активность значительно возросла!
              </Description>
              <div className={styles.stars__box}>
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
              </div>
              <p className={styles.feedback__author}>София Егорова</p>
              <Description className='text-center'>Клиент</Description>
            </div>
            <div className={styles.feedback}>
              <img src={otz3} alt="фото" className={styles.feedback__img}/>
              <Description className={`w-full ${styles.feedback__description}`}>
                Прекрасный коллектив учителей, заботливый и внимательный подход к каждому ученику,
                интересные и разнообразные уроки, широкий спектр кружков и мероприятий - все это
                делает обучение здесь не только эффективным, но и увлекательным.
              </Description>
              <div className={styles.stars__box}>
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
              </div>
              <p className={styles.feedback__author}>Ксения Ефремова</p>
              <Description className='text-center'>Клиент</Description>
            </div>
            <div className={styles.feedback}>
              <img src={otz4} alt="фото" className={styles.feedback__img}/>
              <Description className={`w-full ${styles.feedback__description}`}>
                Профессиональные учителя создают комфортную и дружелюбную атмосферу,
                где каждый ученик чувствует себя важным и поддержанным. 
                Учебный процесс организован эффективно, благодаря чему мой ребёнок получает обширные знания и навыки.
              </Description>
              <div className={styles.stars__box}>
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
                <img src={star} alt="звезда" />
              </div>
              <p className={styles.feedback__author}>Валерия Попова</p>
              <Description className='text-center'>Клиент</Description>
            </div>
          </div>
        </div>
      </section>
      <section id="connection" className={styles.connection__section}>
        <div className={styles.wrapper}>
          <div className={styles.main__info}>
            <div className={styles.connect__header}>
              <Category className='text-[#7C30FF]'>Остались вопросы?</Category>
              <Title>Связаться с нами</Title>
              <form onSubmit={getStatement} className={styles.connect__form}>
                <div className={styles.input__box}>
                  <label htmlFor="name">Введите имя</label>
                  <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" placeholder='Введите имя...' className={styles.input}/>
                </div>
                <div className={styles.input__box}>
                  <label htmlFor="phone">Введите телефон</label>
                  <input value={phone} onChange={e => setPhone(e.target.value)} type="text" id="phone" placeholder='Введите телефон' className={styles.input}/>
                </div>
                <div className={styles.input__box}>
                  <label htmlFor="description">Описание</label>
                  <textarea value={description} onChange={e => setDescription(e.target.value)} type="text" id="description" placeholder='Опишите проблему...' className={styles.input}/>
                </div>
                <button className={styles.form__btn}>Отправить</button>
              </form>
            </div>
          </div>
          <div className={styles.img_box}>
            <img src={connect} alt="связь" className={styles.connect__img}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main
