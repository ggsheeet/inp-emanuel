import React from 'react'
import { VisitButton, WatchButton } from './buttonCTA'
import styles from './HeroCTA.module.css'

export const HeroCTA = () => {

    return (
        <div className={styles.hero_text}>
            <h1>Una <span>esperanza</span> para la familia</h1>
            <div className={styles.button_group}>
                <VisitButton />
                <WatchButton />
            </div>
        </div>
    )
}
