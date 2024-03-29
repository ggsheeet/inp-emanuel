import React from 'react'
import Image from 'next/image'
import { NavLink } from '../navLink'
import { NavIcon } from '../navMobile/navIcon'
import { InpLogo } from '@/components/media'
import styles from './NavMain.module.css'
import NavMenu from './navMenu'

export const NavMain = () => {
	return (
		<nav>
			<div className={styles.nav_container}>
				<div className={styles.nav_title_logo}>
					<NavLink href='/'>
						<Image
							src={InpLogo}
							loading='eager'
							priority
							alt='INP Logo'
							width={232}
							height={325}
							className={styles.nav_logo}
						/>
					</NavLink>
					<NavLink href='/'>
						<div className={styles.nav_title_desktop}>
							<p>Iglesia Nacional Presbiteriana</p>
							<p>Emanuel Dios con Nostros</p>
						</div>
						<div className={styles.nav_title_mobile}>
							<p>INP Emanuel</p>
						</div>
					</NavLink>
				</div>
				<NavMenu />
				<NavIcon />
			</div>
		</nav>
	)
}
