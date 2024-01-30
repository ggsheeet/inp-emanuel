import React from 'react'
import styles from './BannerMain.module.css'

export const BannerMain = () => {
    return (
        <section className={styles.banner_container}>
            <div className={styles.banner_text}>
                <h2>Acompáñanos este domingo para alabar a Dios en su casa</h2>
                <div className={styles.service_hours}>
                    <h3>horario de nuestro servicio</h3>
                    <h3>11:30am - 1pm</h3>
                    <button>Planea tu visita</button>
                </div>
            </div>
        </section>
    )
}
