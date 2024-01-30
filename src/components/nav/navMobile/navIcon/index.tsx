'use client'
import React, { useState } from 'react'
import { NavDrawer } from '../navDrawer'
import styles from './NavIcon.module.css'

export const NavIcon = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer((prevOpenDrawer) => !prevOpenDrawer);
  };

  return (
    <>
      <div className={`${styles.nav_icon_container} ${openDrawer ? styles.change : ''}`} onClick={toggleDrawer}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
      <NavDrawer isOpen={openDrawer} toggleDrawer={toggleDrawer} />
    </>
  )
}
