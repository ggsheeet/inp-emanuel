import React from 'react'
import { DataProvider } from '@/lib/context'
import { BannerGeneralLight } from '../../bannerContainer/bannerGeneralLight'
import { BannerContentful } from './bannerContentful'

export const BannerGrid = async () => {
	return (
		<DataProvider>
			<BannerGeneralLight>
				<BannerContentful type='events' />
				<BannerContentful type='blog' />
			</BannerGeneralLight>
		</DataProvider>
	)
}
