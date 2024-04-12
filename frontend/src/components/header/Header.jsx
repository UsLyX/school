import React, { useState, useEffect } from 'react'
import styles from './header.module.scss'
import arrow from '../../assets/Vector.svg'
import exit from '../../assets/exit.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

const Header = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth();
  async function handleLogout() {
    try {
      logout()
    } catch (error) {
      console.log(error)
    } 
  }
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to='/' className={styles.logo}>ResultSchool</Link>
        {user ?
          (user.roles.includes("ADMIN") ? (
            <nav className={styles.navigation}>
              <Link to='/'>Главная</Link>
              <Link to='/photogalery'>Фотогалерея</Link>
              <Link to='/videogalery'>Видеогалерея</Link>
              <Link to='/plane'>Учебный план</Link>
              <Link to='/admin/news'>Панель администратора</Link>
            </nav>
          )
            : (
            <nav className={styles.navigation}>
              <Link to='/'>Главная</Link>
              <Link to='/photogalery'>Фотогалерея</Link>
              <Link to='/videogalery'>Видеогалерея</Link>
              <Link to='/plane'>Учебный план</Link>
            </nav>
            )
          )
          :
          (
            <nav className={styles.navigation}>
              <Link to='/'>Главная</Link>
              <Link to='/photogalery'>Фотогалерея</Link>
              <Link to='/videogalery'>Видеогалерея</Link>
              <Link to='/plane'>Учебный план</Link>
            </nav>
          )
        }
        {
          user != null ? 
          (
            <Link onClick={handleLogout} to='/login/authorization' className={styles.exit}>
              <span className="mr-[10px]">{user.login}</span>
              <img src={exit} alt="выйти" />
            </Link>
          )
          :
          (
            <Link to='/login/authorization' className={styles.login}>
              <span className="mr-[10px]">Войти</span>
              <img src={arrow} alt="войти" />
            </Link>
          )
        }
      </div>
    </header>
  )
}

export default Header
