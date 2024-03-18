'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { heroMainImgs } from '@/lib/mappedObjects'
import styles from './HeroImg.module.css'

export const HeroImg = () => {
	useEffect(() => {
		let myIndex = 0

		function carousel() {
			const slides = document.getElementsByClassName(
				styles.mySlides
			) as HTMLCollectionOf<HTMLElement>

			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = 'none'
			}

			myIndex++
			if (myIndex > slides.length) {
				myIndex = 1
			}

			const currentSlide = slides[myIndex - 1]
			if (currentSlide) {
				currentSlide.style.display = 'block'
			}
			setTimeout(carousel, 5000)
		}

		carousel()
	}, [])

	return (
		<>
			{heroMainImgs.map((img, index) => {
				return (
					<React.Fragment key={index}>
						<Image
							src={img.src}
							alt={img.alt}
							width={img.width}
							height={img.height}
							loading='eager'
							priority
							className={`${styles.mySlides} ${styles.hero_img}`}
						/>
					</React.Fragment>
				)
			})}
		</>
	)
}
