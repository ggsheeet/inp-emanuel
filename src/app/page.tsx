import HeroMain from '@/components/heroMain/HeroMain'
import { getBlogPosts } from '@/lib/contentful/contentful'

export default async function Home() {
  const data = await getBlogPosts()

  return (
    <main>
      <HeroMain />
      {data.map((item: any, index: number) => (
        <p key={index}>
          {item.fields.title}
        </p>
      ))}
    </main>
  )
}
