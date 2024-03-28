import React from 'react'
import { BannerGeneralLight } from '@/components/banner/bannerContainer/bannerGeneralLight'
import styles from './BannerIntro.module.css'

const BannerIntro = () => {
	return (
		<BannerGeneralLight>
			<div className={styles.banner_title}>
				<h2>¿En qué basamos nuestra fé?</h2>
			</div>
			<div className={styles.banner_description}>
				<div className={styles.banner_points}>
					<h3>Un solo Dios</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className={styles.banner_points}>
					<h3>Un solo Salvador</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className={styles.banner_points}>
					<h3>Una sola Escritura</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>
		</BannerGeneralLight>
	)
}

export default BannerIntro
