import React from 'react'
import styles from './HeroMain.module.css'
import { HeroOverlay } from '../heroOverlay'
import { HeroImg } from '../heroImg'
import { HeroCTA } from '../heroCTA'

export const HeroMain = () => {

    return (
        <div className={styles.hero_container}>
            <HeroImg />
            <HeroOverlay />
            <HeroCTA />
        </div>
    )
}