import { HeroMain } from '@/components/hero'
import { BannerMain } from '@/components/banner/bannerVisit'
import { BannerReuse } from '@/components/banner/bannerWelcome'
import { BannerEvents } from '@/components/banner/bannerEvents'

export default async function Home() {
	return (
		<main>
			<HeroMain />
			<BannerMain />
			<BannerReuse />
			<BannerEvents />
		</main>
	)
}
