import { HeroMain } from '@/components/hero'
import { getBlogPosts } from '@/lib/contentful'
import { BannerMain } from '@/components/banner/bannerMain'

export default async function Home() {
  const data = await getBlogPosts()

  return (
    <main>
      <HeroMain />
      {/* {data.map((item: any, index: number) => (
        <p key={index}>
          {item.fields.title}
        </p>
      ))} */}
      <BannerMain />
    </main>
  )
}
