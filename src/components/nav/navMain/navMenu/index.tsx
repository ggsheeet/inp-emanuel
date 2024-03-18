'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { menuLinks } from '@/lib/mappedObjects'
import { NavLink } from '../../navLink'
import styles from '../NavMain.module.css'

const NavMenu = () => {
	const pathname = usePathname()

	return (
		<div className={styles.nav_menu}>
			{menuLinks.map((link, index) => {
				const isActive = pathname.startsWith(link.href)
				return (
					<React.Fragment key={index}>
						<NavLink
							href={link.href}
							className={isActive ? 'text-brand-link' : ''}
						>
							{link.name}
						</NavLink>
					</React.Fragment>
				)
			})}
		</div>
	)
}

export default NavMenu
