import React from 'react'
import { BannerLight } from '../bannerContainer/bannerLight'
import styles from './BannerVisit.module.css'

export const BannerMain = () => {
	return (
		<BannerLight>
			<div className={styles.join_us}>
				<h2>Acompáñanos este domingo para alabar a Dios en su casa</h2>
			</div>
			<div className={styles.service_hours}>
				<h3>horario de nuestro servicio</h3>
				<h3>11:30am - 1pm</h3>
				<button>Planea tu visita</button>
			</div>
		</BannerLight>
	)
}
