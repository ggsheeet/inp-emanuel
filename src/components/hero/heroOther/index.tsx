import React from 'react'
import styles from './HeroOther.module.css'
import { HeroOverlay } from './heroOverlay'
import { HeroImg } from './heroImg'
import { HeroCTA } from './heroCTA'

export const HeroOther = () => {
	return (
		<div className={styles.hero_container}>
			<HeroImg />
			<HeroOverlay />
			<HeroCTA />
		</div>
	)
}
