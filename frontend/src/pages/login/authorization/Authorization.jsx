import React, { useEffect, useState } from 'react'
import styles from './authorization.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../../context/authContext'

const Authorization = () => {
  const navigate = useNavigate();

  const [loginn, setLoginn] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useAuth() 

  // function check(){
  //   if(user != null){
  //     navigate('/')
  //   }
  // }
  // useEffect(() => {
  //     check()
  // }, [user])

  // useEffect(() => {
  //   check()
  // }, [])

  const { login } = useAuth();

  function loginChange(e){
    setLoginn(e.target.value);
  }
  function passwordChange(e){
    setPassword(e.target.value);
  }

  async function submitFunction(e) {
    e.preventDefault();
    const data = {
      login: loginn,
      password: password
    }
    await axios.post(`${process.env.REACT_APP_API_URL}/login/authorization`, data)
    .then(res => {
      login(res.data.token)
      res.data.user.roles.includes("ADMIN") ? navigate('/admin/news') : navigate('/')
    })
    .catch((e) => console.log(e))
  }

  return (
    <div className={styles.registration}>
      <div className={styles.wrapper}>
        <form onSubmit={submitFunction} className={styles.form}>
          <p className={styles.auth__title}>Авторизация</p>
          <input onChange={loginChange} type="text" placeholder='Введите логин...' className={styles.input}/>
          <input onChange={passwordChange} type="password" placeholder='Введите пароль...' className={styles.input}/>
          <button className={styles.btn}>Войти</button>
        </form>
        <p className={styles.subLogin}>Нет аккаунта? <Link to="/login/registration">Зарегистрироваться</Link></p>
      </div>
    </div>
  )
}

export default Authorization