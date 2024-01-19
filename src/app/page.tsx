import Image from 'next/image'
import NavBar from '@/components/navBar/NavBar'
import { getBlogPosts } from '@/lib/contentful/contentful'
import styles from './Home.module.css'

export default async function Home() {
  const data = await getBlogPosts()
  const HeroImg = `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}images-inp/inp-church.jpeg`

  return (
    <main>
      <div className={styles.hero_container}>
        <Image alt='hero image' src={HeroImg} width={809} height={353} className={styles.hero_img} priority />
        <div className={styles.hero_overlay} />
      </div>
      {data.map((item: any, index: number) => (
        <p key={index}>
          {item.fields.title}
        </p>
      ))}
    </main>
  )
}
