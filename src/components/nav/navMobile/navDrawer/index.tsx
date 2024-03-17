import React from 'react'
import Link from 'next/link'
import { mobileLinks } from '@/lib/mappedObjects'
import { DrawerProps } from '@/types/globalTypes'
import styles from './NavDrawer.module.css'

export const NavDrawer: React.FC<DrawerProps> = ({ isOpen, toggleDrawer }) => {
  return (
    <div className={`${styles.drawer_container} ${isOpen ? styles.open : ''}`}>
      {mobileLinks.map((link, index) => (
        <React.Fragment key={index}>
          <Link href={link.href} rel='noopener noreferrer' onClick={toggleDrawer}>
            {link.name}
          </Link>
          <hr className={styles.solid} />
        </React.Fragment>
      ))}
    </div>
  )
}
