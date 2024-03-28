'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { heroOtherImgs } from '@/lib/mappedObjects'
import styles from './HeroImg.module.css'
import { heroOtherNames } from '@/lib/mappedObjects'

export const HeroImg = () => {
	const pathname = usePathname()

	return (
		<>
			{heroOtherImgs.map((img, index) => {
				const isActive = pathname.startsWith(img.href)
				return (
					<React.Fragment key={index}>
						<Image
							src={img.src}
							alt={img.alt}
							width={img.width}
							height={img.height}
							loading='eager'
							priority
							className={isActive ? `${styles.hero_img}` : 'hidden'}
						/>
					</React.Fragment>
				)
			})}
		</>
	)
}
