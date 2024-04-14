import React, { useState, useEffect } from 'react'
import styles from './registration.module.scss'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Registration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('jwt') && localStorage.getItem('jwt') !== null){
      navigate('/')
    }  
  }, [])

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function nameChange(e) {
    setName(e.target.value);
  }
  function emailChange(e) {
    setEmail(e.target.value);
  }
  function loginChange(e) {
    setLogin(e.target.value);
  }
  function passwordChange(e) {
    setPassword(e.target.value);
  }

  async function submitFunc(e) {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      login: login,
      password: password
    };
    await axios
      .post(`${process.env.REACT_APP_API_URL}/login/registration`, data)
      .then(() => navigate('/login/authorization'))
      .catch((e) => console.log(e));
  }


  return (
    <div className={styles.registration}>
      <div className={styles.wrapper}>
        <form onSubmit={submitFunc} className={styles.form}>
          <p className={styles.reg__title}>Регистрация</p>
          <input onChange={nameChange} type="text" placeholder='Введите ваше имя...' className={styles.input}/>
          <input onChange={emailChange} type="email" placeholder='Введите почту...' className={styles.input}/>
          <input onChange={loginChange} type="text" placeholder='Придумайте логин...' className={styles.input}/>
          <input onChange={passwordChange} type="password" placeholder='Придумайте пароль...' className={styles.input}/>
          <button className={styles.btn}>Зарегистрироваться</button>
        </form>
        <p className={styles.subLogin}>Уже есть аккаунт? <Link to="/login/authorization">Войти</Link></p>
      </div>
    </div>
  )
}

export default Registration
