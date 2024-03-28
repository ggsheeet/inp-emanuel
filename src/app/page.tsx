import { HeroMain } from '@/components/hero/heroMain'
import { BannerMain } from '@/components/banner/bannerVisit'
import { BannerReuse } from '@/components/banner/bannerWelcome'
import { BannerGrid } from '@/components/banner/bannerGrid'

export default async function Home() {
	return (
		<main>
			<HeroMain />
			<BannerMain />
			<BannerReuse />
			<BannerGrid />
		</main>
	)
}
