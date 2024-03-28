'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { heroOtherNames } from '@/lib/mappedObjects'
import styles from './HeroCTA.module.css'

export const HeroCTA = () => {
	const pathname = usePathname()

	return (
		<div className={styles.hero_text}>
			{heroOtherNames.map((cta, index) => {
				const isActive = pathname.startsWith(cta.href)
				return (
					<h1
						key={index}
						className={isActive ? '' : 'hidden'}
					>
						{cta.name}
					</h1>
				)
			})}
		</div>
	)
}
