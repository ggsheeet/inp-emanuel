'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from './HeroImg.module.css'

export const HeroImg = () => {
    const HeroImgOne = `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}images-inp/front-door.jpeg`
    const HeroImgTwo = `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}images-inp/service.jpeg`
    const HeroImgThree = `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}images-inp/kids-service.jpeg`

    useEffect(() => {
        let myIndex = 0;

        function carousel() {
            const slides = document.getElementsByClassName(styles.mySlides) as HTMLCollectionOf<HTMLElement>;

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }

            myIndex++;
            if (myIndex > slides.length) {
                myIndex = 1;
            }

            const currentSlide = slides[myIndex - 1];
            if (currentSlide) {
                currentSlide.style.display = 'block';
            }
            setTimeout(carousel, 5000);
        }

        carousel();
    }, []);

    return (
        <>
            <Image alt='hero image one' src={HeroImgOne} loading='eager' priority className={`${styles.mySlides} ${styles.hero_img}`} width={768} height={124} />
            <Image alt='hero image two' src={HeroImgTwo} loading='eager' priority className={`${styles.mySlides}  ${styles.hero_img}`} width={1600} height={900} />
            <Image alt='hero image three' src={HeroImgThree} loading='eager' priority className={`${styles.mySlides} ${styles.hero_img}`} width={2048} height={1536} />
        </>
    )
}
