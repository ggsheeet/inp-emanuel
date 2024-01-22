'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import InpLogo from '/public/inp-main.png'
import styles from './Nav.module.css'
import { useFontContext } from '../../lib/context/FontContext'

const NavBar = () => {
    const router = useRouter()

    const backPage = () => {
        router.back()
    }

    const currentUrl = usePathname()
    
    useEffect(() => {
        console.log(currentUrl)
    }, [currentUrl])

    const { rale, ruhl } = useFontContext()

    return (
        <nav>
            <div className={styles.nav_title_logo}>
                <Link href='/'>
                    <div className={`${styles.nav_title} ${ruhl.className}`}>
                        <p>Iglesia Nacional Presbiteriana</p>
                        <p>Emanuel Dios con Nostros</p>
                    </div>
                </Link>
                <Image src={InpLogo} alt='INP Logo' width={232} height={325} className={styles.nav_logo} />
            </div>
            <div className={styles.nav_menu}>
                <Link href='/'>Inicio</Link>
                <Link href='/mision'>Misión</Link>
                <Link href='/visitanos'>Visítanos</Link>
                <Link href='/eventos'>Eventos</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/contacto'>Contáctanos</Link>
            </div>
        </nav>
    )
}

export default NavBar