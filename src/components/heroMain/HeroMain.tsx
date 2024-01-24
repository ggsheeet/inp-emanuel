'use client'
import React from 'react'
import styles from './Hero.module.css'
import { HeroOverlay } from './heroOverlay/HeroOverlay'
import { HeroImg } from './heroImg/HeroImg'
import { HeroCTA } from './heroCTA/HeroCTA'

export const HeroMain = () => {

    return (
        <div className={styles.hero_container}>
            <HeroImg />
            <HeroOverlay />
            <HeroCTA />
        </div>
    )
}
