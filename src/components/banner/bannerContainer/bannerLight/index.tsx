import React from 'react'
import { WrapperProps } from '@/types/globalTypes'
import styles from './BannerLight.module.css'

export const BannerLight: React.FC<WrapperProps> = ({ children }) => {
    return (
        <section className={styles.banner_container}>
            <div className={styles.banner_content}>
                {children}
            </div>
        </section>
    )
}
