import Image from 'next/image'
import { getBlogPosts } from './lib/contentful'
import Link from 'next/link'

export default async function Home() {
  const data = await getBlogPosts()
  const HeroImg = 'https://inp-emmanuel.s3.us-east-2.amazonaws.com/images-inp/inp-hero-comp.jpeg'

  return (
    <main>
      <nav>
          <Link href='/mision' className='text-xl text-white'>Misión</Link>
          <Link href='/visitanos'>Visítanos</Link>
          <Link href=''></Link>
          <Link href=''></Link>
      </nav>
      {data.map((item: any, index: number) => (
        <p key={index}>
          {item.fields.title} hhhhhh
        </p>
      ))}
      <div className='hero-container'>
      <Image alt='hero image' src={HeroImg} width={1600} height={1100} className='hero-img'/>
      <div className='hero-overlay' />
      </div>
    </main>
  )
}
