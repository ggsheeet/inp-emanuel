'use client'
import React, { useRef } from 'react'
import { NavDrawer } from '../navDrawer'
import iconStyles from './NavIcon.module.css'
import drawerStyles from './../navDrawer/NavDrawer.module.css'

export const NavIcon = () => { 
  const iconRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null)

  const navIconClick = () => {
    if (iconRef.current && drawerRef.current) {
      iconRef.current.classList.toggle(iconStyles.change);
      drawerRef.current.classList.toggle(drawerStyles.open);
    }
  };

  return (
    <>
      <div className={iconStyles.nav_icon_container} onClick={() => navIconClick()} ref={iconRef}>
        <div className={iconStyles.bar1}></div>
        <div className={iconStyles.bar2}></div>
        <div className={iconStyles.bar3}></div>
      </div>
      <NavDrawer ref={drawerRef} />
    </>
  );
};
