'use client'
import React from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import InpLogo from '/public/inp-main.png'
import styles from './Nav.module.css'
import { useFontContext } from '@/lib/context/FontContext'

const NavBar = () => {
    const { rale = { className: '' }, ruhl = { className: '' } } = typeof window !== 'undefined' ? useFontContext() : {};

    return (
        <nav>
            <div className={styles.nav_title_logo}>
                <NavLink href='/'>
                    <Image src={InpLogo} alt='INP Logo' width={232} height={325} className={styles.nav_logo} />
                </NavLink>
                <NavLink href='/'>
                    <div className={`${styles.nav_title} ${ruhl.className}`}>
                        <p>Iglesia Nacional Presbiteriana</p>
                        <p>Emanuel Dios con Nostros</p>
                    </div>
                </NavLink>
            </div>
            <div className={`${styles.nav_menu} ${rale.className}`}>
                <NavLink href='/mision'>Misión</NavLink>
                <NavLink href='/visitanos'>Visítanos</NavLink>
                <NavLink href='/eventos'>Eventos</NavLink>
                <NavLink href='/blog'>Blog</NavLink>
                <NavLink href='/contacto'>Contáctanos</NavLink>
                <NavLink href='/contribucion'>Contribuir</NavLink>
            </div>
        </nav>
    )
}

export default NavBar