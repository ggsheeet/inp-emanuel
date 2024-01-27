import React from 'react'
import { VisitButton, WatchButton } from './buttonCTA'
import styles from './HeroCTA.module.css'

export const HeroCTA = () => {

    return (
        <div className={styles.hero_text}>
            <p>Una <span>esperanza</span> para la familia</p>
            <div className={styles.button_group}>
                <VisitButton />
                <WatchButton />
            </div>
        </div>
    )
}
