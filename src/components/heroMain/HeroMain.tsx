import React from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

const HeroMain = () => {
    const HeroImg = `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}images-inp/inp-church.jpeg`

    return (
        <div className={styles.hero_container}>
            <Image alt='hero image' src={HeroImg} width={809} height={353} className={styles.hero_img} priority />
            <div className={styles.hero_overlay} />
        </div>
    )
}

export default HeroMain