import React from 'react'
import Image from 'next/image'
import { BannerGeneralLight } from '../bannerContainer/bannerGeneralLight'
import { getEvents } from '@/lib/contentful'
import { MappedItemProps } from '@/types/globalTypes'
import styles from './BannerEvents.module.css'

export const BannerEvents = async () => {
	const data = await getEvents()

	const eventDateTime = (item: MappedItemProps) => {
		if (item.startDate === item.endDate && item.startTime === item.endTime) {
			return (
				<>
					<div className={styles.event_day}>
						<p className='w-full'>{item.startDate}</p>
					</div>
					<div className={styles.event_time}>
						<p className='w-full'>{item.startTime}</p>
					</div>
				</>
			)
		} else if (
			item.startDate === item.endDate &&
			item.startTime !== item.endTime
		) {
			return (
				<>
					<div className={styles.event_day}>
						<p className='w-full'>{item.startDate}</p>
					</div>
					<div className={styles.event_time}>
						<p className='w-[30%] md:w-1/3'>{item.startTime}</p>
						{' — '}
						<p className='w-[30%] md:w-1/3'>{item.endTime}</p>
					</div>
				</>
			)
		} else if (item.startDate !== item.endDate) {
			return (
				<>
					<div className={styles.event_day}>
						<p className='w-1/3'>{item.startDate}</p>
						{' ＿ '}
						<p className='w-1/3'>{item.endDate}</p>
					</div>
					<div className={styles.event_time}>
						<p className='w-[43%]'>{item.startTime}</p>
						{'  '}
						<p className='w-[41%]'>{item.endTime}</p>
					</div>
				</>
			)
		} else {
			return (
				<>
					<p>{item.startTime}</p>
				</>
			)
		}
	}

	return (
		<BannerGeneralLight>
			<div className={styles.banner_title}>
				<h3>Eventos</h3>
				<button>
					Ver todos <i className={styles.arrow} />
				</button>
			</div>
			<div className={styles.banner_events}>
				{data?.map((item: MappedItemProps, index: number) => (
					<React.Fragment key={index}>
						<div className={styles.events_card}>
							<div className={styles.event_text}>
								<p className={styles.event_title}>{item.title}</p>
								<div className={styles.event_date}>{eventDateTime(item)}</div>
							</div>
							{item.thumbnail && (
								<>
									<Image
										src={`https:${item.thumbnail.url}`}
										alt={item.title}
										width={item.thumbnail.width}
										height={item.thumbnail.height}
									/>
									<div className={styles.event_overlay} />
								</>
							)}
						</div>
					</React.Fragment>
				))}
			</div>
		</BannerGeneralLight>
	)
}
