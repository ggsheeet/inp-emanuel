import React from 'react'
import { WrapperProps } from '@/types/globalTypes'
import styles from './BannerGeneralLight.module.css'

export const BannerGeneralLight: React.FC<WrapperProps> = ({ children }) => {
	return (
		<section className={styles.banner_container}>
			<div className={styles.banner_content}>{children}</div>
		</section>
	)
}
