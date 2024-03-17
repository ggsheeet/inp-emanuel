import React from 'react'
import Image from 'next/image'
import styles from './BannerWelcome.module.css'
import { BannerDark } from '../bannerContainer/bannerDark'

export const BannerReuse = () => {
    const BannerImg = `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}images-inp/inside.webp`
    return (
        <BannerDark>
                <div className={styles.banner_text}>
                    <h4>Bienvenido</h4>
                    <h3>
                        Emanuel es una Iglesia de Cristo
                    </h3>
                    <p>
                        En nuestra iglesia, reconocemos a Jesucristo como nuestro único Salvador y la piedra angular
                        de nuestra fe.
                    </p>
                    <p>
                        Siguiendo los principios de nuestra fé reformada, nos esforzamos por vivir de acuerdo
                        con las Escrituras y confesamos la soberanía de Dios en todas las áreas de nuestras vidas.
                    </p>
                    <button>Conócenos</button>
                </div>
                <div className={styles.banner_img}>
                    <Image alt='banner img one' src={BannerImg} width={1600} height={1200} />
                </div>
        </BannerDark>
    )
}
