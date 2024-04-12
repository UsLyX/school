import React, { useEffect } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'

import styles from './adminPage.module.scss'
import { useAuth } from '../../context/authContext';

const AdminPage = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const { user } = useAuth()
  useEffect(() => {
    if(user) {
      if(!user.roles.includes("ADMIN")){
        navigate('/')
        toast.error('У вас нет прав доступа')
      }
    }
  }, [user])
  return (
    <div className={styles.adminPage}>
        <div className={styles.navbar}>
            <Link to='/admin/news' className={`${styles.button} ${pathname.endsWith('/news') && styles.active}`}>Новости</Link>
            <Link to='/admin/plane' className={`${styles.button} ${pathname.endsWith('/plane') && styles.active}`}>Расписание</Link>
            <Link to='/admin/materials' className={`${styles.button} ${pathname.endsWith('/materials') && styles.active}`}>Материалы</Link>
        </div>
        <div className='w-[75%]'>
            <Outlet />
        </div>
    </div>
  )
}

export default AdminPage
