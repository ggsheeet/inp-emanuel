import { HeroMain } from '@/components/hero/heroMain'
import { BannerMain } from '@/components/banner/bannersMain/bannerVisit'
import { BannerReuse } from '@/components/banner/bannersMain/bannerWelcome'
import { BannerGrid } from '@/components/banner/bannersMain/bannerGrid'

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
